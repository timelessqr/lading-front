import React, { useState } from 'react';

const QRMemorialLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('Mensaje enviado. Nos pondremos en contacto pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const testimonials = [
    {
      id: 1,
      name: "María González",
      text: "Gracias a este servicio, puedo compartir los mejores recuerdos de mi padre con toda la familia. El código QR es discreto y elegante.",
      role: "Cliente"
    },
    {
      id: 2,
      name: "Juan Martínez",
      text: "Una forma hermosa de mantener viva la memoria de mi esposa. Ahora todos pueden conocer su historia y ver sus fotos favoritas.",
      role: "Cliente"
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      text: "El proceso fue muy sencillo y el resultado quedó perfecto. Un homenaje digital que complementa perfectamente la lápida tradicional.",
      role: "Cliente"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-gray-900">QR<span className="text-red-900" style={{ color: '#671010' }}>Memorial</span></span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#inicio" className="px-3 py-2 text-gray-700 hover:text-red-900 hover:text-opacity-75" style={{ hoverColor: '#671010' }}>Inicio</a>
              <a href="#servicios" className="px-3 py-2 text-gray-700 hover:text-red-900 hover:text-opacity-75" style={{ hoverColor: '#671010' }}>Servicios</a>
              <a href="#como-funciona" className="px-3 py-2 text-gray-700 hover:text-red-900 hover:text-opacity-75" style={{ hoverColor: '#671010' }}>Cómo Funciona</a>
              <a href="#testimonios" className="px-3 py-2 text-gray-700 hover:text-red-900 hover:text-opacity-75" style={{ hoverColor: '#671010' }}>Testimonios</a>
              <a href="#contacto" className="ml-4 px-4 py-2 rounded-md text-white bg-red-900 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900" style={{ backgroundColor: '#671010' }}>Contacto</a>
            </div>
            <div className="flex md:hidden items-center">
              <button 
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-red-900"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-red-900 hover:bg-gray-50 rounded-md">Inicio</a>
              <a href="#servicios" className="block px-3 py-2 text-gray-700 hover:text-red-900 hover:bg-gray-50 rounded-md">Servicios</a>
              <a href="#como-funciona" className="block px-3 py-2 text-gray-700 hover:text-red-900 hover:bg-gray-50 rounded-md">Cómo Funciona</a>
              <a href="#testimonios" className="block px-3 py-2 text-gray-700 hover:text-red-900 hover:bg-gray-50 rounded-md">Testimonios</a>
              <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-red-900 hover:bg-gray-50 rounded-md">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Honra la memoria de tus</span>{' '}
                  <span className="block text-red-900 xl:inline" style={{ color: '#671010' }}>seres queridos</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Códigos QR personalizados para lápidas que mantienen vivos los recuerdos y permiten compartir historias, fotografías y mensajes especiales.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#contacto" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-900 hover:bg-red-800 md:py-4 md:text-lg md:px-10" style={{ backgroundColor: '#671010' }}>
                      Solicitar información
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#como-funciona" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-900 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10" style={{ color: '#671010' }}>
                      Cómo funciona
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/api/placeholder/800/600" alt="QR en lápida" />
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-red-900 font-semibold tracking-wide uppercase" style={{ color: '#671010' }}>Nuestros Servicios</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Un recuerdo eterno en la era digital
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Ofrecemos diferentes opciones para honrar la memoria de tus seres queridos.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-900 text-white" style={{ backgroundColor: '#671010' }}>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Código QR Básico
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Un código QR duradero que enlaza a una página memorial con información básica, fotos y mensajes.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-900 text-white" style={{ backgroundColor: '#671010' }}>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Código QR Premium
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Incluye todos los beneficios del plan básico más vídeos, cronología de vida, libro de visitas digital y más espacio de almacenamiento.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-900 text-white" style={{ backgroundColor: '#671010' }}>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Código QR Familiar
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Ideal para panteones familiares, con acceso para múltiples administradores y secciones personalizadas para cada miembro de la familia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-red-900 font-semibold tracking-wide uppercase" style={{ color: '#671010' }}>Cómo Funciona</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Simple, respetuoso y duradero
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              En solo cuatro pasos puedes crear un memorial digital eterno.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-900 text-white mx-auto" style={{ backgroundColor: '#671010' }}>
                  <span className="text-lg font-bold">1</span>
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                  Contacta con nosotros
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Llena el formulario o llámanos para discutir tus necesidades específicas.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-900 text-white mx-auto" style={{ backgroundColor: '#671010' }}>
                  <span className="text-lg font-bold">2</span>
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                  Crea el memorial
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Sube fotos, vídeos, textos y personaliza la página de recuerdo a tu gusto.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-900 text-white mx-auto" style={{ backgroundColor: '#671010' }}>
                  <span className="text-lg font-bold">3</span>
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                  Recibe tu código QR
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Te enviamos el código QR en el material de tu elección, listo para instalar.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-900 text-white mx-auto" style={{ backgroundColor: '#671010' }}>
                  <span className="text-lg font-bold">4</span>
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                  Comparte el recuerdo
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Cualquier persona con un smartphone podrá escanear el código y visitar el memorial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-red-900 font-semibold tracking-wide uppercase" style={{ color: '#671010' }}>Testimonios</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Lo que dicen nuestros clientes
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
              <div className="h-48 overflow-hidden">
                <p className="text-gray-600 text-lg italic mb-4">"{testimonials[activeTestimonial].text}"</p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-red-900 flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#671010' }}>
                      {testimonials[activeTestimonial].name.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonials[activeTestimonial].name}</p>
                    <p className="text-sm text-gray-500">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-between">
              <button 
                onClick={prevTestimonial}
                className="bg-white rounded-full shadow p-2 -ml-3 focus:outline-none"
              >
                <svg className="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-white rounded-full shadow p-2 -mr-3 focus:outline-none"
              >
                <svg className="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-3 w-3 mx-1 rounded-full ${activeTestimonial === index ? 'bg-red-900' : 'bg-gray-300'}`}
                style={{ backgroundColor: activeTestimonial === index ? '#671010' : '' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-red-900 font-semibold tracking-wide uppercase" style={{ color: '#671010' }}>Contacto</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hablemos sobre tu proyecto
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Estamos aquí para ayudarte a crear un recuerdo eterno.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nombre completo
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-red-900 focus:border-red-900 border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-red-900 focus:border-red-900 border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-red-900 focus:border-red-900 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-red-900 focus:border-red-900 border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-900 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900"
                    style={{ backgroundColor: '#671010' }}
                  >
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900">Información de contacto</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+34 123 456 789</p>
                    <p className="mt-1">Lunes a Viernes 9:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>info@qrmemorial.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>Calle Principal 123</p>
                    <p className="mt-1">28001 Madrid, España</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Síguenos</h3>
                <div className="mt-4 flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center">
                <span className="text-2xl font-bold">QR<span className="text-red-500">Memorial</span></span>
              </div>
              <p className="mt-4 text-gray-300">
                Ofrecemos una forma única y moderna de mantener vivos los recuerdos de tus seres queridos, combinando la tradición con la tecnología.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-300 hover:text-white">Inicio</a></li>
                <li><a href="#servicios" className="text-gray-300 hover:text-white">Servicios</a></li>
                <li><a href="#como-funciona" className="text-gray-300 hover:text-white">Cómo funciona</a></li>
                <li><a href="#testimonios" className="text-gray-300 hover:text-white">Testimonios</a></li>
                <li><a href="#contacto" className="text-gray-300 hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Política de privacidad</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Términos y condiciones</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-300 text-center">
              © {new Date().getFullYear()} QRMemorial. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QRMemorialLanding;