/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'W00': 'var(--W00)',
        'B100': 'var(--B100)',
        'B200': 'var(--B200)',
        'B300': 'var(--B300)',
        'B400': 'var(--B400)',
        'B500': 'var(--B500)',
        'B600': 'var(--B600)',
        'TW': 'var(--TW)',
        'R500': 'var(--R500)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
} 