const { theme } = require('./src/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: theme.colors,
      spacing: theme.spacing,
      fontSize: theme.fontSizes,
      fontWeight: theme.fontWeights,
      borderRadius: theme.borderRadius,
      boxShadow: theme.shadows,
      transitionDuration: {
        base: theme.transitions.base,
        smooth: theme.transitions.smooth,
        slow: theme.transitions.slow,
      },
    },
  },
  plugins: [],
};
