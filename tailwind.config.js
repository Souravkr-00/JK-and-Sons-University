module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: 'var(--color-navy)',
        gold: 'var(--color-gold)',
        'app-bg': 'var(--color-app-bg)',
        'text-main': 'var(--color-text-main)',
        'text-muted': 'var(--color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
    },
  },
  plugins: [],
};
