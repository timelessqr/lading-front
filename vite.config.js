import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'], // <-- Se mantiene tu configuración existente

  // --- INICIO: Configuración del Servidor Añadida ---
  server: {
    host: true, // <-- Para asegurar acceso vía IP local (192.168...)
    allowedHosts: [
      'lazos.bitsdeve.com' 
    ],
  },
  
});