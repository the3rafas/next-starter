import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '880px',
      md: '904px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundColor: {
        'bg-primary': 'rgb(var(--color-primary))',
        'bg-danger': 'rgb(var(--color-primary))',
        'bg-success': 'rgb(var(--color-primary))',
      },
      colors: {
        'text-primary': 'rgb(var(--color-primary))',
        'text-danger': 'rgb(var(--color-danger))',
        'text-success': 'rgb(var(--color-success))',
      },
    },
  },
  plugins: [],
};
export default config;
