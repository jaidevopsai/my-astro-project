/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#1a1a1a',
        'dark-lighter': '#2d2d2d'
      },
      textColor: {
        'dark': '#ffffff',
        'dark-muted': '#a0a0a0'
      }
    },
  },
  plugins: [],
}
