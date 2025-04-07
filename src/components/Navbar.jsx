// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Iconos
import { FaFacebook, FaTiktok, FaInstagramSquare, FaUserCircle, FaBars } from "react-icons/fa";
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

  // --- Clases dinámicas para los estilos ---
  // Fondo blanco translúcido siempre, pero más opaco cuando hay scroll
  const navStyle = scrolled 
    ? {backgroundColor: 'rgba(255,255,255,255)', backdropFilter: 'blur(8px)'} 
    : {backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(8px)'};
  
  const navBgClass = scrolled ? 'shadow-md' : '';
  const textColorClass = 'text-black';
  const hoverColorClass = 'hover:text-gray-500';

  return (
    <div className="fixed w-full z-50">
      {/* Navbar con fondo mejorado */}
      <nav style={navStyle} className={`w-full transition-all duration-300 ${navBgClass}`}>
        {/* Contenedor principal dividido en 3 partes - AUMENTADO EL PADDING VERTICAL */}
        <div className="container mx-auto px-4 py-9 flex justify-between items-center">
          {/* 1. Iconos sociales (Izquierda) */}
          <div className="flex items-center space-x-3">
            <div className="flex space-x-4">
              <a href="#" className={`${textColorClass} ${hoverColorClass} transition-colors`} aria-label="Facebook">
                <FaFacebook size={18} />
              </a>
              <a href="#" className={`${textColorClass} ${hoverColorClass} transition-colors`} aria-label="Twitter/X">
                <FaXTwitter size={18} />
              </a>
              <a href="#" className={`${textColorClass} ${hoverColorClass} transition-colors`} aria-label="Instagram">
                <FaInstagramSquare size={18} />
              </a>
              <a href="#" className={`${textColorClass} ${hoverColorClass} transition-colors`} aria-label="TikTok">
                <FaTiktok size={18} />
              </a>
            </div>
          </div>

          {/* 2. Logo Centrado - AUMENTADO EL TAMAÑO */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.03 }} 
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div 
                style={{ 
                  width: '400px',
                  height: '90px',  // Aumentado de 80px a 90px
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
            <a href="#" className={`hidden md:block ${textColorClass} ${hoverColorClass} transition-colors`} aria-label="Perfil">
              <FaUserCircle size={20} />
            </a>
            <button 
              className={`md:hidden ${textColorClass} ${hoverColorClass} transition-colors ml-2`} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              aria-label="Abrir menú"
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>

        {/* Menú desplegable móvil */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              style={{backgroundColor: 'rgba(255, 255, 255, 0.95)'}}
              className={`md:hidden shadow-lg py-4 absolute top-full left-0 right-0 mx-4 z-50 overflow-hidden rounded-lg`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3 px-4">
                <a href="#" className={`font-medium text-black hover:text-gray-600`}>Inicio</a>
                <a href="#productos" className={`font-medium text-black hover:text-gray-600`}>Productos</a>
                <a href="#acerca" className={`font-medium text-black hover:text-gray-600`}>Acerca</a>
                <a href="#contacto" className={`font-medium text-black hover:text-gray-600`}>Contacto</a>
                <a href="#perfil" className={`font-medium text-black hover:text-gray-600 pt-2 border-t border-gray-300 flex items-center space-x-2`}>
                    <FaUserCircle size={20}/> <span>Perfil</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;