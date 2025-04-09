import React, { useEffect, useRef } from 'react';

const FeatureSection = () => {
  // Ref para la animación de entrada
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const featureElements = document.querySelectorAll('.feature-card');
    featureElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      featureElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const features = [
    {
      icon: "heart",
      title: "Acceso inmediato a recuerdos digitales",
      description: "Accede instantáneamente y de forma duradera a los recuerdos digitales de tus seres queridos."
    },
    {
      icon: "edit",
      title: "Personalización de homenajes",
      description: "Crea un homenaje personalizado único, reflejando fielmente la personalidad y pasiones de tus seres queridos."
    },
    {
      icon: "tablet",
      title: "Uso fácil e innovador",
      description: "Nuestros códigos QR están diseñados para un uso sencillo por todos, permitiendo acceso inmediato a través de cualquier teléfono inteligente."
    },
    {
      icon: "clock",
      title: "Conservación a largo plazo",
      description: "Garantiza la perdurabilidad de los recuerdos con nuestros códigos QR durables, sin costos recurrentes."
    }
  ];

  // Enhanced icon component with background and animations
  const Icon = ({ name }) => {
    switch (name) {
      case 'heart':
        return (
          <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        );
      case 'edit':
        return (
          <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
        );
      case 'tablet':
        return (
          <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        );
      case 'clock':
        return (
          <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Nuestras Características</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubre por qué nuestros códigos QR conmemorativos son la elección perfecta para honrar la memoria de tus seres queridos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card bg-white p-8 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 opacity-0 border-t-2 border-blue-100 hover:border-blue-300"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex justify-center mb-6">
                <Icon name={feature.icon} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-600 text-center">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: rgba(43, 77, 140, 0.1); /* Azul blue-600 con opacidad */
          transition: all 0.3s ease;
        }
        
        .feature-card:hover .icon-container {
          transform: scale(1.1);
          background-color: rgba(43, 77, 140, 0.2); /* Azul blue-600 con opacidad */
          box-shadow: 0 0 20px rgba(43, 77, 140, 0.3); /* Azul blue-600 con opacidad */
        }
        
        .icon {
          width: 32px;
          height: 32px;
          color: #2B4D8C; /* Azul blue-600 */
          transition: all 0.3s ease;
        }
        
        .feature-card:hover .icon {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default FeatureSection;