// components/BannerSection.jsx 
import bannerImage from '../assets/images/bannersection.jpeg';

const BannerSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Aseguramos que esto sea realmente una grid con 2 columnas en pantallas medianas y grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Columna Imagen */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={bannerImage}
              alt="Imagen descriptiva sobre memoria y códigos QR"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Columna Texto */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary-700">Únete a la revolución de la memoria</h2>
            <p className="text-gray-600 mb-6">
              Nuestros códigos QR, discretamente integrados en lápidas, urnas u otros lugares conmemorativos, te permiten
              acceder a una página web dedicada donde fotos, videos y testimonios se unen para contar la historia de aquellos
              que nos han dejado. Un simple escaneo te ofrece un viaje al pasado, reconectándote con los preciosos recuerdos
              de tus seres queridos.
            </p>
            <a href="#" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
              Descubrir más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;