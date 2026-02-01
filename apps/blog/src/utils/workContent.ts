import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { companyMetadata } from '../content/work/companies';

const workDirectory = path.join(process.cwd(), 'src/content/work');

export type WorkArticle = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  readingTime: {
    text: string;
  };
};

export type Company = {
  id: string;
  name: string;
  displayName: string;
  logo: string;
  period: string;
  description: string;
  role?: string;
};

/**
 * Parse start date from period string (e.g., "SEP 2025 — PRESENT" -> Date object)
 */
function parseStartDate(period: string): Date {
  const startPart = period.split('—')[0].trim();
  return new Date(startPart);
}

/**
 * Get all companies that have work articles
 */
export function getAllCompanies(): Company[] {
  let companyIds: string[] = [];

  try {
    const companies = fs.readdirSync(workDirectory);
    companyIds = companies.filter((company) => {
      const companyPath = path.join(workDirectory, company);
      return fs.statSync(companyPath).isDirectory();
    });
  } catch (error) {
    // Fallback for environments where the content directory isn't available at runtime.
    companyIds = Object.keys(companyMetadata);
  }

  return companyIds
    .map((companyId) => ({
      id: companyId,
      ...(companyMetadata[companyId] || {
        name: companyId,
        displayName: companyId,
        logo: '',
        period: '',
        description: '',
        role: '',
      }),
    }))
    .sort((a, b) => {
      // Sort by start date (most recent first)
      const dateA = parseStartDate(a.period);
      const dateB = parseStartDate(b.period);
      return dateB.getTime() - dateA.getTime();
    });
}

/**
 * Get all articles for a specific company
 */
export function getArticlesByCompany(companyId: string): WorkArticle[] {
  const companyPath = path.join(workDirectory, companyId);

  try {
    const files = fs.readdirSync(companyPath);

    const articles = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const slug = file.replace(/\.md$/, '');
        const fullPath = path.join(companyPath, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || slug,
          date: data.date || '',
          description: data.description || '',
          content,
          readingTime: readingTime(content),
        };
      })
      .sort((a, b) => {
        // Sort by date (most recent first)
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

    return articles;
  } catch (error) {
    return [];
  }
}

/**
 * Get a single article by company and slug
 */
export function getArticleBySlug(
  companyId: string,
  slug: string
): WorkArticle | null {
  try {
    const fullPath = path.join(workDirectory, companyId, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      description: data.description || '',
      content,
      readingTime: readingTime(content),
    };
  } catch (error) {
    return null;
  }
}

/**
 * Get all article slugs for a company (for static path generation)
 */
export function getArticleSlugs(companyId: string): string[] {
  try {
    const companyPath = path.join(workDirectory, companyId);
    const files = fs.readdirSync(companyPath);

    return files
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace(/\.md$/, ''));
  } catch (error) {
    return [];
  }
}
