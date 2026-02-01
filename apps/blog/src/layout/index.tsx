import Head from './Head';
import Navigation from './Navigation';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className='bg-cream min-h-screen'>
      <Head />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
