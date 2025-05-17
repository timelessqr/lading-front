import React, { useState } from 'react';
import Wave from 'react-wavify';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTiktok,
  FaWhatsapp
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logoImage from '../assets/images/derecho.png';
// Eliminada la importación de Iconify

const Footer = () => {
  // Estado para controlar cuál modal está abierto (null si ninguno está abierto)
  const [activeModal, setActiveModal] = useState(null);

  // URL WhatsApp actualizada con el link del cliente
  const whatsappUrl = "https://wa.link/bi4zru";

  // Links de redes sociales
  const socialLinks = {
    facebook: "https://www.facebook.com/share/16D7GtH55G/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/lazosdevidaqr?igsh=YnVuZDZ2NnVmMHd1",
    tiktok: "http://www.tiktok.com/@lazosdevidaqr"
  };

  // CONFIGURACIÓN DEL LOGO: Ajusta estos valores para mover y redimensionar el logo
  const logoSize = {
    mobile: 'h-40', // Tamaño intermedio para mobile
    desktop: 'h-80', // Tamaño original para desktop
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

  // Contenido del modal para cada sección (con correcciones ortográficas)
  const modalContent = {
    quienesSomos: {
      title: "Quiénes Somos",
      content: "Somos una empresa dedicada a la producción y desarrollo de biografías, historias y recuerdos plasmados digitalmente con el escaneo de código QR. Nos dedicamos a construir memorias de seres queridos que no están en presencia física hoy, pero en los corazones de sus familiares y amigos perduran lazos y recuerdos que los unen. Es por eso que, a través de la impresión de una placa QR, los familiares podrán conectar por medio de recuerdos e historias de una forma digital con sus seres queridos fallecidos y mantener viva su historia."
    },
    mision: {
      title: "Misión",
      content: "Brindar la mejor experiencia digital a través del desarrollo de historias, recuerdos y biografías, diseñando un producto de alta calidad, una historia plasmada digitalmente que pueda honrar y dejar un recuerdo imborrable en los corazones de todas las familias que perdieron un ser querido, revivir recuerdos e inspirar a través de historias."
    },
    vision: {
      title: "Visión",
      content: "Llegar a todas las familias de Chile, dejar una huella imborrable en los corazones de las personas con recuerdos que marquen para siempre sus vidas, lograr a través de una placa QR DIGITAL PERSONALIZADA, el desarrollo de historias, sentimientos, expresiones y muestras de cariño de familiares y amigos cercanos."
    },
    valores: {
      title: "Valores",
      content: "Calidad, innovación, compromiso, historia y pasión."
    }
  };

  return (
    <div className="relative"> {/* Etiqueta de apertura principal */}
      {/* Contenido dentro del div principal */}
      <div className="relative overflow-hidden bg-white">
        {/* Olas */}
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

      {/* Bloque logo flotante */}
      <div className="absolute z-10 left-1/2 transform -translate-x-1/2 md:left-8 md:transform-none" style={{ top: '40px', }}>
        <div className="transform hover:scale-110 transition-transform duration-300">
          <img
            src={logoImage}
            alt="Lazos de Vida"
            className={`${logoSize.mobile} md:${logoSize.desktop} object-contain font-lora`}
          />
        </div>
      </div>

      {/* Footer principal */}
      <footer id="contacto" className="relative text-gray-900" style={{ backgroundColor: '#FFFFFF', marginTop: '-2px' }}>

        <style jsx>{`
          .wavy-line {
            animation: wavyAnimation 6s ease-in-out infinite alternate;
          }

          @keyframes wavyAnimation {
            0% {
              d: path("M0,20 Q300,45 600,15 T1200,20 V30 H0 Z");
            }
            33% {
              d: path("M0,0 600,30 T1200,20 V30 H0 Z");
            }
            66% {
              d: path("M0,15 Q300,35 600,5 T1200,15 V30 H0 Z");
            }
            100% {
              d: path("M0,25 Q300,10 600,35 T1200,25 V30 H0 Z");
            }
          }
        `}</style>

        <div className="container mx-auto px-4 py-8 font-lora">
          {/* Versión móvil */}
          <div className="md:hidden">
            {/* Espaciador para el logo */}
            <div className="h-40 mb-4"></div>

            {/* Sección Enlaces Rápidos (acordeón) */}
            <div className="border-b border-gray-200 py-2">
              <button
                onClick={() => toggleSection('descubre')}
                className="flex justify-between items-center w-full py-2 text-left font-semibold"
              >
                <span className="text-lg text-gray-900">Sobre Lazos de Vida</span>
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
                  <li>
                    <a
                      href="#"
                      className="text-gray-800 hover:text-black transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveModal('quienesSomos');
                      }}
                    >
                      Quiénes somos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-800 hover:text-black transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveModal('mision');
                      }}
                    >
                      Misión
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-800 hover:text-black transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveModal('vision');
                      }}
                    >
                      Visión
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-800 hover:text-black transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveModal('valores');
                      }}
                    >
                      Valores
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* Sección Legal (acordeón) */}
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

            {/* Sección Contacto (acordeón) */}
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 0 00-2-2H5a2 0 00-2 2v10a2 0 002 2z" />
                    </svg>
                    {/* Correo electrónico con enlace mailto */}
                    <a href="mailto:info@lazosdevida.com" className="text-gray-800 hover:text-blue-600 transition-colors">
                      info@lazosdevida.com
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Sección Newsletter (acordeón) */}
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
                      className="w-full bg-blue text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm"
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
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors transform hover:scale-110 duration-200"
                >
                  <FaFacebookSquare size={24} />
                </a>
                {/* Eliminado FaXTwitter ya que no está importado */}
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-pink-600 transition-colors transform hover:scale-110 duration-200"
                >
                  <FaInstagramSquare size={24} />
                </a>
                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors transform hover:scale-110 duration-200"
                >
                  <FaTiktok size={24} />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-600 transition-colors transform hover:scale-110 duration-200"
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Versión de escritorio */}
          <div className="hidden md:grid md:grid-cols-4 md:gap-8">
            {/* Espaciador invisible que ocupa el espacio del logo */}
            <div className="md:col-span-1">
              <div className="invisible h-48"></div>
            </div>

            {/* Enlaces rápidos */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Sobre Lazos de Vida</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-black transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveModal('quienesSomos');
                    }}
                  >
                    Quiénes somos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-black transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveModal('mision');
                    }}
                  >
                    Misión
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-black transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveModal('vision');
                    }}
                  >
                    Visión
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-black transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveModal('valores');
                    }}
                  >
                    Valores
                  </a>
                </li>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 0 00-2-2H5a2 0 00-2 2v10a2 0 002 2z" />
                  </svg>
                   {/* Correo electrónico con enlace mailto */}
                  <a href="mailto:info@lazosdevida.com" className="text-gray-800 hover:text-blue-600 transition-colors">
                    info@lazosdevida.com
                  </a>
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
                  className="w-full bg-blue text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm"
                >
                  Suscribirse
                </button>
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-900">Síguenos</h3>
              {/* Redes sociales (escritorio) */}
              <div className="flex space-x-4">
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors transform hover:scale-110 duration-200"
                >
                  <FaFacebookSquare size={20} />
                </a>
                 {/* Eliminado FaXTwitter ya que no está importado */}
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-pink-600 transition-colors transform hover:scale-110 duration-200"
                >
                  <FaInstagramSquare size={20} />
                </a>
                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors transform hover:scale-110 duration-200"
                >
                  <FaTiktok size={20} />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-600 transition-colors transform hover:scale-110 duration-200"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Métodos de pago (centrados) y copyright */}
          <div className="mt-6 md:mt-8 border-t border-gray-300 pt-4 md:pt-6">
            {/* Métodos de pago centrados usando imágenes */}
            <div className="flex justify-center mb-4">
              {/* Ajustado el espacio entre logos (space-x-2 en lugar de space-x-3/5) y tamaño de contenedores/imágenes */}
              <div className="flex space-x-2 md:space-x-3">
                {/* Contenedores para imágenes con hover, padding y centrado */}
                <div className="hover:scale-110 hover:shadow-md transition-all duration-300 rounded bg-white p-0.5 flex items-center justify-center" style={{ width: '55px', height: '40px' }}>
                   <img
                      src="https://pub-aa35b927bb064c1e8c7e97ebdbbec0c1.r2.dev/apple-pay-payment-mark-seeklogo.png" // URL de Apple Pay
                      alt="Apple Pay"
                      className="object-contain"
                      style={{ width: 'auto', height: '35px' }} // Aumentado tamaño de la imagen
                   />
                </div>
                 <div className="hover:scale-110 hover:shadow-md transition-all duration-300 rounded bg-white p-0.5 flex items-center justify-center" style={{ width: '55px', height: '40px' }}>
                   <img
                      src="https://pub-aa35b927bb064c1e8c7e97ebdbbec0c1.r2.dev/visa-seeklogo.png" // URL de Visa
                      alt="Visa"
                      className="object-contain"
                      style={{ width: 'auto', height: '35px' }} // Aumentado tamaño de la imagen
                   />
                </div>
                <div className="hover:scale-110 hover:shadow-md transition-all duration-300 rounded bg-white p-0.5 flex items-center justify-center" style={{ width: '55px', height: '40px' }}>
                   <img
                      src="https://pub-aa35b927bb064c1e8c7e97ebdbbec0c1.r2.dev/mastercard-modern-design-.svg" // URL de Mastercard
                      alt="Mastercard"
                      className="object-contain"
                      style={{ width: 'auto', height: '35px' }} // Aumentado tamaño de la imagen
                   />
                </div>
                 <div className="hover:scale-110 hover:shadow-md transition-all duration-300 rounded bg-white p-0.5 flex items-center justify-center" style={{ width: '55px', height: '40px' }}>
                   <img
                      src="https://pub-aa35b927bb064c1e8c7e97ebdbbec0c1.r2.dev/paypal-3.svg" // URL de PayPal
                      alt="PayPal"
                      className="object-contain"
                      style={{ width: 'auto', height: '35px' }} // Aumentado tamaño de la imagen
                   />
                </div>
                {/* American Express - Usando imagen */}
                <div className="hover:scale-110 hover:shadow-md transition-all duration-300 rounded bg-white p-0.5 flex items-center justify-center" style={{ width: '55px', height: '40px' }}> {/* Mismo tamaño de contenedor para consistencia */}
                   <img
                      src="https://pub-aa35b927bb064c1e8c7e97ebdbbec0c1.r2.dev/american-express-seeklogo.png" // URL de American Express
                      alt="American Express"
                      className="object-contain"
                      style={{ width: 'auto', height: '35px' }} // Mismo tamaño de imagen para consistencia
                   />
                </div>
                {/* Mercado Pago - Usando imagen */}
                <div className="hover:scale-110 hover:shadow-md transition-all duration-300 rounded bg-white p-0.5 flex items-center justify-center" style={{ width: '55px', height: '40px' }}> {/* Mismo tamaño de contenedor para consistencia */}
                   <img
                      src="https://pub-aa35b927bb064c1e8c7e97ebdbbec0c1.r2.dev/mercado-pago-seeklogo.png" // URL de Mercado Pago
                      alt="Mercado Pago"
                      className="object-contain"
                      style={{ width: 'auto', height: '35px' }} // Mismo tamaño de imagen para consistencia
                   />
                </div>
              </div>
            </div>

            {/* Copyright - Centrado en móvil, justificado en escritorio */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
              <p className="text-xs md:text-sm text-gray-800 mb-2 md:mb-0 text-center md:text-left">
                &copy; {new Date().getFullYear()} Lazos de Vida. Todos los derechos reservados.
              </p>
              <div className="flex space-x-4">
                <span className="text-xs text-gray-500 italic cursor-not-allowed">Política de Privacidad (En desarrollo)</span>
                <span className="text-xs text-gray-500 italic cursor-not-allowed">Términos y Condiciones (En desarrollo)</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Modal dinámico para mostrar el contenido seleccionado */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 font-lora">{modalContent[activeModal].title}</h2>
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 font-lora">
                  {modalContent[activeModal].content}
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="bg-blue text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors font-lora"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;