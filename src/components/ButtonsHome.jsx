import imagen1 from "../assets/carrousel_medicina_3.png"

const ButtonsHome = () => {
  return (
    <>
    <div>
      <div className="group inline-block relative mt-20">
        <button className="outline-none focus:outline-none border w-[442px] h-[129px] bg-[#6ab4d2] rounded-2xl flex items-center min-w-32">
          <span className="pr-1 font-semibold flex-1 text-white text-2xl">
            Cardiología
          </span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out mr-6 text-white text-2xl"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>  
        {/* contenedor menu desplegable */}
      { /* <ul className="border-2 rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32 bg-[#e7e5e5] ">
          <div className="flex flex-row justify-evenly bg-[#e7e5e5] w-[1440px] h-[180px]">
            <div className="w-[327px] h-[29px] underline">
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100 text-black">
                CATETERES
              </li>
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100  text-black">
                EMBOLIZACIÓN
              </li>
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100  text-black">
                GUÍAS ESTÁNDARES / CURVAS
              </li>
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100  text-black">
                BALONES
              </li>
            </div>
            <div>
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100 text-black">
                AGUJAS DE BIOPSIA
              </li>
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100  text-black">
                INTRODUCTORES VASCULARES
              </li>
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100  text-black">
                FILTROS DE VENA CAVA
              </li>
            </div>
            <div>
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100 text-black">
                EXTRACCIÓN CAT.MARCAPASOS
              </li>
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100  text-black">
                ENDOPRÓTESIS AÓRTICAS
              </li>
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100  text-black">
                STENS
              </li>
            </div>
           
          </div>
          <div className="flex flex-row justify-around gap-4 mt-4 mb-4">
                 <div>
                    <img src={imagen1} className="w-[333px] h-[185px]"/>
                 </div> 
                 <div>
                    <img src={imagen1} className="w-[333px] h-[185px]"/>
                 </div>   
                 <div>
                    <img src={imagen1} className="w-[333px] h-[185px]"/>
                 </div>   
                 <div>
                    <img src={imagen1} className="w-[333px] h-[185px]"/>
                 </div>     
            </div>
        </ul>
        */}
        <ul className="border-2 rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-screen bg-[#e7e5e5] left-0 right-0">
  <div className="flex flex-row justify-evenly bg-[#e7e5e5] w-full h-[180px]">
    <div className="w-[327px] h-[29px] underline">
      <li className="rounded-sm px-3 py-1 hover:bg-gray-100 text-black">
        CATETERES
      </li>
      <li className="rounded-sm px-3 py-1 hover:bg-gray-100 text-black">
        EMBOLIZACIÓN
      </li>
      <li className="rounded-sm px-3 py-1 hover:bg-gray-100 text-black">
        GUÍAS ESTÁNDARES / CURVAS
      </li>
      <li className="rounded-sm px-3 py-1 hover:bg-gray-100 text-black">
        BALONES
      </li>
    </div>
    <div>
      <li className="rounded-sm px-3 py-1 hover:bg-gray-100 text-black">
        AGUJAS DE BIOPSIA
      </li>
      <li className="rounded-sm px-3 py-1 hover:bg-gray-100 text-black">
        INTRODUCTORES VASCULARES
      </li>
      <li className="rounded-sm px-3 py-1 hover:bg-gray-100 text-black">
        FILTROS DE VENA CAVA
      </li>
    </div>
    <div>
      <li className="rounded-sm px-3 py-1 hover:bg-gray-100 text-black">
        EXTRACCIÓN CAT.MARCAPASOS
      </li>
      <li className="rounded-sm px-3 py-1 hover:bg-gray-100 text-black">
        ENDOPRÓTESIS AÓRTICAS
      </li>
      <li className="rounded-sm px-3 py-1 hover:bg-gray-100 text-black">
        STENTS
      </li>
    </div>
  </div>
  <div className="flex flex-row justify-around gap-4 mt-4 mb-4">
    <div>
      <img src={imagen1} className="w-[333px] h-[185px]" />
    </div>
    <div>
      <img src={imagen1} className="w-[333px] h-[185px]" />
    </div>
    <div>
      <img src={imagen1} className="w-[333px] h-[185px]" />
    </div>
    <div>
      <img src={imagen1} className="w-[333px] h-[185px]" />
    </div>
  </div>
</ul>

      </div>
    </div>
    </>
  );
};
export default ButtonsHome;
/*
import React, { useState } from 'react';
import imagen1 from "../assets/carrousel_medicina_3.png";

const Tab = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isNoUnderline = title === "BALONES";

  return (
    <div className={`border-b ${isNoUnderline ? 'border-none' : 'border-b-2 border-gray-300'}`}>
      <div className="border-l-2 border-transparent relative">
        <input
          className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
          type="checkbox"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
          id={title}
        />
        <header
          className={`flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none ${isNoUnderline ? '' : 'border-b-2 border-gray-300'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-grey-darkest font-thin text-xl">
            {title}
          </span>
          <div className={`rounded-full border border-grey w-7 h-7 flex items-center justify-center ${isOpen ? 'bg-[#2987bc]' : ''}`}>
            <svg
              aria-hidden="true"
              fill="none"
              height="24"
              stroke={isOpen ? '#fff' : '#2987bc'}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              className={isOpen ? 'transform rotate-180' : ''}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </header>
        <div className={`overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'} transition-all duration-500`}>
          <div className="pl-8 pr-8 pb-5 text-grey-darkest">
            <ul className="pl-4">
              {children}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tabs = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#e7e5e5] p-8 overflow-y-auto z-50">
      <section className="shadow flex flex-grow"> */
        {/* PRIMER COLUMNA */}/*
        <div className="tabs flex-1 mr-6">
          <Tab title="AGUJAS DE BIOPSIA">
            <li key="1" className="pb-2">Agujas de biopsia</li>
          </Tab>
          <Tab title="INTRODUCTORES VASCULARES">
            <li key="4" className="pb-2">Rectos / Curvos</li>
            <li key="5" className="pb-2">Contralaterales</li>
          </Tab>
          <Tab title="GUÍAS ESTÁNDARES / CURVAS">
            <li key="7" className="pb-2">Lunderquist</li>
            <li key="8" className="pb-2">Amplatz</li>
            <li key="9" className="pb-2">Hidrofílicas</li>
          </Tab>
          <Tab title="BALONES">
            <li key="7" className="pb-2">Periféricos</li>
            <li key="8" className="pb-2">Elastoméricos</li>
          </Tab>
        </div>*/
        {/* SEGUNDA COLUMNA */}/*
        <div className="tabs flex-1 mr-6">
          <Tab title="CATETERES">
            <li key="1" className="pb-2">Periféricos</li>
            <li key="2" className="pb-2">Angiográficos</li>
          </Tab>
          <Tab title="EMBOLACIÓN">
            <li key="4" className="pb-2">Estándares</li>
            <li key="5" className="pb-2">Desprendibles</li>
            <li key="6" className="pb-2">Coil Nester</li>
          </Tab>
          <Tab title="FILTROS DE VENA CAVA">
            <li key="7" className="pb-2">Filtro vena</li>
            <li key="8" className="pb-2">Extractor de Filtro</li>
            <li key="9" className="pb-2">Celect</li>
          </Tab>
        </div> */
        {/* TERCER COLUMNA */}/*
        <div className="tabs flex-1">
          <Tab title="EXTRACCIÓN CAT.MARCAPASOS">
            <li key="1" className="pb-2">Estilete fijador</li>
            <li key="2" className="pb-2">Vainas plásticas</li>
            <li key="3" className="pb-2">Vainas metálicas</li>
            <li key="4" className="pb-2">Vaina evolution rotable</li>
            <li key="5" className="pb-2">Bull Dog</li>
          </Tab>
          <Tab title="ENDROPRÓTESIS AÓRTICAS">
            <li key="4" className="pb-2">Toracicas</li>
            <li key="5" className="pb-2">Abdominales</li>
            <li key="6" className="pb-2">T-Branch</li>
            <li key="7" className="pb-2">Iliac Branch</li>
            <li key="8" className="pb-2">Alta complejidad</li>
          </Tab>
          <Tab title="STENTS">
            <li key="10" className="pb-2">Periféricos con droga</li>
            <li key="11" className="pb-2">Venosos</li>
          </Tab>
        </div>
      </section>
      <div className="flex flex-row justify-around gap-4 mt-4 mb-4">
        <div>
          <img src={imagen1} className="w-[333px] h-[185px]" />
        </div>
        <div>
          <img src={imagen1} className="w-[333px] h-[185px]" />
        </div>
        <div>
          <img src={imagen1} className="w-[333px] h-[185px]" />
        </div>
        <div>
          <img src={imagen1} className="w-[333px] h-[185px]" />
        </div>
      </div>
    </div>
  );
};

const ButtonsHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <div className="group inline-block relative mt-20">
          <button
            onClick={handleToggle}
            className="outline-none focus:outline-none border w-[442px] h-[129px] bg-[#6ab4d2] rounded-2xl flex items-center min-w-32"
          >
            <span className="pr-1 font-semibold flex-1 text-white text-2xl">
              Cardiología
            </span>
            <span>
              <svg
                className={`fill-current h-4 w-4 transform transition duration-150 ease-in-out mr-6 text-white text-2xl ${
                  isOpen ? '-rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button> */
          {/* contenedor menu desplegable */}/*
          <Tabs isOpen={isOpen} />
        </div>
      </div>
    </>
  );
};

export default ButtonsHome;*/

