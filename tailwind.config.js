/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'clr-bg': 'var(--clr-bg)',
        'clr-bg-dark': 'var(--clr-bg-dark)',
        'clr-bg-muted': 'var(--clr-bg-muted)',
        'clr-text': 'var(--clr-text)',
        'clr-text-muted': 'var(--clr-text-muted)',
        'clr-accent': 'var(--clr-accent)',
      },
    },
  },
  plugins: [],
};
