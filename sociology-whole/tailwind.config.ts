import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E4D3B',
          light: '#4A7C68',
        },
        secondary: '#1B2A41',
        accent: '#C98A4B',
        background: '#FAF9F5',
        surface: '#F1EFE9',
        ink: '#1C1C1A',
        'text-secondary': '#6B6F66',
        border: '#E2E0D8',
        success: '#7A9B76',
        error: '#B85C4A',
      },
      fontFamily: {
        serif: ['Noto Serif KR', 'serif'],
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '10px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}

export default config
