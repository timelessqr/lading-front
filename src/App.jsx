// src/App.jsx
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SplitSections from './components/SplitSections';
import FeatureSection from './components/FeatureSection'; // Correcto, comentado si no se usa
//import ProductSection from './components/ProductSection'; // Correcto, comentado si no se usa
import Footer from './components/Footer';
//import TripleBannerSection from './components/TripleBannerSection'; // Correcto, comentado si no se usa
import './index.css';

function App() {
  return (
    <div className="min-h-screen font-rubik bg-gray-50">
      <Navbar />
      <Hero />
      <SplitSections />
      {/* Ahora sí están comentados y no se renderizarán: */}
      {/* <TripleBannerSection /> */}
      <FeatureSection /> 
      {/* <ProductSection /> */}
      <Footer />
    </div>
  );
}

export default App;