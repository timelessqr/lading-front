// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Iconos
import { 
  FaFacebook, 
  FaTiktok, 
  FaInstagramSquare, 
  FaEnvelope,
  FaBars, 
  FaTimes 
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Logo Imagen
import logoImage from '../assets/images/derecho.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const baseStyle = {
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  };

  return (
    <div className="fixed w-full z-50">
      {/* Div exterior controla fondo blanco al hacer scroll */}
      <div className={scrolled ? "bg-white w-full shadow-md" : ""}>
        {/* Navbar con fondo blur */}
        <nav 
          style={scrolled ? { backdropFilter: 'blur(8px)' } : baseStyle} 
          className="w-full transition-all duration-300"
        >
          {/* Contenedor principal */}
          <div className="container mx-auto px-4 py-3 md:py-9 flex justify-between items-center">
            
            {/* Versión móvil: Logo centrado, iconos sociales a la izquierda, menú a la derecha */}
            <div className="flex w-full items-center justify-between md:hidden">
              {/* Iconos sociales (Izquierda) - versión compacta para móvil */}
              <div className="flex items-center">
                <a href="#" className="text-black mr-3" aria-label="Facebook">
                  <FaFacebook size={16} />
                </a>
                <a href="#" className="text-black mr-3" aria-label="Twitter/X">
                  <FaXTwitter size={16} />
                </a>
              </div>
              
              {/* Logo Centrado para móvil */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.03 }} 
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div 
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
                      style={{ transform: 'scale(2.5)' }}
                    />
                  </div>
                </motion.a>
              </div>
              
              {/* Menú hamburguesa (Derecha) */}
              <div className="flex items-center">
                <button 
                  className="text-black hover:text-gray-500 transition-colors" 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                  aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                  {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
              </div>
            </div>
            
            {/* Versión Desktop: 3 columnas */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="flex space-x-4">
                <a href="#" className="text-black hover:text-gray-500 transition-colors" aria-label="Facebook">
                  <FaFacebook size={18} />
                </a>
                <a href="#" className="text-black hover:text-gray-500 transition-colors" aria-label="Twitter/X">
                  <FaXTwitter size={18} />
                </a>
                <a href="#" className="text-black hover:text-gray-500 transition-colors" aria-label="Instagram">
                  <FaInstagramSquare size={18} />
                </a>
                <a href="#" className="text-black hover:text-gray-500 transition-colors" aria-label="TikTok">
                  <FaTiktok size={18} />
                </a>
              </div>
            </div>

            {/* Logo Centrado (Solo desktop) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.03 }} 
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div 
                  style={{ 
                    width: '400px', height: '90px', padding: '0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    overflow: 'hidden', backgroundColor: 'transparent'
                  }}
                >
                  <img 
                    src={logoImage} 
                    alt="Lazos de Vida" 
                    className="w-full h-full object-contain transition-all duration-300"
                    style={{ transform: 'scale(3.0)' }}
                  />
                </div>
              </motion.a>
            </div>

            {/* Contacto (Solo desktop) */}
            <div className="hidden md:flex items-center space-x-3">
              <a 
                href="#contacto"
                className="text-black hover:text-gray-500 transition-colors" 
                aria-label="Contacto"
                title="Contacto"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Menú desplegable móvil */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                className="md:hidden shadow-lg py-4 absolute top-full right-0 mr-4 z-50 overflow-hidden rounded-lg bg-white"
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="px-6 py-2">
                  <a 
                    href="#contacto"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-medium text-black hover:text-gray-600 flex items-center space-x-2 whitespace-nowrap"
                  >
                    <FaEnvelope size={20}/> <span>Contacto</span>
                  </a>
                </div>
                {/* Añadir otros enlaces del menú móvil aquí */}
                <div className="px-6 py-2 border-t border-gray-100">
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-black hover:text-gray-600">
                      <FaInstagramSquare size={18} />
                    </a>
                    <a href="#" className="text-black hover:text-gray-600">
                      <FaTiktok size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;