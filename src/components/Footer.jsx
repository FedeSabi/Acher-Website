//import { SiMaplibre } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 h-[380px] dark:bg-gray-800 mt-20 pt-4 pb-8 xl:pt-8">
      <div className="max-w-screen-lg px-4 mx-auto text-gray-200 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-300 gap-6">
        <div className="flex flex-col justify-between items-center bg-gray-200">
          <button className="sm:w-[442px] w-[324px] h-[120px] -mt-24  mb-6 bg-gray-200 lg:text-5xl text-2xl rounded-2xl text-gray-600">
            Contacto
          </button>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center">
              <FaMapMarkerAlt className="text-white text-4xl" />
            </div>
            <a href="#" className="lg:text-lg text-sm text-gray-600 mb-6">
              VER MAPA
            </a>
          </div>

          <div>
            <h2 className="lg:text-3xl text-lg text-center text-gray-600">
              Acher Argentina - Doblas 1510 - CABA
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 sm:h-[120px] h-[520px] flex sm:flex-row flex-col items-center justify-around w-full border-t-4 border-t-white mt-10 font-semibold text-gray-600">
        <div>
          <a href="#" className="flex items-center gap-4">
            <FaPhone className="mr-2 text-blue-500 sm:text-5xl text-3xl" />
            <p className="text-xl">(+54 11) 4921-0173</p>
          </a>
        </div>
        <div>
          <a href="#" className="flex items-center gap-4">
            <IoMail className="mr-2 text-blue-500 sm:text-5xl text-3xl" />
            <p className="text-xl">info@b-archer.com.ar</p>
          </a>
        </div>
        <div>
          <a href="#" className="flex items-center gap-4">
            <FaInstagram className="mr-2 text-blue-500 sm:text-5xl text-3xl" />
            <p className="text-xl">acherargentina</p>
          </a>
        </div>
        <div>
          <a href="#" className="flex items-center gap-4">
            <FaFacebookSquare className="mr-2 text-blue-500 sm:text-5xl text-3xl" />
            <p className="text-xl">acherargentina</p>
          </a>
        </div>
      </div>
      <div className="text-center text-lg text-gray-600 mt-4">
        <p>acher.com.ar todos los derechos reservados</p>
      </div>
    </footer>
  );
};
export default Footer;
