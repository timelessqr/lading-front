// src/hooks/useScrollEffect.js
import { useState, useEffect } from 'react';

/**
 * Hook personalizado para manejar efectos de scroll
 * @param {number} threshold - Número de píxeles para activar el efecto (por defecto 50)
 * @return {Object} estado del scroll y posición
 */
const useScrollEffect = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setScrolled(currentScrollY > threshold);
    };
    
    // Añadir listener con throttling para mejor rendimiento
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Ejecutar una vez para establecer el estado inicial
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [threshold]);
  
  return { scrolled, scrollY };
};

export default useScrollEffect;