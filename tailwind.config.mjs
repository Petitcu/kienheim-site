/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        kienheim: {
          primary:    '#2B4C6F',
          'primary-dark': '#5B8AB5',
          secondary:  '#5C7A56',
          accent:     '#C9A84C',
          'accent-hover': '#B8943A',
          bg:         '#F8F5F0',
          fg:         '#1A1A1A',
          muted:      '#6B7280',
          border:     '#E5E1DB',
          // dark surfaces
          'dark-bg':      '#151B23',
          'dark-surface': '#1E2530',
          'dark-border':  '#2A3040',
          'dark-fg':      '#E8E4DF',
          // footer
          footer:     '#1E3550',
        },
      },
      animation: {
        'bounce-slow': 'bounce-arrow 1.5s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
      },
      keyframes: {
        'bounce-arrow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
