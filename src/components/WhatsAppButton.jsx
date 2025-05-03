// src/components/WhatsAppButton3.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton3 = () => {
  const whatsappUrl = "https://wa.me/5491166023362?text=Hola!%20Quisiera%20consultar%20sobre%20Lazos%20de%20Vida.";

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-white border-2 border-green-500 text-green-500 rounded-full p-3 shadow-md hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-110"
        aria-label="Contactar por WhatsApp"
        title="Contactar por WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default WhatsAppButton3;