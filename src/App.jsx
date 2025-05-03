// src/App.jsx
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SplitSections from './components/SplitSections';
import FeatureSection from './components/FeatureSection'; 
import Footer from './components/Footer';
import './index.css';
import WhatsAppButton from './components/WhatsAppButton'; // <-- 1. IMPORTA el nuevo componente
import React from 'react';

function App() {
  return (
    <div className="min-h-screen font-rubik bg-gray-50"> {/* O el fragmento <>...</> si lo usas */}
      <Navbar />
      <Hero />
      <SplitSections />
      <FeatureSection />
      <Footer />

      {/* 2. RENDERIZA el botón flotante aquí, usualmente al final */}
      <WhatsAppButton />
    </div>
  );
}

export default App;