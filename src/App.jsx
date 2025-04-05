import Hero from './components/Hero';
import Navbar from './components/Navbar';
import FeatureSection from './components/FeatureSection';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-rubik bg-gray-50">
      <Navbar />
      <Hero />
      <FeatureSection />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;