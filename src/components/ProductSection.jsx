// components/ProductSection.jsx
import qr1 from '../assets/images/qr1.jpg';
import qr2 from '../assets/images/qr2.jpg';
import qr3 from '../assets/images/qr3.jpg';
import logoBlanco from '../assets/images/negro.jpeg'; 

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Placa QR Conmemorativa",
      subtitle: "Acero Inoxidable Esencial",
      description: "Honra y recuerda a tus seres queridos de una manera única y perdurable con nuestra Placa QR Conmemorativa. Fabricada en acero inoxidable de alta calidad con un moderno acabado cepillado, esta placa es la puerta de entrada a un espacio digital lleno de recuerdos, historias y homenajes.",
      image: qr1
    },
    {
      id: 2,
      name: "Placa QR Conmemorativa",
      subtitle: "Bronce Clásico",
      description: "Evoca la elegancia y la solemnidad de los homenajes tradicionales con nuestra Placa QR Conmemorativa en acabado Bronce Clásico. Diseñada para quienes aprecian la calidez y el carácter de los materiales nobles, esta placa añade un toque de distinción atemporal.",
      image: qr2
    },
    {
      id: 3,
      name: "Placa QR Conmemorativa",
      subtitle: "Cristal Acrílico Moderno",
      description: "Presenta tus recuerdos más queridos con una claridad y elegancia incomparables. Nuestra Placa QR Conmemorativa está meticulosamente elaborada en acrílico transparente de alta calidad, ofreciendo un diseño moderno y minimalista que captura la luz y la esencia del homenaje.",
      image: qr3
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-700 mb-4">Nuestros Productos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Códigos QR conmemorativos de alta calidad disponibles en diferentes materiales y estilos para honrar la memoria de tus seres queridos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
              <div className="h-64 overflow-hidden relative group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20" 
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={logoBlanco} 
                    alt="Logo Lazos de Vida" 
                    style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'contain' }}
                  />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-primary-700 text-center">{product.name}</h3>
                <h4 className="text-lg font-medium mb-3 text-primary-500 text-center">{product.subtitle}</h4>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;