// components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-primary-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center text-center mb-8">
            <img src="/logo-white-placeholder.png" alt="Logo" className="h-12 mb-4" />
            <p className="max-w-md">Ciudad, País</p>
            <p>Email: info@tuempresa.com</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Mi cuenta</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary-300">Iniciar sesión</a></li>
                <li><a href="#" className="hover:text-primary-300">Crear cuenta</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Secciones</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary-300">Personas</a></li>
                <li><a href="#" className="hover:text-primary-300">Monumentos históricos</a></li>
                <li><a href="#" className="hover:text-primary-300">Mascotas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Políticas</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary-300">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-primary-300">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-primary-300">Garantías</a></li>
                <li><a href="#" className="hover:text-primary-300">Envíos</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © 2025 Tu Empresa | Todos los derechos reservados
            </div>
            <div>
              <img src="/payment-methods-placeholder.png" alt="Métodos de pago" className="h-8" />
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;