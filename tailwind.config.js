/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8F4FF',
          100: '#D2E9FF',
          200: '#A5D3FF',
          300: '#78BDFF',
          400: '#4AA8FF',
          500: '#1D92FF',
          600: '#1575CC',
          700: '#0E5799',
          800: '#083A66',
          900: '#041D33',
          DEFAULT: '#4AA8FF',
        },
        surface: '#F6FBFF',
      },
      boxShadow: {
        glow: '0 10px 50px rgba(74, 168, 255, 0.15)',
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
}
