// src/App.jsx
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import FeatureSection from './components/FeatureSection';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import './index.css'; // Importamos CSS directamente

// Definimos un componente de estilo global para asegurar que los colores se apliquen correctamente
const GlobalStyles = () => {
  return (
    <style jsx="true">{`
      :root {
        --color-primary: #4B5F44;
      }
      
      /* Clase de utilidad para usar directamente en componentes */
      .bg-primary-custom {
        background-color: #4B5F44 !important; /* El !important asegura que no sea sobrescrito */
      }
      
      .text-primary-custom {
        color: #4B5F44 !important;
      }
      
      /* Esta regla ayuda con la transición de scroll */
      .navbar-scrolled {
        background-color: #4B5F44 !important;
      }
    `}</style>
  );
};

function App() {
  return (
    <div className="min-h-screen font-rubik bg-gray-50">
      {/* Incluimos los estilos globales */}
      <GlobalStyles />
      
      {/* Componentes principales */}
      <Navbar />
      <Hero />
      <FeatureSection />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;