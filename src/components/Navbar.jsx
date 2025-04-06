// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Iconos
import { FaFacebook, FaTiktok, FaInstagramSquare, FaUserCircle, FaBars } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Logo Imagen
import logoImage from '../assets/images/logo-lazos-vida.jpeg';

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
  // Fondo blanco translúcido cuando no hay scroll, verde al hacer scroll
  const navStyle = scrolled 
    ? {backgroundColor: '#4B5F44'} 
    : {backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(8px)'};
  
  const navBgClass = scrolled ? 'bg-primary shadow-md' : '';
  const textColorClass = 'text-black';
  const hoverColorClass = scrolled ? 'hover:text-gray-300' : 'hover:text-primary';

  return (
    <div className="fixed w-full z-50">
      {/* Navbar con fondo mejorado */}
      <nav style={navStyle} className={`w-full transition-all duration-300 ${navBgClass}`}>
        {/* Primera fila: Logo y espacio para él */}
        <div className="relative h-14">
          {/* Logo centrado */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 z-10">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.03 }} 
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div 
                style={{ 
                  width: '170px',
                  height: '85px',
                  backgroundColor: '#4B5F44',
                  padding: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={logoImage} 
                  alt="Lazos de Vida" 
                  className="w-full h-full object-cover transition-all duration-300"
                  style={{
                    transform: 'scale(0.7)',
                    objectPosition: 'center'
                  }}
                />
              </div>
            </motion.a>
          </div>
        </div>
        
        {/* Segunda fila: Iconos sociales y de usuario */}
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Iconos de redes sociales (Izquierda) */}
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

            {/* Perfil y menú móvil (Derecha) */}
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
          
          {/* Menú de navegación - Más compacto */}
          <div className="hidden md:flex justify-center mt-2 pb-3">
            <div className="flex space-x-16">
              <a href="#" className={`font-medium text-black ${hoverColorClass} transition-colors`}>Inicio</a>
              <a href="#productos" className={`font-medium text-black ${hoverColorClass} transition-colors`}>Productos</a>
              <a href="#acerca" className={`font-medium text-black ${hoverColorClass} transition-colors`}>Acerca</a>
              <a href="#contacto" className={`font-medium text-black ${hoverColorClass} transition-colors`}>Contacto</a>
            </div>
          </div>
        </div>

        {/* Menú desplegable móvil */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              style={{backgroundColor: '#4B5F44'}}
              className={`md:hidden shadow-lg py-4 absolute top-full left-0 right-0 mx-4 z-50 overflow-hidden rounded-lg`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3 px-4">
                <a href="#" className={`font-medium text-white hover:text-gray-300`}>Inicio</a>
                <a href="#productos" className={`font-medium text-white hover:text-gray-300`}>Productos</a>
                <a href="#acerca" className={`font-medium text-white hover:text-gray-300`}>Acerca</a>
                <a href="#contacto" className={`font-medium text-white hover:text-gray-300`}>Contacto</a>
                <a href="#perfil" className={`font-medium text-white hover:text-gray-300 pt-2 border-t border-white/30 flex items-center space-x-2`}>
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