import React from 'react';
import Wave from 'react-wavify';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logoImage from '../assets/images/logo-lazos-vida.jpeg';

const Footer = () => {
  return (
    <div className="relative">
      {/* Contenedor con posición relativa para todo el footer */}
      <div className="relative overflow-hidden">
        {/* Primera capa de ola - más baja y compacta */}
        <div className="relative h-16">
          <Wave 
            fill="rgba(75, 95, 68, 0.6)" 
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
            fill="rgba(75, 95, 68, 0.8)"
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
            fill="#4B5F44"
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
              fill="#8A9A83"
              className="wavy-line"
            />
          </svg>
        </div>
      </div>
      
      {/* Footer sin espacios ni márgenes con respecto a las olas */}
      <footer className="relative text-white" style={{ backgroundColor: '#8A9A83', marginTop: '-2px' }}>
        
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
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center text-center mb-3">
            <div className="bg-white rounded-full p-2 mb-2 w-20 h-20 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <img src={logoImage} alt="Lazos de Vida" className="h-full object-contain" />
            </div>
            <p className="max-w-md text-xs">Preservando memorias digitales para el corazón</p>
            <p className="mt-1 text-xs">Email: info@lazosdevida.com</p>

            {/* Redes sociales */}
            <div className="flex space-x-3 mt-1">
              <a href="#" className="text-white hover:text-primary-100 transition-colors transform hover:scale-110 duration-200">
                <FaFacebook size={16} />
              </a>
              <a href="#" className="text-white hover:text-primary-100 transition-colors transform hover:scale-110 duration-200">
                <FaXTwitter size={16} />
              </a>
              <a href="#" className="text-white hover:text-primary-100 transition-colors transform hover:scale-110 duration-200">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="text-white hover:text-primary-100 transition-colors transform hover:scale-110 duration-200">
                <FaTiktok size={16} />
              </a>
              <a href="#" className="text-white hover:text-primary-100 transition-colors transform hover:scale-110 duration-200">
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3 text-xs">
            <div>
              <h4 className="text-sm font-bold mb-1">Descubre más</h4>
              <ul className="space-y-0.5">
                <li><a href="#" className="hover:text-primary-100 transition-colors">Códigos QR</a></li>
                <li><a href="#" className="hover:text-primary-100 transition-colors">Cómo funciona</a></li>
                <li><a href="#" className="hover:text-primary-100 transition-colors">Quiénes somos</a></li>
                <li><a href="#" className="hover:text-primary-100 transition-colors">Preguntas frecuentes</a></li>
                <li><a href="#" className="hover:text-primary-100 transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-primary-100 transition-colors">Conviértete en socio</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-1">Legal</h4>
              <ul className="space-y-0.5">
                <li><a href="#" className="hover:text-primary-100 transition-colors">Envíos</a></li>
                <li><a href="#" className="hover:text-primary-100 transition-colors">Devoluciones y reembolsos</a></li>
                <li><a href="#" className="hover:text-primary-100 transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-primary-100 transition-colors">Términos del servicio</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-1">¡Suscríbete a la Newsletter!</h4>
              <p className="mb-1">Sé el primero en conocer los nuevos productos y ofertas exclusivas.</p>
              <div className="space-y-1">
                <input
                  type="email"
                  placeholder="Dirección de email"
                  className="w-full px-3 py-1 rounded bg-white/10 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-1 focus:ring-white text-xs"
                />
                <button
                  className="w-full bg-white font-bold py-1 px-3 rounded hover:bg-gray-200 transition-colors text-xs"
                  style={{ color: '#4B5F44' }}
                >
                  Suscribirse
                </button>
              </div>
            </div>
          </div>

          {/* Métodos de pago y copyright */}
          <div className="border-t border-white/30 pt-2 flex flex-col md:flex-row justify-between items-center text-xs">
            <div className="mb-1 md:mb-0 text-[10px]">
              © 2025, Lazos de Vida - Todos los derechos reservados.
            </div>
            <div className="flex space-x-1">
              {/* Métodos de pago con animación hover */}
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/americanexpress.svg" alt="American Express" className="h-4 w-6 bg-white p-0.5 rounded hover:opacity-80 transition-opacity" />
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/applepay.svg" alt="Apple Pay" className="h-4 w-6 bg-white p-0.5 rounded hover:opacity-80 transition-opacity" />
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visa.svg" alt="Visa" className="h-4 w-6 bg-white p-0.5 rounded hover:opacity-80 transition-opacity" />
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mastercard.svg" alt="Mastercard" className="h-4 w-6 bg-white p-0.5 rounded hover:opacity-80 transition-opacity" />
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/paypal.svg" alt="PayPal" className="h-4 w-6 bg-white p-0.5 rounded hover:opacity-80 transition-opacity" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;