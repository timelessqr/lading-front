// tailwind.config.js
/** @type {import('tailwindcss').Config} */
// Asegúrate de que tu proyecto esté ejecutando "npx tailwindcss init -p" si acabas de instalar Tailwind

export default {
  theme: {
    extend: {
      colors: {
        // Tu color primario verde ya existente
        'primary': '#4B5F44',
        // ... tus variaciones primarias ...
        
        // Color secundario: Marrón cálido tierra (complementa bien con el verde para memoriales)
        'secondary': '#8A7968',
        'secondary-50': '#F7F5F3',
        'secondary-100': '#E9E5E1',
        'secondary-200': '#D3CCC4',
        'secondary-300': '#BDB3A7',
        'secondary-400': '#A79989',
        'secondary-500': '#8A7968',
        'secondary-600': '#6F6154',
        'secondary-700': '#544A40',
        'secondary-800': '#39332C',
        'secondary-900': '#1F1C18',
        
        // Color de acento: Dorado apagado (para detalles elegantes, simboliza permanencia)
        'accent': '#C4B08C',
        'accent-50': '#FAF8F4',
        'accent-100': '#F0EAE0',
        'accent-200': '#E1D6C1',
        'accent-300': '#D2C3A2',
        'accent-400': '#C4B08C',
        'accent-500': '#B39D73',
        'accent-600': '#9C855A',
        'accent-700': '#7D6B48',
        'accent-800': '#5E5036',
        'accent-900': '#3F3624',
      }
    }
  }
}