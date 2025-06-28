import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaFacebookSquare,
  FaTiktok,
  FaInstagramSquare,
  FaWhatsapp,
  FaBars,
  FaTimes
} from "react-icons/fa";
// Eliminada la importación de FaXTwitter
import logoImage from '../assets/images/derecho.png'; // Importación del logo de vuelta

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // URL WhatsApp con el enlace proporcionado por el cliente (asumiendo que es el mismo del footer)
  const whatsappUrl = "https://wa.link/bi4zru";

  // Links de redes sociales (usando los mismos del footer para consistencia, puedes ajustarlos si son diferentes para la navbar)
  const socialLinks = {
    facebook: "https://www.facebook.com/share/16D7GtH55G/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/lazosdevidaqr?igsh=YnVuZDZ2NnVmMHd1",
    tiktok: "http://www.tiktok.com/@lazosdevidaqr",
    // Eliminado el link de twitter
  };

  // Definimos la animación del logo para el efecto hover con mayor escala (escritorio)
  const logoHoverAnimation = {
    rest: { scale: 1.0 },
    hover: { scale: 1.18, transition: { duration: 0.3, ease: "easeOut" } }
  };

  // Animación específica para el logo móvil
  // Ajustada la escala del 'tap' para que sea igual a la del hover de escritorio
  const mobileLogoAnimation = {
    rest: { scale: 1.0 },
    hover: { scale: 1.12, transition: { duration: 0.3, ease: "easeOut" } }, // Animación al pasar el mouse (si aplica en algunos dispositivos)
    tap: { scale: 1.18, transition: { duration: 0.1, ease: "easeOut" } } // Ajustada la escala al tocar (para móviles)
  };

  // Efecto para manejar el scroll y cambiar el estilo de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    // Limpieza del event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez al montar el componente

  // Estilo base para la navbar
  const baseStyle = {
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  };

  return (
    <div className="fixed w-full z-50">
      {/* Contenedor principal de la navbar, cambia el fondo al hacer scroll */}
      <div className={scrolled ? "bg-white w-full shadow-md" : ""}>
        <nav
          style={scrolled ? { backdropFilter: 'blur(8px)' } : baseStyle}
          className="w-full transition-all duration-300"
        >
          <div className="container mx-auto px-4 py-3 md:py-9 flex justify-between items-center">
            {/* Versión móvil */}
            <div className="flex w-full items-center justify-between md:hidden">
              {/* Menú hamburguesa (Ahora a la IZQUIERDA) */}
              <button
                className="text-gray-700 hover:text-gray-900 transition-colors focus:outline-none" // Ajuste de color y focus
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Aumentado tamaño del ícono */}
              </button>

              {/* Logo Centrado para móvil */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <motion.a
                  href="#" // Reemplaza con el link a la página de inicio si es necesario
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap" // Añadida animación al tocar
                  animate="rest"
                >
                  <motion.div
                    variants={mobileLogoAnimation} // Usamos las variantes actualizadas
                    style={{
                      width: '160px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      backgroundColor: 'transparent'
                    }}
                  >
                    <img
                      src={logoImage}
                      alt="Lazos de Vida"
                      className="w-full h-full object-contain transition-all duration-300"
                      style={{ transform: 'scale(2.5)' }} // Escala del logo
                    />
                  </motion.div>
                </motion.a>
              </div>

              {/* WhatsApp a la DERECHA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 transition-colors transform hover:scale-110 duration-200" // Añadida animación hover
                aria-label="Contactar por WhatsApp"
              >
                <FaWhatsapp size={24} /> {/* Aumentado tamaño del ícono */}
              </a>
            </div>

            {/* Versión Desktop */}
            <div className="hidden md:flex items-center space-x-4"> {/* Aumentado espacio */}
              {/* Links de redes sociales en escritorio con animación hover */}
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors transform hover:scale-110 duration-200" aria-label="Facebook"><FaFacebookSquare size={20} /></a> {/* Aumentado tamaño y ajuste de color */}
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600 transition-colors transform hover:scale-110 duration-200" aria-label="Instagram"><FaInstagramSquare size={20} /></a> {/* Aumentado tamaño y ajuste de color */}
              <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors transform hover:scale-110 duration-200" aria-label="TikTok"><FaTiktok size={20} /></a> {/* Aumentado tamaño y ajuste de color */}
            </div>

            {/* Logo Centrado para Desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
              <motion.a
                href="#" // Reemplaza con el link a la página de inicio si es necesario
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  variants={logoHoverAnimation}
                  style={{
                    width: '400px', // Ancho del contenedor del logo
                    height: '90px', // Alto del contenedor del logo
                    padding: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    backgroundColor: 'transparent'
                  }}
                >
                  <img
                    src={logoImage}
                    alt="Lazos de Vida"
                    className="w-full h-full object-contain transition-all duration-300"
                    style={{ transform: 'scale(3.0)' }} // Escala del logo
                  />
                </motion.div>
              </motion.a>
            </div>

            {/* WhatsApp a la DERECHA en Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 transition-colors transform hover:scale-110 duration-200" // Añadida animación hover
                aria-label="Contactar por WhatsApp"
              >
                <FaWhatsapp size={24} /> {/* Aumentado tamaño del ícono */}
              </a>
            </div>
          </div>

          {/* Menú desplegable móvil - Ahora a la IZQUIERDA con redes sociales */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="md:hidden shadow-lg py-4 absolute top-full left-0 ml-4 z-50 overflow-hidden rounded-lg bg-white"
                initial={{ opacity: 0, scale: 0.95, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="px-6 py-4">
                  <h3 className="font-medium text-gray-900 mb-3">Redes sociales</h3>
                  <div className="grid grid-cols-2 gap-4"> {/* Ajustado a grid para mejor distribución */}
                    {/* Links de redes sociales en menú móvil con animación hover */}
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transform hover:scale-110 duration-200"><FaFacebookSquare size={18} /> <span>Facebook</span></a> {/* Ajuste de color */}
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-800 hover:text-pink-600 transform hover:scale-110 duration-200"><FaInstagramSquare size={18} /> <span>Instagram</span></a> {/* Ajuste de color */}
                    <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-800 hover:text-black transform hover:scale-110 duration-200"><FaTiktok size={18} /> <span>TikTok</span></a> {/* Ajuste de color */}
                  </div>
                </div>
                 {/* Puedes añadir más links o secciones aquí si es necesario */}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;