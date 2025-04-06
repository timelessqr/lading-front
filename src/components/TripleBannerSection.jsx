// components/TripleBannerSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Importa las imágenes
import imagenPaso1 from '../assets/images/qr.jpg';
import imagenPaso2 from '../assets/images/registro.jpg';
import imagenPaso3 from '../assets/images/perfil1.jpg';

const TripleBannerSection = () => {
  // Datos para los banners
  const banners = [
    {
      title: "ESCANEA EL CÓDIGO",
      description: "Usa la cámara de tu móvil para escanear el código QR conmemorativo.",
      image: imagenPaso1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      )
    },
    {
      title: "CONFIGURA EL PERFIL",
      description: "Sigue unos simples pasos para crear fácilmente la cuenta y el perfil.",
      image: imagenPaso2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "ACTIVA LA PÁGINA MEMORIAL",
      description: "Personaliza y configura el perfil conmemorativo con fotos, videos y textos.",
      image: imagenPaso3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: 'rgba(75, 95, 68, 0.6)' }}>
      <div className="container mx-auto px-4">
        {/* Encabezado de la sección mejorado */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Memoriales Digitales en 3 Pasos</h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">Preserva y comparte recuerdos de forma fácil e intuitiva. Nuestro sistema ha sido diseñado pensando en la simplicidad.</p>
        </div>

        {/* Contenedor de las tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {banners.map((banner, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Número del paso */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-20 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-md">
                  {index + 1}
                </div>
                
                {/* Marco de iPhone con imagen */}
                <div className="pt-10 pb-6 px-6 bg-gray-50 flex justify-center">
                  <div className="relative" style={{ width: "180px" }}>
                    {/* Marco exterior del teléfono */}
                    <div className="relative border-8 border-primary rounded-[36px] shadow-lg" style={{ paddingBottom: "200%" }}>
                      {/* Notch del iPhone */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-primary rounded-b-xl z-10"></div>
                      
                      {/* Contenedor de la imagen */}
                      <div className="absolute inset-0 bg-white overflow-hidden rounded-[28px]">
                        <img
                          src={banner.image}
                          alt={banner.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ paddingTop: "16px" }} /* Espacio para el notch */
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contenido de texto */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4" style={{ backgroundColor: 'rgba(75, 95, 68, 0.9)' }}>
                      {banner.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{banner.title}</h3>
                  </div>
                  <p className="text-gray-600">{banner.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Botón de llamada a la acción */}
        <div className="mt-12 text-center">
          <motion.a 
            href="#contacto"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-800 hover:bg-gray-100 font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-2 text-lg"
            style={{ borderColor: '#4B5F44' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comenzar Ahora
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default TripleBannerSection;