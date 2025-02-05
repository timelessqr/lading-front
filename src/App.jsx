import { useState } from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica de envío
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-primary">EmpresaXYZ</h1>
            <div className="flex gap-6">
              <a href="#inicio" className="text-gray-600 hover:text-primary transition">Inicio</a>
              <a href="#servicios" className="text-gray-600 hover:text-primary transition">Servicios</a>
              <a href="#contacto" className="text-gray-600 hover:text-primary transition">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Sección Hero */}
      <section id="inicio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Soluciones Digitales Innovadoras
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transformamos tu visión en realidad con tecnología de vanguardia
          </p>
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Desarrollo Web', 'Apps Móviles', 'Marketing Digital'].map((service, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Nombre</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Mensaje</label>
              <textarea
                rows="4"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">EmpresaXYZ</h3>
            <p className="text-gray-400">© 2024 Todos los derechos reservados</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App