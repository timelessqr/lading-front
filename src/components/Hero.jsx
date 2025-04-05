// Hero.jsx
import { motion } from 'framer-motion';
import headstoneImage from '../assets/images/headstone-qr.JPG';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Mantenemos la imagen como fondo con animación */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
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
          <img 
            src={headstoneImage} 
            alt="Código QR en lápida de mármol" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      
      {/* Contenido con animación de entrada */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          className="max-w-3xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Códigos QR: Conexión Eterna con tus Seres Queridos</h1>
          <p className="text-xl mb-8">
            Preserva la memoria de tus seres queridos con nuestros códigos QR para lápidas. Un simple escaneo conecta con recuerdos, historias y legados.
          </p>
          <motion.a 
            href="#" 
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Conoce Nuestros Productos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;