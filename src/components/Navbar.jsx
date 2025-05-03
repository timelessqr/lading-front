// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaFacebook,
  FaTiktok,
  FaInstagramSquare,
  FaWhatsapp, // Icono WhatsApp
  FaBars,
  FaTimes
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import logoImage from '../assets/images/derecho.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // URL WhatsApp con mensaje predefinido
  const whatsappUrl = "https://wa.me/5491166023362?text=Hola!%20Quisiera%20consultar%20sobre%20Lazos%20de%20Vida.";

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
                className="text-black hover:text-gray-500 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>

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

              {/* WhatsApp a la DERECHA (Reemplazando los iconos sociales) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 transition-colors"
                aria-label="Contactar por WhatsApp"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>

            {/* Versión Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="flex space-x-4">
                <a href="#" className="text-black hover:text-gray-500 transition-colors" aria-label="Facebook"><FaFacebook size={18} /></a>
                <a href="#" className="text-black hover:text-gray-500 transition-colors" aria-label="Twitter/X"><FaXTwitter size={18} /></a>
                <a href="#" className="text-black hover:text-gray-500 transition-colors" aria-label="Instagram"><FaInstagramSquare size={18} /></a>
                <a href="#" className="text-black hover:text-gray-500 transition-colors" aria-label="TikTok"><FaTiktok size={18} /></a>
              </div>
            </div>

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

            <div className="hidden md:flex items-center space-x-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 transition-colors"
                aria-label="Contactar por WhatsApp"
              >
                <FaWhatsapp size={22} />
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
                  <div className="grid grid-cols-2 gap-4">
                    <a href="#" className="flex items-center space-x-2 text-gray-800 hover:text-black">
                      <FaFacebook size={18} /> <span>Facebook</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-gray-800 hover:text-black">
                      <FaXTwitter size={18} /> <span>Twitter</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-gray-800 hover:text-black">
                      <FaInstagramSquare size={18} /> <span>Instagram</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-gray-800 hover:text-black">
                      <FaTiktok size={18} /> <span>TikTok</span>
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