// components/MobileNav.jsx
const MobileNav = () => {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-up border-t border-gray-200 lg:hidden z-40">
        <div className="container mx-auto">
          <ul className="flex justify-around items-center">
            <li className="py-2">
              <a href="#" className="flex flex-col items-center px-4 py-2 text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-xs mt-1">Inicio</span>
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="flex flex-col items-center px-4 py-2 text-gray-600 hover:text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="text-xs mt-1">Productos</span>
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="flex flex-col items-center px-4 py-2 text-gray-600 hover:text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs mt-1">Cuenta</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default MobileNav;