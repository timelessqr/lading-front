// components/FeatureSection.jsx
const FeatureSection = () => {
    const features = [
      {
        icon: "heart",
        title: "Acceso inmediato a recuerdos digitales",
        description: "Accede instantáneamente y de forma duradera a los recuerdos digitales de tus seres queridos."
      },
      {
        icon: "edit",
        title: "Personalización de homenajes",
        description: "Crea un homenaje personalizado único, reflejando fielmente la personalidad y pasiones de tus seres queridos."
      },
      {
        icon: "tablet",
        title: "Uso fácil e innovador",
        description: "Nuestros códigos QR están diseñados para un uso sencillo por todos, permitiendo acceso inmediato a través de cualquier teléfono inteligente."
      },
      {
        icon: "clock",
        title: "Conservación a largo plazo",
        description: "Garantiza la perdurabilidad de los recuerdos con nuestros códigos QR durables, sin costos recurrentes."
      }
    ];
  
    // Simple icon component
    const Icon = ({ name }) => {
      switch (name) {
        case 'heart':
          return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          );
        case 'edit':
          return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          );
        case 'tablet':
          return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          );
        case 'clock':
          return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          );
        default:
          return null;
      }
    };
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-700 mb-4">Nuestras Características</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre por qué nuestros códigos QR conmemorativos son la elección perfecta para honrar la memoria de tus seres queridos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <Icon name={feature.icon} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary-700">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeatureSection;