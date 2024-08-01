//import { SiMaplibre } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-full pt-80 "> {/*se agrego mt- 400 al contenedor footer mejoro pero falta */}
    <footer className="flex flex-col w-full bg-gray-200 h-[300px] dark:bg-gray-800 pb-8 xl:pt-8">{/*se agrego flex y flex-col  */}
      <div className="max-w-screen-lg px-4 mx-auto text-gray-200 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-300 gap-6">
        <div className="flex flex-col justify-between items-center bg-gray-200">
          <button className="sm:w-[442px] w-[324px] h-[120px] -mt-24  mb-6 bg-gray-200 lg:text-5xl text-2xl rounded-2xl text-gray-600">
            Contacto
          </button>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center">
              <FaMapMarkerAlt className="text-white text-4xl" />
            </div>
            <a href="https://www.google.com/maps/place/Doblas+1510,+C1424BMF+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.634307,-58.4301724,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccbad935c5e6d:0x6e52fc7da6df63ce!8m2!3d-34.6343114!4d-58.4275975!16s%2Fg%2F11c2542gqz?authuser=0&entry=ttu" className="lg:text-lg text-sm text-gray-600 mb-6" target="_blank" rel="noopener noreferrer">
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
      <div className="bg-blue-100 sm:h-[190px] h-[520px] flex sm:flex-row flex-col items-center justify-around w-full border-t-4 border-t-white mt-10 sm:gap-0 pt-6 pb-6 gap-6 font-semibold text-gray-600">
        <div>
          <a href="#" className="flex items-center gap-4">
            <FaPhone className="mr-2 text-blue-500 sm:text-4xl text-2xl" />
            <p className="text-xl">(+54 11) 4921-0173</p>
          </a>
        </div>
        <div>
          <a href="#" className="flex items-center gap-4">
            <IoMail className="mr-2 text-blue-500 sm:text-4xl text-2xl" />
            <p className="text-xl">info@b-archer.com.ar</p>
          </a>
        </div>
        <div>
          <a href="#" className="flex items-center gap-4">
            <FaInstagram className="mr-2 text-blue-500 sm:text-4xl text-2xl" />
            <p className="text-xl">acherargentina</p>
          </a>
        </div>
        <div>
          <a href="#" className="flex items-center gap-4">
            <FaFacebookSquare className="mr-2 text-blue-500 sm:text-4xl text-2xl" />
            <p className="text-xl">acherargentina</p>
          </a>
        </div>
      </div>
      <div className="text-center text-lg text-gray-600 mt-4">
        <p>acher.com.ar todos los derechos reservados</p>
      </div>
    </footer>
    </div>
  );
};
export default Footer;
