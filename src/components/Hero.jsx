// Hero.jsx
import { motion } from 'framer-motion';
import { FaArrowRight, FaInfoCircle, FaUsers } from 'react-icons/fa';

// Estilos para las sombras de texto
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
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Estilos de sombra de texto */}
      <style dangerouslySetInnerHTML={{ __html: textShadowStyles }} />
      
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Overlay menos oscuro para que se vea más el video */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
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
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
            poster="/images/headstone-qr.jpeg"
          >
            <source src="/videos/demo.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        </motion.div>
      </div>
      
      {/* Contenido con animación de entrada */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          className="max-w-3xl mx-auto text-center text-white mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">Códigos QR: Conexión Eterna con tus Seres Queridos</h1>
          <p className="text-xl mb-8 text-shadow-md">
            Preserva la memoria de tus seres queridos con nuestros códigos QR para lápidas. Un simple escaneo conecta con recuerdos, historias y legados.
          </p>
          
          {/* Badge de confianza */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-black/50 backdrop-blur-sm px-5 py-3 rounded-full inline-flex items-center shadow-lg border border-white/30">
              <FaUsers className="text-primary-100 mr-3 text-lg" />
              <span className="text-sm font-bold text-shadow-md">Más de 1,000 familias confían en nosotros</span>
            </div>
          </motion.div>
          
          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Botón principal mejorado */}
            <motion.a 
              href="#productos" 
              className="flex items-center justify-center bg-primary hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-xl w-full sm:w-auto text-shadow-md border-2 border-white/30"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2 text-base">Conoce Nuestros Productos</span>
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
              <span className="text-base">¿Cómo Funciona?</span>
            </motion.a>
          </div>
          
          {/* Mini CTA */}
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a href="#contacto" className="inline-block bg-black/40 hover:bg-black/60 px-4 py-2 rounded-full text-white hover:text-primary-100 transition-colors text-shadow-md font-medium border border-white/30">
              ¿Preguntas? Contáctanos ahora
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;