const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
        display: ['Fraunces', 'Georgia', ...defaultTheme.fontFamily.serif],
        logo: ['"Cormorant Garamond"', 'Georgia', ...defaultTheme.fontFamily.serif],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        cream: 'var(--color-cream)',
        'warm-white': 'var(--color-warm-white)',
        sand: 'var(--color-sand)',
        stone: 'var(--color-stone)',
        walnut: 'var(--color-walnut)',
        espresso: 'var(--color-espresso)',
        terracotta: {
          DEFAULT: 'var(--color-terracotta)',
          light: 'var(--color-terracotta-light)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
