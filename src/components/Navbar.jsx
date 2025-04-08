// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Iconos
import { FaFacebook, FaTiktok, FaInstagramSquare, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Logo Imagen
import logoImage from '../assets/images/derecho.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determina si se ha hecho scroll más de 10px para cambiar el estilo
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Estilo inicial con translucidez
  const baseStyle = {
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  };

  return (
    <div className="fixed w-full z-50">
      {/* El div exterior controla el fondo blanco cuando hay scroll */}
      <div className={scrolled ? "bg-white w-full shadow-md" : ""}>
        {/* Navbar con fondo blur cuando no hay scroll */}
        <nav 
          style={scrolled ? { backdropFilter: 'blur(8px)' } : baseStyle} 
          className="w-full transition-all duration-300"
        >
          {/* Contenedor principal dividido en 3 partes */}
          <div className="container mx-auto px-4 py-9 flex justify-between items-center">
            {/* 1. Iconos sociales (Izquierda) */}
            <div className="flex items-center space-x-3">
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

            {/* 2. Logo Centrado */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.03 }} 
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div 
                  style={{ 
                    width: '400px',
                    height: '90px',
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
                    style={{
                      transform: 'scale(3.0)',
                    }}
                  />
                </div>
              </motion.a>
            </div>

            {/* 3. Perfil y menú móvil (Derecha) */}
            <div className="flex items-center">
              <a href="#" className="hidden md:block text-black hover:text-gray-500 transition-colors" aria-label="Perfil">
                <FaUserCircle size={20} />
              </a>
              <button 
                className="md:hidden text-black hover:text-gray-500 transition-colors ml-2" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>

          {/* Menú desplegable móvil - Mejorado con mejor animación */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                className="md:hidden shadow-lg py-4 absolute top-full right-0 mr-4 z-50 overflow-hidden rounded-lg bg-white"
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: 20 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 25 
                }}
              >
                {/* Solo la opción de Perfil */}
                <div className="px-6 py-2">
                  <a href="#perfil" className="font-medium text-black hover:text-gray-600 flex items-center space-x-2 whitespace-nowrap">
                    <FaUserCircle size={20}/> <span>Mi Perfil</span>
                  </a>
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