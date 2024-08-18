import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import logo from "../assets/ACHER_logo_navbar_146x82.png"

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-10 mx-auto md:flex md:justify-evenly md:items-center">
        <div className="flex items-center justify-evenly">
          <Link to="/">
            <img
              className=""
              src={logo}
              alt="Logo Archer"
            />
          </Link>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 mt-2 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
          }`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-lato xl:text-xl lg:text-md md:text-lg"
              to="/especialidadesMedicas"
              onClick={handleLinkClick}
            >
              Especialidades Médicas
            </Link>
            <Link
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-lato xl:text-xl lg:text-md md:text-lg"
              to="/representaciones"
              onClick={handleLinkClick}
            >
              Representaciones
            </Link>
            <Link
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-lato xl:text-xl lg:text-md md:text-lg"
              to="/Institucional"
              onClick={handleLinkClick}
            >
              Institucional
            </Link>
            <Link
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-lato xl:text-xl lg:text-md md:text-lg"
              to="#"
              onClick={handleLinkClick}
            >
              <div className='flex items-center'>
                <FaPhone className="mr-2" />
                (+54 11) 4921-0173
              </div>
            </Link>
            
          </div>
            <Link
              className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
              to="https://wa.me/5491131879486"
            >
            <div className='flex  font-lato xl:text-xl lg:text-md md:text-lg'>
              <ImWhatsapp className="mr-2 mt-1 xl:mt-0 xl:text-3xl lg:text-md md:text-lg text-green-500" />
              Ventas
            </div>
            </Link>
          </div>
        </div>
    </nav>
  );
};

export default Navbar2;