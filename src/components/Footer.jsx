import React from 'react';
import Wave from 'react-wavify';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logoImage from '../assets/images/derecho.png';

const Footer = () => {
  // CONFIGURACIÓN DEL LOGO: Ajusta estos valores para mover y redimensionar el logo
  // ==================================================================================
  // Posición: Valores más pequeños = más arriba/izquierda, Valores más grandes = más abajo/derecha
  const logoPosition = {
    top: '60px',  // Ajusta para mover hacia arriba (valores más pequeños) o abajo (valores más grandes)
    left: '30px',  // Ajusta para mover hacia la izquierda (valores más pequeños) o derecha (valores más grandes)
  };
  
  // Tamaño: Valores más pequeños = logo más pequeño, Valores más grandes = logo más grande
  const logoSize = {
    mobile: 'h-64',   // Tamaño en móviles (h-32, h-40, h-48, h-56, h-64, h-72, h-80, h-96)
    desktop: 'h-80',  // Tamaño en desktop (h-40, h-48, h-56, h-64, h-72, h-80, h-96, h-112)
  };
  // ==================================================================================

  return (
    <div className="relative">
      {/* Contenedor con posición relativa para todo el footer */}
      <div className="relative overflow-hidden">
        {/* Primera capa de ola - más baja y compacta */}
        <div className="relative h-16">
          <Wave 
            fill="rgba(183, 198, 231, 0.6)" /* #B3C6E7 con transparencia */
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
        
        {/* Segunda capa de ola - en medio */}
        <div className="absolute top-6 left-0 right-0 h-16">
          <Wave 
            fill="rgba(183, 198, 231, 0.8)" /* #B3C6E7 con más opacidad */
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
        
        {/* Tercera capa de ola - la más baja */}
        <div className="absolute top-12 left-0 right-0 h-16">
          <Wave 
            fill="#B3C6E7" /* Azul medio sólido */
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
        
        {/* Línea ondulada usando SVG con animación más pronunciada */}
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
      
      {/* Bloque logo flotante - Posición ajustable con las variables de arriba */}
      <div className="absolute z-10" style={{ top: logoPosition.top, left: logoPosition.left }}>
        <div className="transform hover:scale-110 transition-transform duration-300">
          <img src={logoImage} alt="Lazos de Vida" className={`${logoSize.mobile} md:${logoSize.desktop} object-contain`} />
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Espaciador invisible que ocupa el espacio del logo */}
            <div className="md:col-span-1">
              {/* Espacio invisible para mantener el grid alineado */}
              <div className="invisible h-36 md:h-48"></div>
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
          
          {/* Métodos de pago (centrados) y copyright */}
          <div className="mt-8 border-t border-gray-300 pt-6">
            {/* Métodos de pago centrados */}
            <div className="flex justify-center mb-4">
              <div className="flex space-x-4">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/americanexpress.svg" alt="American Express" className="h-8 w-10 bg-white p-1 rounded hover:scale-110 hover:shadow-md transition-all duration-300" />
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/applepay.svg" alt="Apple Pay" className="h-8 w-10 bg-white p-1 rounded hover:scale-110 hover:shadow-md transition-all duration-300" />
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visa.svg" alt="Visa" className="h-8 w-10 bg-white p-1 rounded hover:scale-110 hover:shadow-md transition-all duration-300" />
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mastercard.svg" alt="Mastercard" className="h-8 w-10 bg-white p-1 rounded hover:scale-110 hover:shadow-md transition-all duration-300" />
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/paypal.svg" alt="PayPal" className="h-8 w-10 bg-white p-1 rounded hover:scale-110 hover:shadow-md transition-all duration-300" />
              </div>
            </div>
            
            {/* Copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-800 mb-2 md:mb-0">
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