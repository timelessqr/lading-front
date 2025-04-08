// tailwind.config.js
/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'primary': {
          DEFAULT: '#FFFFFF',  // Blanco como color principal
          '50': '#FFFFFF',
          '100': '#F5F5F5',
          '200': '#EEEEEE',
          '300': '#E0E0E0',
          '400': '#BDBDBD',
          '500': '#9E9E9E',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
        
       
        'blue': {
          DEFAULT: '#2B4D8C',  
          '50': '#F2F5FA',
          '100': '#D9E2F3',
          '200': '#B3C6E7',
          '300': '#8CAADB',
          '400': '#668ECF',
          '500': '#4072C4',
          '600': '#2B4D8C',  
          '700': '#1F3A6C',
          '800': '#14274D',
          '900': '#0A142D',
        },
        
        // Color secundario: Marrón cálido tierra (complementa bien)
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
        
        // Color de acento: Dorado apagado (para detalles elegantes)
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
  },
  plugins: [],
}