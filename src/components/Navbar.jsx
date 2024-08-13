import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import logo from "../assets/Acher_logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="antialiased bg-gray-400">
      <header className=" top-0 left-0 right-0 z-50 lg:px-16 px-6 bg-white flex justify-between items-center lg:py-0 py-2 border-2 shadow-md">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo Acher"
              className="w-36 h-auto m-4" // Ajusta el tamaño para responsividad
            />
          </Link>
        </div>

        {/* Botón de menú para dispositivos móviles */}
        <button
          className="lg:hidden block focus:outline-none pr-6"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>menu</title>
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>

        {/* Menú de navegación */}
        <nav
          className={`lg:flex lg:items-center lg:w-auto w-full ${
            menuOpen ? "block" : "hidden"
          } transition-all duration-300 ease-in-out lg:relative absolute top-full left-0 bg-white lg:bg-transparent`}
        >
          <ul className="flex flex-col lg:flex-row items-start lg:items-center justify-between text-base text-gray-700 pt-4 lg:pt-0 gap-2 lg:gap-0">
            {[
              {
                label: "Especialidades Médicas",
                to: "/especialidadesMedicas",
              },
              { label: "Representaciones", to: "/representaciones" },
              { label: "Institucional", to: "/Institucional" },
            ].map(({ label, to }, index) => (
              <li
                key={index}
                className="p-2 lg:p-4 block border-b-2 border-transparent hover:border-indigo-400 font-lato xl:text-xl lg:text-md md:text-lg transition duration-300"
              >
                <Link
                  to={to}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="p-2 lg:p-4 block border-b-2 border-transparent hover:border-indigo-400 font-lato xl:text-xl lg:text-md md:text-lg transition duration-300">
              <Link
                to="#"
                className="flex items-center"
                onClick={closeMenu}
              >
                <FaPhone className="mr-2" />
                (+54 11) 4921-0173
              </Link>
            </li>
            <li className="p-2 lg:p-4 block border-b-2 border-transparent hover:border-indigo-400 font-lato xl:text-xl lg:text-md md:text-lg transition duration-300">
              <Link
                to="https://wa.me/5491131879486"
                className="flex items-center"
                onClick={closeMenu}
              >
                <ImWhatsapp className="mr-2 text-green-500" />
                Ventas
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;