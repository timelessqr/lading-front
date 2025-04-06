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
      image: imagenPaso1
    },
    {
      title: "CONFIGURA EL PERFIL",
      description: "Sigue unos simples pasos para crear fácilmente la cuenta y el perfil.",
      image: imagenPaso2
    },
    {
      title: "ACTIVA LA PÁGINA MEMORIAL",
      description: "Personaliza y configura el perfil conmemorativo con fotos, videos y textos.",
      image: imagenPaso3
    }
  ];

  return (
    <section style={{ backgroundColor: 'rgba(75, 95, 68, 0.6)', padding: '64px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '24px' }}>
            Memoriales Digitales en 3 Pasos
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '800px', margin: '0 auto' }}>
            Preserva y comparte recuerdos de forma fácil e intuitiva. Nuestro sistema ha sido diseñado pensando en la simplicidad.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {banners.map((banner, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Imagen limpia con sombra sutil */}
              <motion.div 
                style={{ 
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                  marginBottom: '16px',
                  backgroundColor: 'white',
                  position: 'relative'
                }}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ 
                  width: '100%', 
                  paddingTop: '140%',
                  position: 'relative'
                }}>
                  <img
                    src={banner.image}
                    alt={banner.title}
                    style={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                
                {/* Título como etiqueta superpuesta en la parte inferior */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  padding: '12px 16px',
                  backdropFilter: 'blur(4px)',
                  borderTop: '2px solid #4B5F44'
                }}>
                  <h3 style={{ 
                    fontSize: '16px', 
                    fontWeight: 'bold', 
                    color: '#4B5F44',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    {banner.title}
                  </h3>
                </div>
              </motion.div>
              
              {/* Descripción como texto ligero debajo */}
              <p style={{ 
                color: 'white', 
                fontSize: '14px', 
                textAlign: 'center',
                padding: '0 8px'
              }}>
                {banner.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Botón de llamada a la acción */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <motion.a 
            href="#contacto"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '16px 32px',
              backgroundColor: 'white',
              color: '#4B5F44',
              fontWeight: 'bold',
              borderRadius: '8px',
              fontSize: '18px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 15px 25px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            Comenzar Ahora
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              style={{ marginLeft: '8px' }}
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default TripleBannerSection;