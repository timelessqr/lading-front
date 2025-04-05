// components/TripleBannerSection.jsx
const TripleBannerSection = () => {
    const banners = [
      {
        title: "Socios: Juntos para celebrar la memoria",
        description: "Nos enorgullece anunciar que nuestros códigos QR conmemorativos están ahora disponibles en varios distribuidores autorizados.",
        image: "/banner-1-placeholder.jpg"
      },
      {
        title: "¿Cómo funciona?",
        description: "Nuestros códigos QR, discretamente integrados en lápidas, urnas u otros lugares de memoria, te permiten acceder a una página web dedicada.",
        image: "/banner-2-placeholder.jpg"
      },
      {
        title: "Celebrar la vida a través de la tecnología",
        description: "Entendemos la importancia de recordar a quienes han marcado nuestras vidas. Hemos reinventado la forma de conmemorar.",
        image: "/banner-3-placeholder.jpg"
      }
    ];
  
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {banners.map((banner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={banner.image} 
                    alt={banner.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary-700">{banner.title}</h3>
                  <p className="text-gray-600">{banner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TripleBannerSection;