import React, { useState } from 'react';
import Wave from 'react-wavify';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logoImage from '../assets/images/derecho.png';

const Footer = () => {
  // CONFIGURACIÓN DEL LOGO: Ajusta estos valores para mover y redimensionar el logo
  const logoSize = {
    mobile: 'h-40',   // Tamaño intermedio para mobile
    desktop: 'h-80',  // Tamaño original para desktop
  };

  // Estado para manejar el desplegable de secciones en móvil
  const [openSection, setOpenSection] = useState(null);

  // Función para manejar los desplegables en versión móvil
  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className="relative">
      {/* Contenedor con posición relativa para todo el footer */}
      <div className="relative overflow-hidden bg-white">
        {/* Altura reducida en móviles para las olas */}
        <div className="relative h-12 md:h-16">
          <Wave 
            fill="rgba(183, 198, 231, 0.6)"
            paused={false}
            options={{
              height: 20,
              amplitude: 18,
              speed: 0.17,
              points: 5
            }}
            className="absolute w-full h-full"
          />
        </div>
        
        {/* Segunda capa de ola - reducida en móvil */}
        <div className="absolute top-4 md:top-6 left-0 right-0 h-12 md:h-16">
          <Wave 
            fill="rgba(183, 198, 231, 0.8)"
            paused={false}
            options={{
              height: 19,
              amplitude: 20,
              speed: 0.23,
              points: 4
            }}
            className="absolute w-full h-full"
          />
        </div>
        
        {/* Tercera capa de ola - reducida en móvil */}
        <div className="absolute top-8 md:top-12 left-0 right-0 h-12 md:h-16">
          <Wave 
            fill="#B3C6E7"
            paused={false}
            options={{
              height: 20,
              amplitude: 17,
              speed: 0.30,
              points: 6
            }}
            className="absolute w-full h-full"
          />
        </div>
        
        {/* Línea ondulada SVG */}
        <div className="absolute bottom-0 left-0 right-0 h-5 overflow-hidden">
          <svg 
            viewBox="0 0 1200 30" 
            className="absolute w-full h-full" 
            preserveAspectRatio="none"
            style={{ bottom: -5 }}
          >
            <path 
              d="M0,20 Q300,40 600,20 T1200,20 V30 H0 Z" 
              fill="#FFFFFF"
              className="wavy-line"
            />
          </svg>
        </div>
      </div>
      
      {/* Bloque logo flotante - con posicionamiento responsivo */}
      <div className="absolute z-10 left-1/2 transform -translate-x-1/2 md:left-8 md:transform-none" style={{ top: '40px', }}>
        <div className="transform hover:scale-110 transition-transform duration-300">
          <img 
            src={logoImage} 
            alt="Lazos de Vida" 
            className={`${logoSize.mobile} md:${logoSize.desktop} object-contain`}
          />
        </div>
      </div>
      
      {/* Footer sin espacios ni márgenes con respecto a las olas */}
      <footer className="relative text-gray-900" style={{ backgroundColor: '#FFFFFF', marginTop: '-2px' }}>
        
        <style jsx>{`
          .wavy-line {
            animation: wavyAnimation 6s ease-in-out infinite alternate;
          }
          
          @keyframes wavyAnimation {
            0% {
              d: path("M0,20 Q300,45 600,15 T1200,20 V30 H0 Z");
            }
            33% {
              d: path("M0,20 Q300,0 600,30 T1200,20 V30 H0 Z");
            }
            66% {
              d: path("M0,15 Q300,35 600,5 T1200,15 V30 H0 Z");
            }
            100% {
              d: path("M0,25 Q300,10 600,35 T1200,25 V30 H0 Z");
            }
          }
        `}</style>

        <div className="container mx-auto px-4 py-8">
          {/* Versión móvil: Formato acordeón para las secciones */}
          <div className="md:hidden">
            {/* Espaciador para el logo centrado - aumentado para el logo más grande */}
            <div className="h-40 mb-4"></div>
            
            {/* Sección Enlaces Rápidos (acordeón en móvil) */}
            <div className="border-b border-gray-200 py-2">
              <button 
                onClick={() => toggleSection('descubre')}
                className="flex justify-between items-center w-full py-2 text-left font-semibold"
              >
                <span className="text-lg text-gray-900">Descubre más</span>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSection === 'descubre' ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'descubre' && (
                <ul className="space-y-2 py-2 pl-2">
                  <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Códigos QR</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Cómo funciona</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Quiénes somos</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Preguntas frecuentes</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Contacto</a></li>
                </ul>
              )}
            </div>
            
            {/* Sección Legal (acordeón en móvil) */}
            <div className="border-b border-gray-200 py-2">
              <button 
                onClick={() => toggleSection('legal')}
                className="flex justify-between items-center w-full py-2 text-left font-semibold"
              >
                <span className="text-lg text-gray-900">Legal</span>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSection === 'legal' ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'legal' && (
                <ul className="space-y-2 py-2 pl-2">
                  <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Envíos</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Devoluciones y reembolsos</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Privacidad</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Términos del servicio</a></li>
                </ul>
              )}
            </div>
            
            {/* Sección Contacto (acordeón en móvil) */}
            <div className="border-b border-gray-200 py-2">
              <button 
                onClick={() => toggleSection('contacto')}
                className="flex justify-between items-center w-full py-2 text-left font-semibold"
              >
                <span className="text-lg text-gray-900">Contacto</span>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSection === 'contacto' ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'contacto' && (
                <div className="space-y-2 py-2 pl-2">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-800">info@lazosdevida.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-800">+54 123 456 7890</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sección Newsletter (acordeón en móvil) */}
            <div className="border-b border-gray-200 py-2">
              <button 
                onClick={() => toggleSection('newsletter')}
                className="flex justify-between items-center w-full py-2 text-left font-semibold"
              >
                <span className="text-lg text-gray-900">Newsletter</span>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSection === 'newsletter' ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'newsletter' && (
                <div className="space-y-2 py-2 pl-2">
                  <p className="mb-3 text-gray-800">Sé el primero en conocer los nuevos productos y ofertas exclusivas.</p>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Dirección de email"
                      className="w-full px-3 py-2 rounded bg-white/90 border border-gray-400 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
                    />
                    <button
                      className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm"
                    >
                      Suscribirse
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Redes sociales (siempre visible en móvil) */}
            <div className="py-4 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Síguenos</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-black transition-colors transform hover:scale-110 duration-200">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-gray-700 hover:text-black transition-colors transform hover:scale-110 duration-200">
                  <FaXTwitter size={24} />
                </a>
                <a href="#" className="text-gray-700 hover:text-black transition-colors transform hover:scale-110 duration-200">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-700 hover:text-black transition-colors transform hover:scale-110 duration-200">
                  <FaTiktok size={24} />
                </a>
                <a href="#" className="text-gray-700 hover:text-black transition-colors transform hover:scale-110 duration-200">
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Versión de escritorio: grid normal */}
          <div className="hidden md:grid md:grid-cols-4 md:gap-8">
            {/* Espaciador invisible que ocupa el espacio del logo */}
            <div className="md:col-span-1">
              <div className="invisible h-48"></div>
            </div>
            
            {/* Enlaces rápidos */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Descubre más</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Códigos QR</a></li>
                <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Cómo funciona</a></li>
                <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Quiénes somos</a></li>
                <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Preguntas frecuentes</a></li>
                <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            {/* Legal y contacto */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Envíos</a></li>
                <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Devoluciones y reembolsos</a></li>
                <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Privacidad</a></li>
                <li><a href="#" className="text-gray-800 hover:text-black transition-colors">Términos del servicio</a></li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-900">Contacto</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-800">info@lazosdevida.com</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-800">+54 123 456 7890</span>
                </div>
              </div>
            </div>
            
            {/* Newsletter y redes sociales */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">¡Suscríbete a la Newsletter!</h3>
              <p className="mb-3 text-gray-800">Sé el primero en conocer los nuevos productos y ofertas exclusivas.</p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Dirección de email"
                  className="w-full px-3 py-2 rounded bg-white/90 border border-gray-400 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
                />
                <button
                  className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm"
                >
                  Suscribirse
                </button>
              </div>
              
              <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-900">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-black transition-colors transform hover:scale-110 duration-200">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-700 hover:text-black transition-colors transform hover:scale-110 duration-200">
                  <FaXTwitter size={20} />
                </a>
                <a href="#" className="text-gray-700 hover:text-black transition-colors transform hover:scale-110 duration-200">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-700 hover:text-black transition-colors transform hover:scale-110 duration-200">
                  <FaTiktok size={20} />
                </a>
                <a href="#" className="text-gray-700 hover:text-black transition-colors transform hover:scale-110 duration-200">
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Métodos de pago (centrados) y copyright - versión responsive */}
          <div className="mt-6 md:mt-8 border-t border-gray-300 pt-4 md:pt-6">
            {/* Métodos de pago centrados y con tamaño ligeramente reducido en móvil */}
            <div className="flex justify-center mb-4">
              <div className="flex space-x-2 md:space-x-4">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/americanexpress.svg" alt="American Express" className="h-6 w-8 md:h-8 md:w-10 bg-white p-1 rounded hover:scale-110 hover:shadow-md transition-all duration-300" />
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/applepay.svg" alt="Apple Pay" className="h-6 w-8 md:h-8 md:w-10 bg-white p-1 rounded hover:scale-110 hover:shadow-md transition-all duration-300" />
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visa.svg" alt="Visa" className="h-6 w-8 md:h-8 md:w-10 bg-white p-1 rounded hover:scale-110 hover:shadow-md transition-all duration-300" />
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mastercard.svg" alt="Mastercard" className="h-6 w-8 md:h-8 md:w-10 bg-white p-1 rounded hover:scale-110 hover:shadow-md transition-all duration-300" />
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/paypal.svg" alt="PayPal" className="h-6 w-8 md:h-8 md:w-10 bg-white p-1 rounded hover:scale-110 hover:shadow-md transition-all duration-300" />
              </div>
            </div>
            
            {/* Copyright - Centrado en móvil, justificado en escritorio */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
              <p className="text-xs md:text-sm text-gray-800 mb-2 md:mb-0 text-center md:text-left">
                &copy; {new Date().getFullYear()} Lazos de Vida. Todos los derechos reservados.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-xs text-gray-800 hover:text-black">Política de Privacidad</a>
                <a href="#" className="text-xs text-gray-800 hover:text-black">Términos y Condiciones</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;