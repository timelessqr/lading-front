// src/components/Navbar.jsx (Versión Tailwind + React Icons)
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

// Logo Imagen
import logoImage from '../assets/images/logo-lazos-vida.jpeg';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 10); };
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  // Clases dinámicas basadas en scroll
  const navBgClass = scrolled ? 'bg-[#4B5F44] shadow-md' : 'bg-transparent';
  const textColorClass = scrolled ? 'text-white' : 'text-black';
  const hoverColorClass = scrolled ? 'hover:text-gray-300' : 'hover:text-gray-600';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          
          {/* Iconos de redes sociales */}
          <div className="flex items-center space-x-2">
            <a href="#" className={`p-2 rounded-full ${textColorClass} ${hoverColorClass} transition-colors`}>
              <FaFacebook size={20} />
            </a>
            <a href="#" className={`p-2 rounded-full ${textColorClass} ${hoverColorClass} transition-colors`}>
              <FaXTwitter size={20} />
            </a>
            <a href="#" className={`p-2 rounded-full ${textColorClass} ${hoverColorClass} transition-colors`}>
              <FaInstagramSquare size={20} />
            </a>
            <a href="#" className={`p-2 rounded-full ${textColorClass} ${hoverColorClass} transition-colors`}>
              <FaTiktok size={20} />
            </a>
          </div>
          
          {/* Logo y navegación */}
          <div className="flex flex-col items-center">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src={logoImage} alt="Lazos de Vida" className="h-12" />
            </motion.a>
            
            <div className="hidden md:flex items-center space-x-6 mt-2">
              <a href="#" className={`font-medium ${textColorClass} ${hoverColorClass} transition-colors`}>Inicio</a>
              <a href="#" className={`font-medium ${textColorClass} ${hoverColorClass} transition-colors`}>Productos</a>
              <a href="#" className={`font-medium ${textColorClass} ${hoverColorClass} transition-colors`}>Acerca</a>
              <a href="#" className={`font-medium ${textColorClass} ${hoverColorClass} transition-colors`}>Contacto</a>
            </div>
          </div>
          
          {/* Perfil y menú móvil */}
          <div className="flex items-center space-x-4">
            <a href="#" className={`hidden md:block p-2 rounded-full ${textColorClass} ${hoverColorClass} transition-colors`}>
              <FaUserCircle size={24} />
            </a>
            <button 
              className={`md:hidden p-2 rounded-full ${textColorClass} ${hoverColorClass} transition-colors`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
        
        {/* Menú móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg py-4">
            <div className="flex flex-col space-y-3 px-4">
              <a href="#" className="font-medium text-gray-800 hover:text-primary-600">Inicio</a>
              <a href="#" className="font-medium text-gray-800 hover:text-primary-600">Productos</a>
              <a href="#" className="font-medium text-gray-800 hover:text-primary-600">Acerca</a>
              <a href="#" className="font-medium text-gray-800 hover:text-primary-600">Contacto</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;