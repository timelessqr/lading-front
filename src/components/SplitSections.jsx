// src/components/SplitSections.jsx
import React from 'react';

// Componente interno para cada sección
const SplitSection = ({ 
  imageLeft = false, 
  media, 
  title, 
  description, 
  ctaButton = null,
  backgroundColor = 'bg-white',
  titleColor = 'text-blue-600'
}) => {
  return (
    <section className={`w-full py-12 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${imageLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          
          {/* Contenido de texto - centrado en todas las resoluciones */}
          <div className="w-full md:w-3/5 lg:w-2/3 text-center">
            <h2 className={`text-3xl font-bold mb-6 uppercase ${titleColor}`}>{title}</h2>
            <div className="mb-6 text-gray-700">{description}</div>
            {ctaButton && ctaButton}
          </div>
          
          {/* Contenido multimedia (imagen o video) más pequeño */}
          <div className="w-full md:w-2/5 lg:w-1/3">
            {media}
          </div>
          
        </div>
      </div>
    </section>
  );
};

// Componente principal que incluye ambas secciones
const SplitSections = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Sección 1: QR en memoria (imagen a la derecha) */}
      <SplitSection 
        imageLeft={false}
        backgroundColor="bg-transparent"
        titleColor="text-blue-600"
        media={
          <div className="flex justify-center">
            <div className="rounded-lg shadow-xl overflow-hidden w-64 h-64 aspect-square transform transition-transform duration-300 hover:scale-105">
              <img 
                src="/src/assets/images/qr1.jpg" 
                alt="Código QR memorial" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        }
        title="¡UN CÓDIGO QR EN MEMORIA DE TU SER QUERIDO!"
        description={
          <div>
            <p className="mb-4">Imagina la posibilidad de mantener vivos los recuerdos de quienes amas a través de imágenes y videos que hablan de ellos...</p>
            <p className="font-semibold">Hoy todo esto es posible con Lazos de Vida ♡</p>
          </div>
        }
      />

      {/* Sección 2: Fácil de usar (video a la izquierda) */}
      <SplitSection 
        imageLeft={true}
        backgroundColor="bg-blue-50/50"
        titleColor="text-blue-600"
        media={
          <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-xl w-64 h-48 aspect-video transform transition-transform duration-300 hover:scale-105">
              {/* Puedes reemplazar esto con tu video real */}
              <video className="w-full h-full object-cover" controls poster="/src/assets/images/qr2.jpg">
                <source src="/path/to/your/video.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
          </div>
        }
        title="FÁCIL DE USAR, DIFÍCIL DE OLVIDAR"
        description={
          <div>
            <p className="mb-4">Cada visita al cementerio se convertirá en un <strong>momento de conexión</strong> y reflexión, una forma de sentirse más cerca, aunque sea solo virtualmente.</p>
            <p className="mb-4">En el perfil dedicado, siempre accesible, puedes insertar una <strong>biografía y dedicatorias</strong>, además de cargar <strong>fotos y videos</strong> ilimitados 🕊️</p>
          </div>
        }
      />

      {/* Beneficios - 3 íconos */}
      <div className="py-10 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Privacidad */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-1 text-blue-600">Seguridad</h3>
              <p className="text-gray-600 text-sm">Tu información siempre protegida con los más altos estándares.</p>
            </div>
            
            {/* Envío */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-1 text-blue-600">Envío Gratuito</h3>
              <p className="text-gray-600 text-sm">Recibe tu código QR sin costo adicional en cualquier parte del país.</p>
            </div>
            
            {/* Asistencia */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-1 text-blue-600">Asesoría</h3>
              <p className="text-gray-600 text-sm">Atención personalizada durante todo el proceso.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitSections;