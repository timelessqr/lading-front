// Hero.jsx
import React, { useState, useRef, useEffect } from 'react'; // <--- Asegúrate que useEffect esté importado
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaInfoCircle,
  FaUsers,
  FaVolumeUp,
  FaVolumeMute
} from 'react-icons/fa';

// Estilos para las sombras de texto (sin cambios aquí)
const textShadowStyles = `
  .text-shadow-lg {
    text-shadow: 0 2px 4px rgba(0,0,0,0.7), 0 4px 8px rgba(0,0,0,0.7);
  }
  .text-shadow-md {
    text-shadow: 0 2px 4px rgba(0,0,0,0.7);
  }
  .shadow-xl {
    box-shadow: 0 10px 25px rgba(0,0,0,0.25);
  }
  .shadow-lg {
    box-shadow: 0 6px 15px rgba(0,0,0,0.2);
  }
`;

const Hero = () => {
  
  const videoUrl = "https://pub-aa35b927bb064c1e8c7e97ebdbbec0c1.r2.dev/news.mp4"; 

  const videoRef = useRef(null);
  const [isMutedByUser, setIsMutedByUser] = useState(true);

  // --- INICIO: Lógica añadida para Control de Volumen ---
  const [volume, setVolume] = useState(0.7); // Estado para nivel de volumen (70% por defecto)

  // Efecto para asegurar volumen inicial
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, []); // Solo al montar

  // Función para Mute/Unmute (ligeramente ajustada)
  const handleToggleMute = () => {
    const nextMutedState = !isMutedByUser;
    setIsMutedByUser(nextMutedState);
    if (videoRef.current) {
      videoRef.current.muted = nextMutedState;
      if (!nextMutedState) {
         videoRef.current.volume = volume; // Asegurar volumen al desmutear
      }
    }
  };

  // Función para manejar cambio de VOLUMEN desde el slider
  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      // Desmutear si mueven el slider y estaba muteado
      if (newVolume > 0 && videoRef.current.muted) {
         setIsMutedByUser(false);
         videoRef.current.muted = false;
      }
      // Actualizar icono si bajan a 0 o suben desde 0
      if (newVolume === 0 && !isMutedByUser) {
         setIsMutedByUser(true);
      } else if (newVolume > 0 && isMutedByUser && !videoRef.current.muted) {
         setIsMutedByUser(false);
      }
    }
  };
  // --- FIN: Lógica añadida para Control de Volumen ---


  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Estilos de sombra de texto */}
      <style dangerouslySetInnerHTML={{ __html: textShadowStyles }} />

      {/* Video de fondo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Contenedor de video con animación */}
        <motion.div
           initial={{ scale: 1.0 }}
           animate={{
             scale: 1.05,
             y: [0, -10, 0],
           }}
           transition={{
             duration: 20,
             repeat: Infinity,
             repeatType: "reverse"
           }}
           className="h-full w-full"
        >
          <video
            ref={videoRef}
            key={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/images/headstone-qr.jpeg"
            src={videoUrl}
          >
            Tu navegador no soporta videos HTML5.
          </video>
        </motion.div>
      </div>

      {/* --- INICIO: Controles de Audio AGRUPADOS con Slider --- */}
      <div className="absolute bottom-5 right-5 z-30 flex items-center space-x-3 p-2 bg-black/30 rounded-lg border border-white/20 backdrop-blur-sm">
          {/* Botón Mute/Unmute */}
          <button
            onClick={handleToggleMute}
            className="text-white hover:text-gray-300 focus:outline-none transition-colors"
            aria-label={isMutedByUser ? "Activar sonido" : "Silenciar"}
          >
            {(isMutedByUser || volume === 0) ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
          </button>

          {/* Slider de Volumen */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMutedByUser ? 0 : volume} // Slider va a 0 si está muteado
            onChange={handleVolumeChange}
            className="w-20 h-1.5 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-400"
            aria-label="Control de volumen"
          />
      </div>
      {/* --- FIN: Controles de Audio AGRUPADOS con Slider --- */}

      {/* Contenido del Hero (Texto, Botones, etc.) */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          className="max-w-3xl mx-auto text-center text-white mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Todo tu contenido central va aquí, sin abreviar */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">Mantén Viva Su Memoria Con Nuestros Códigos QR</h1>
          <p className="text-xl mb-8 text-shadow-md">
            Lazos de Vida transforma la manera de honrar a tus seres queridos. Cada código QR es una puerta digital a sus recuerdos, historias y momentos más preciados.
          </p>

          {/* Badge de confianza */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-blue-600/30 backdrop-blur-sm px-5 py-3 rounded-full inline-flex items-center shadow-lg border border-white/30">
              <FaUsers className="text-white mr-3 text-lg" />
              <span className="text-sm font-bold text-shadow-md">Miles de familias ya han creado su Lazo de Vida</span>
            </div>
          </motion.div>

          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Botón principal mejorado */}
            <motion.a
              href="#productos"
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-xl w-full sm:w-auto text-shadow-md border-2 border-white/30"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2 text-base">Crea Tu Lazo de Vida</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatType: "loop" }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.a>

            {/* Botón secundario */}
            <motion.a
              href="#como-funciona"
              className="flex items-center justify-center bg-black/50 hover:bg-black/70 border-2 border-white/50 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg w-full sm:w-auto text-shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInfoCircle className="mr-2" />
              <span className="text-base">Cómo Funciona</span>
            </motion.a>
          </div>

          {/* Mini CTA */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a href="#contacto" className="inline-block bg-black/40 hover:bg-black/60 px-4 py-2 rounded-full text-white hover:text-blue-100 transition-colors text-shadow-md font-medium border border-white/30">
              ¿Dudas? Contáctanos
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;