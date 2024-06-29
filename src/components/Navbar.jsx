import  { useState } from 'react';
import { FaPhone } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import logo  from "../assets/Acher_logo.png" 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="antialiased bg-gray-400">
      <header className="fixed top-0 left-0 right-0 z-50 lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 border-2 shadow-md">
        <div className="flex-auto flex justify-between items-center">
          <a href="#">
          <img src={logo} alt='Logo Acher' className='w-[121.25px] h-[62.06px] m-4'/>  
          </a>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block" onClick={toggleMenu}>
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
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" checked={menuOpen} />

        <div className={`lg:flex lg:items-center lg:w-auto w-full ${menuOpen ? 'block' : 'hidden'}`} id="menu">
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0 gap-2">
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-2xl"
                  href="#"
                >
                  Especialidades Médicas
                </a>
              </li>
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-2xl"
                  href="#"
                >
                  Representaciones
                </a>
              </li>
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-2xl"
                  href="#"
                >
                  Institucional
                </a>
              </li>
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2 text-2xl"
                  href="#"
                >
                  Novedades
                </a>
              </li>
              <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2 text-xl">
                <a
                  href="#" className='flex items-center'
                ><FaPhone className='mr-2'/> 
                (+54 11) 4921-0173
                  
                </a>
              </li>
              <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2 text-2xl">
                <a href=" https://wa.me/5491131879486" className='flex items-center'
                ><ImWhatsapp className='mr-2 text-green-500'/> 
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

