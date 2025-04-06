// tailwind.config.js
/** @type {import('tailwindcss').Config} */
// Asegúrate de que tu proyecto esté ejecutando "npx tailwindcss init -p" si acabas de instalar Tailwind
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      // --- Paleta de Colores ---
      colors: {
        // Color principal y sus variaciones
        'primary': '#4B5F44',
        'primary-50': '#F5F7F4',
        'primary-100': '#E0E5DE',
        'primary-200': '#C2CCC0',
        'primary-300': '#A3B2A0',
        'primary-400': '#859980',
        'primary-500': '#677F61',
        'primary-600': '#4B5F44', // Idéntico al primary base
        'primary-700': '#3D4C38', // Más oscuro para hover
        'primary-800': '#2E3A2A',
        'primary-900': '#1F271C',
        
        // Textos
        'brand-text-light': '#FFFFFF', // Texto para usar sobre fondos oscuros
        'brand-text-dark': '#333333',  // Texto para usar sobre fondos claros
      },
      // --- Fuentes ---
      fontFamily: {
        // Configura Rubik como la fuente sans-serif por defecto
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}