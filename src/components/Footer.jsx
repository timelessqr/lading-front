import React from 'react';
import Wave from 'react-wavify';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logoImage from '../assets/images/logo-lazos-vida.jpeg';

const Footer = () => {
  const primaryColor = '#4B5F44';
  
  return (
    <div className="relative">
      {/* Primera capa de ola - la más alta */}
      <div style={{ position: 'relative', height: '60px', marginBottom: '-50px', zIndex: 1 }}>
        <Wave 
          fill={`${primaryColor}99`} // Con transparencia
          paused={false}
          options={{
            height: 20,
            amplitude: 15,
            speed: 0.15,
            points: 3
          }}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
      </div>
      
      {/* Segunda capa de ola - en medio */}
      <div style={{ position: 'relative', height: '60px', marginBottom: '-48px', zIndex: 2 }}>
        <Wave 
          fill={`${primaryColor}CC`} // Con más opacidad
          paused={false}
          options={{
            height: 25,
            amplitude: 18,
            speed: 0.25,
            points: 4
          }}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
      </div>
      
      {/* Tercera capa de ola - la más baja, directamente encima del footer */}
      <div style={{ position: 'relative', height: '50px', marginBottom: '-2px', zIndex: 3 }}>
        <Wave 
          fill={primaryColor} // Color sólido
          paused={false}
          options={{
            height: 10,
            amplitude: 12,
            speed: 0.2,
            points: 5
          }}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
      </div>
      
      <footer className="relative text-white" style={{ backgroundColor: primaryColor, marginTop: "0", position: "relative", zIndex: "4" }}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center text-center mb-4">
            <div className="bg-white rounded-full p-2 mb-3 w-16 h-16 flex items-center justify-center">
              <img src={logoImage} alt="Lazos de Vida" className="h-full object-contain" />
            </div>
            <p className="max-w-md text-sm">Preservando memorias digitales para el corazón</p>
            <p className="mt-1 text-sm">Email: info@lazosdevida.com</p>

            {/* Redes sociales */}
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaTiktok size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
            <div>
              <h4 className="text-base font-bold mb-2">Descubre más</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-gray-300 transition-colors">Códigos QR</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Cómo funciona</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Quiénes somos</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Preguntas frecuentes</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Conviértete en socio</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-bold mb-2">Legal</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-gray-300 transition-colors">Envíos</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Devoluciones y reembolsos</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Términos del servicio</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-bold mb-2">¡Suscríbete a la Newsletter!</h4>
              <p className="mb-2">Sé el primero en conocer los nuevos productos y ofertas exclusivas.</p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Dirección de email"
                  className="w-full px-3 py-1 rounded bg-opacity-20 bg-white/10 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-1 focus:ring-white text-sm"
                />
                <button
                  className="w-full bg-white font-bold py-1 px-3 rounded hover:bg-gray-200 transition-colors text-sm"
                  style={{ color: primaryColor }}
                >
                  Suscribirse
                </button>
              </div>
            </div>
          </div>

          {/* Métodos de pago y copyright */}
          <div className="border-t border-white/30 pt-3 flex flex-col md:flex-row justify-between items-center text-xs">
            <div className="mb-2 md:mb-0">
              © 2025, Lazos de Vida - Todos los derechos reservados.
            </div>
            <div className="flex space-x-1">
              {/* Métodos de pago */}
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/americanexpress.svg" alt="American Express" className="h-5 w-8 bg-white p-1 rounded" />
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/applepay.svg" alt="Apple Pay" className="h-5 w-8 bg-white p-1 rounded" />
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visa.svg" alt="Visa" className="h-5 w-8 bg-white p-1 rounded" />
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mastercard.svg" alt="Mastercard" className="h-5 w-8 bg-white p-1 rounded" />
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/paypal.svg" alt="PayPal" className="h-5 w-8 bg-white p-1 rounded" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;