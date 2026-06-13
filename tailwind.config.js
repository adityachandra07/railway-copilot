/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rail: {
          50: '#f0f4ff', 100: '#dce8ff', 200: '#b9d0ff',
          300: '#84adff', 400: '#4d7fff', 500: '#1a56ff',
          600: '#0035e0', 700: '#0028b4', 800: '#002293',
          900: '#001a7a', 950: '#000f52',
        },
        track: {
          50: '#fdf2ff', 100: '#fae6ff', 200: '#f4ccff',
          300: '#eca3ff', 400: '#e070ff', 500: '#cc44fb',
          600: '#b020e0', 700: '#9318b8',
          800: '#7a1796', 900: '#64167a',
        },
        signal: {
          green: '#00c853', amber: '#ffab00', red: '#d50000',
          blue: '#2979ff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'rail-gradient': 'linear-gradient(135deg, #000f52 0%, #0028b4 50%, #1a56ff 100%)',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
      }
    },
  },
  plugins: [],
}
