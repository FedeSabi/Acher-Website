{/*}
import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import logo from "../assets/Acher_logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="antialiased bg-gray-400">
      <header className="fixed top-0 left-0 right-0 z-50 lg:px-16 px-6 bg-white flex  justify-around items-center lg:py-0 py-2 border-2 shadow-md">
        <div className="flex-auto flex items-center">
          <a href="/">
            <img
              src={logo}
              alt="Logo Acher"
              className="w-[146px]  h-[82px] m-4"
            />
          </a>
        </div>

        <label
          htmlFor="menu-toggle"
          className="pointer-cursor lg:hidden block"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>*/}
        {/* Utiliza `defaultChecked` en lugar de `checked` si el estado no necesita ser mutable */}{/*
        <input
          className="hidden"
          type="checkbox"
          id="menu-toggle"
          defaultChecked={menuOpen}
        />

        <div
          className={`lg:flex lg:items-center lg:w-auto w-full ${
            menuOpen ? "block" : "hidden"
          }`}
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0 gap-2">
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:text-xl text-lg"
                  href="/especialidadesMedicas"
                >
                  Especialidades Médicas
                </a>
              </li>
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:text-xl text-lg"
                  href="/representaciones"
                >
                  Representaciones
                </a>
              </li>
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:text-xl text-md"
                  href="/Institucional"
                >
                  Institucional
                </a>
              </li>
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2 lg:text-xl text-lg"
                  href="/novedades"
                >
                  Novedades
                </a>
              </li>
              <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2 lg:text-xl text-lg">
                <a href="#" className="flex items-center">
                  <FaPhone className="mr-2" />
                  (+54 11) 4921-0173
                </a>
              </li>
              <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2 lg:text-xl text-lg">
                <a
                  href=" https://wa.me/5491131879486"
                  className="flex items-center"
                >
                  <ImWhatsapp className="mr-2 text-green-500" />
                  Ventas
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
*/}
import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import logo from "../assets/Acher_logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="antialiased bg-gray-400">
      <header className="fixed top-0 left-0 right-0 z-50 lg:px-16 px-6 bg-white flex justify-between items-center lg:py-0 py-2 border-2 shadow-md">
        <div className="flex items-center">
          <a href="/">
            <img
              src={logo}
              alt="Logo Acher"
              className="w-36 h-auto m-4" // Ajusta el tamaño para responsividad
            />
          </a>
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
                href: "/especialidadesMedicas",
              },
              { label: "Representaciones", href: "/representaciones" },
              { label: "Institucional", href: "/Institucional" },
            ].map(({ label, href }, index) => (
              <li
                key={index}
                className="p-2 lg:p-4 block border-b-2 border-transparent hover:border-indigo-400 lg:text-xl text-lg transition duration-300"
              >
                <a href={href}>{label}</a>
              </li>
            ))}
            <li className="p-2 lg:p-4 block border-b-2 border-transparent hover:border-indigo-400 lg:text-xl text-lg transition duration-300">
              <a href="#" className="flex items-center">
                <FaPhone className="mr-2" />
                (+54 11) 4921-0173
              </a>
            </li>
            <li className="p-2 lg:p-4 block border-b-2 border-transparent hover:border-indigo-400 lg:text-xl text-lg transition duration-300">
              <a
                href="https://wa.me/5491131879486"
                className="flex items-center"
              >
                <ImWhatsapp className="mr-2 text-green-500" />
                Ventas
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
