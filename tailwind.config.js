/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F9',
          100: '#E1E9F2',
          200: '#C2D3E5',
          300: '#94B4D3',
          400: '#5F8EBD',
          500: '#386DA3',
          600: '#265484',
          700: '#1F426A',
          800: '#183153', // Primary Navy
          900: '#12243D',
          950: '#0B1728',
        },
        teal: {
          50: '#F0F8F7',
          100: '#D7EFEB',
          200: '#AFDED6',
          300: '#7EC6BD',
          400: '#4EA99F',
          500: '#2A8C82', // Secondary Teal
          600: '#22736B',
          700: '#1D5C56',
          800: '#194945',
          900: '#173E3B',
        },
        gold: {
          50: '#FCF9F2',
          100: '#F7F0DF',
          200: '#EEE0BE',
          300: '#E2CC97',
          400: '#D5B770',
          500: '#C6A15B', // Accent Warm Gold
          600: '#A98345',
          700: '#866436',
          800: '#6C4F2F',
          900: '#5A4129',
        },
        slate: {
          soft: '#F4F7FA', // Soft Blue-Gray background
          dark: '#243247', // Primary Dark Slate text
          muted: '#52627A',
          subtle: '#8C9BAE',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(24, 49, 83, 0.06), 0 2px 6px -1px rgba(24, 49, 83, 0.04)',
        'card': '0 10px 30px -5px rgba(24, 49, 83, 0.08), 0 4px 10px -2px rgba(24, 49, 83, 0.03)',
        'card-hover': '0 20px 35px -8px rgba(24, 49, 83, 0.12), 0 6px 15px -3px rgba(42, 140, 130, 0.08)',
        'gold-glow': '0 0 25px -4px rgba(198, 161, 91, 0.35)',
      }
    },
  },
  plugins: [],
}
