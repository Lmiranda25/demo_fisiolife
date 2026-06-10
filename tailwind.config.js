/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta derivada del logo real de Fisiolife (azul marino + verde)
        navy: {
          50: '#EAF0F7',
          100: '#D0DEEE',
          200: '#A1BDDD',
          300: '#6E96C5',
          400: '#3F6FAC',
          500: '#1B4F8A', // azul marino marca
          600: '#163F70',
          700: '#102F54', // navy profundo (headers/footer)
          800: '#0B2540',
          900: '#07192C',
        },
        leaf: {
          50: '#EEF8EC',
          100: '#D6EFD0',
          200: '#AEDFA3',
          300: '#84CE73',
          400: '#5FBE49',
          500: '#48A832', // verde marca (acento/vitalidad)
          600: '#388827',
          700: '#2C691F',
          800: '#214E18',
          900: '#163612',
        },
        ink: '#152230',
        paper: '#F7FAFC',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 40px -12px rgba(16, 47, 84, 0.22)',
        card: '0 6px 24px -10px rgba(16, 47, 84, 0.18)',
        glow: '0 0 28px -4px rgba(72, 168, 50, 0.45)',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #1B4F8A 0%, #102F54 100%)',
        'leaf-gradient': 'linear-gradient(135deg, #5FBE49 0%, #48A832 100%)',
        'hero-gradient': 'linear-gradient(120deg, #07192C 0%, #102F54 55%, #1B4F8A 100%)',
      },
      height: { 18: '4.5rem' },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', opacity: '1' },
          '100%': { transform: 'scale(1.7)', opacity: '0' },
        },
        blob: {
          '0%, 100%': { borderRadius: '42% 58% 70% 30% / 45% 45% 55% 55%' },
          '50%': { borderRadius: '58% 42% 35% 65% / 55% 60% 40% 45%' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pulseRing: 'pulseRing 1.8s cubic-bezier(0.4,0,0.6,1) infinite',
        blob: 'blob 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
