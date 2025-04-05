// components/ProductSection.jsx
const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Código QR 1x1",
      description: "Compacto y discreto para pequeñas sepulturas o monumentos.",
      price: "$124.99",
      image: "/product-placeholder-1.jpg",
      colors: ["silver", "black", "gold"]
    },
    {
      id: 2,
      name: "Código QR 2x2",
      description: "Formato equilibrado para sepulturas y monumentos de tamaño medio.",
      price: "$149.99",
      image: "/product-placeholder-2.jpg",
      colors: ["silver", "black", "gold"]
    },
    {
      id: 3,
      name: "Código QR 3x3",
      description: "Ideal para los monumentos más grandes.",
      price: "$174.99",
      image: "/product-placeholder-3.jpg",
      colors: ["silver", "black", "gold"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-700 mb-4">Nuestros Productos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Códigos QR conmemorativos de alta calidad disponibles en diferentes tamaños y colores para adaptarse a cualquier monumento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
              <div className="h-64 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary-700">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-primary-700">{product.price}</span>
                  
                  <div className="flex space-x-2">
                    {product.colors.map(color => (
                      <span 
                        key={color} 
                        className="w-6 h-6 rounded-full border border-gray-300 shadow-sm" 
                        style={{ 
                          backgroundColor: 
                            color === 'silver' ? '#C0C0C0' : 
                            color === 'gold' ? '#B78C51' : 
                            '#000000'
                        }}
                      ></span>
                    ))}
                  </div>
                </div>
                
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
