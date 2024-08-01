import { useState } from "react";
import cardio1 from "../assets/1 Cardiologia-01.png";
import cardio2 from "../assets/1 Cardiologia-02.png";
import cardio3 from "../assets/1 Cardiologia-03.png";
import gastro1 from "../assets/2 Gastro-01.png";
import gastro2 from "../assets/2 Gastro-02.png";
import gastro3 from "../assets/2 Gastro-03.png";
import interv1 from "../assets/3 Interv-01.png";
import interv2 from "../assets/3 Interv-02.png";
import interv3 from "../assets/3 Interv-03.png";

// codigo de menu acordion
const Tab = ({ title, isOpen, onToggle, children }) => {
  const isNoUnderline = title === "BALONES";

  return (
    <div
      className={`border-b ${
        isNoUnderline ? "border-none" : "border-b-2 border-gray-300"
      }`}
    >
      <div className="border-l-2 border-transparent relative">
        <header
          className={`flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none ${
            isNoUnderline ? "" : "border-b-2 border-gray-300"
          }`}
          onClick={onToggle}
        >
          <span className="text-grey-darkest font-thin text-xl">{title}</span>
          <div
            className={`rounded-full border border-grey w-7 h-7 flex items-center justify-center ${
              isOpen ? "bg-[#2987bc]" : ""
            }`}
          >
            <svg
              aria-hidden="true"
              fill="none"
              height="24"
              stroke={isOpen ? "#fff" : "#2987bc"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              className={isOpen ? "transform rotate-180" : ""}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </header>
        <div
          className={`overflow-hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          } transition-all duration-500`}
        >
          <div className="pl-8 pr-8 pb-5 text-grey-darkest">
            <ul className="pl-4">{children}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ButtonsHome2 = () => {
  const [openSection, setOpenSection] = useState(null);
  const [openTab, setOpentab] = useState(null); // nuevo estado de las etiquetas Tab
  const [selectedButton, setSelectedButton] = useState(null); //estado del boton seleccionado cambia de color

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleTabToggle = (tab) => {
    setOpentab(openTab === tab ? null : tab);
  };

  const handleButtonClick = (button) =>{
    setSelectedButton(selectedButton === button ? null : button);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        {" "}
        {/* Ajuste del contenedor 1 */}
        <div className="relative mt-20 flex flex-wrap gap-4 justify-center ">
          {/* Asegurar el flujo de columna y espacio entre los botones */}
          <button
            onClick={() => {
              handleToggle("cardiología");
              handleButtonClick("cardiología");
              }}
            className={`outline-none focus:outline-none border w-[442px] h-[129px] ${selectedButton === "cardiología" ? "bg-[#2987bc] h-[165px]" : "bg-[#6ab4d2]" } rounded-2xl flex items-center min-w-32`}
          >
            <span className="pr-1 font-semibold flex-1 text-white text-2xl">
              Cardiología
            </span>
            <span>
              <svg
                className={`fill-current h-6 w-6 transform transition duration-150 ease-in-out mr-6 text-white text-2xl ${
                  openSection === "cardiología" ? "-rotate-180" : "rotate-0" //
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => { 
              handleToggle("gastroenterologia");
              handleButtonClick("gastroenterologia");
              }}
            className={`outline-none focus:outline-none border w-[442px] h-[129px] ${selectedButton === "gastroenterologia" ? "bg-[#2987bc]  h-[165px]" : "bg-[#6ab4d2]" } rounded-2xl flex items-center min-w-32`}
          >
            <span className="pr-1 font-semibold flex-1 text-white text-2xl">
              Gastroenterología
            </span>
            <span>
              <svg
                className={`fill-current h-6 w-6 transform transition duration-150 ease-in-out mr-6 text-white text-2xl ${
                  openSection === "gastroenterologia"
                    ? "-rotate-180"
                    : "rotate-0" //
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <button
            onClick={() =>{ 
              handleToggle("intervencionismo");
              handleButtonClick("intervencionismo")
              }}
            className={`outline-none focus:outline-none border w-[442px] h-[129px] ${selectedButton === "intervencionismo" ? "bg-[#2987bc] h-[165px]" : "bg-[#6ab4d2]" } rounded-2xl flex items-center min-w-32`}
          >
            <span className="pr-1 font-semibold flex-1 text-white text-2xl">
              Intervencionismo
            </span>
            <span>
              <svg
                className={`fill-current h-6 w-6 transform transition duration-150 ease-in-out mr-6 text-white text-2xl ${
                  openSection === "intervencionismo"
                    ? "-rotate-180"
                    : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <div
            className={`transition-all duration-500 ease-in-out w-screen ${
              openSection ? "max-h-screen" : "max-h-0"
            } overflow-hidden absolute left-0 right-0 bg-[#e7e5e5] mt-[150px] -ml-[90px]`}
          >
            {/*Inicio cardilogia */}
            {openSection === "cardiología" && (
              <div className="flex flex-col  w-full h-auto min-h-[100vh] pb-20 z-50 bg-[#e7e5e5]  border-t-[15px] border-t-[#2987bc]">
                <div className="flex flex-row justify-evenly h-auto z-50 bg-[#e7e5e5]">
                  <div>
                    <ul>
                      <Tab
                        title="AGUJAS DE BIOPSIA"
                        isOpen={openTab === "AGUJAS DE BIOPSIA"}
                        onToggle={() => handleTabToggle("AGUJAS DE BIOPSIA")}
                      >
                        <li key="1" className="pb-2">
                          Agujas de biopsia
                        </li>
                      </Tab>
                      <Tab
                        title="INTRODUCTORES VASCULARES"
                        isOpen={openTab === "INTRODUCTORES VASCULARES"}
                        onToggle={() =>
                          handleTabToggle("INTRODUCTORES VASCULARES")
                        }
                      >
                        <li key="4" className="pb-2">
                          Rectos / Curvos
                        </li>
                        <li key="5" className="pb-2">
                          Contralaterales
                        </li>
                      </Tab>
                      <Tab
                        title="GUÍAS ESTÁNDARES / CURVAS"
                        isOpen={openTab === "GUÍAS ESTÁNDARES / CURVAS"}
                        onToggle={() =>
                          handleTabToggle("GUÍAS ESTÁNDARES / CURVAS")
                        }
                      >
                        <li key="7" className="pb-2">
                          Lunderquist
                        </li>
                        <li key="8" className="pb-2">
                          Amplatz
                        </li>
                        <li key="9" className="pb-2">
                          Hidrofílicas
                        </li>
                      </Tab>
                      <Tab
                        title="BALONES"
                        isOpen={openTab === "BALONES"}
                        onToggle={() => handleTabToggle("BALONES")}
                      >
                        <li key="10" className="pb-2">
                          Periféricos
                        </li>
                        <li key="11" className="pb-2">
                          Elastoméricos
                        </li>
                      </Tab>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <Tab
                        title="CATETERES"
                        isOpen={openTab === "CATETERES"}
                        onToggle={() => handleTabToggle("CATETERES")}
                      >
                        <li key="1" className="pb-2">
                          Periféricos
                        </li>
                        <li key="2" className="pb-2">
                          Angiográficos
                        </li>
                      </Tab>
                      <Tab
                        title="EMBOLACIÓN"
                        isOpen={openTab === "EMBOLACIÓN"}
                        onToggle={() => handleTabToggle("EMBOLACIÓN")}
                      >
                        <li key="4" className="pb-2">
                          Estándares
                        </li>
                        <li key="5" className="pb-2">
                          Desprendibles
                        </li>
                        <li key="6" className="pb-2">
                          Coil Nester
                        </li>
                      </Tab>
                      <Tab
                        title="FILTROS DE VENA CAVA"
                        isOpen={openTab === "FILTROS DE VENA CAVA"}
                        onToggle={() => handleTabToggle("FILTROS DE VENA CAVA")}
                      >
                        <li key="7" className="pb-2">
                          Filtro vena
                        </li>
                        <li key="8" className="pb-2">
                          Extractor de Filtro
                        </li>
                        <li key="9" className="pb-2">
                          Celect
                        </li>
                      </Tab>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <Tab
                        title="EXTRACCIÓN CAT.MARCAPASOS"
                        isOpen={openTab === "EXTRACCIÓN CAT.MARCAPASOS"}
                        onToggle={() =>
                          handleTabToggle("EXTRACCIÓN CAT.MARCAPASOS")
                        }
                      >
                        <li key="1" className="pb-2">
                          Estilete fijador
                        </li>
                        <li key="2" className="pb-2">
                          Vainas plásticas
                        </li>
                        <li key="3" className="pb-2">
                          Vainas metálicas
                        </li>
                        <li key="4" className="pb-2">
                          Vaina evolution rotable
                        </li>
                        <li key="5" className="pb-2">
                          Bull Dog
                        </li>
                      </Tab>
                      <Tab
                        title="ENDROPRÓTESIS AÓRTICAS"
                        isOpen={openTab === "ENDROPRÓTESIS AÓRTICAS"}
                        onToggle={() =>
                          handleTabToggle("ENDROPRÓTESIS AÓRTICAS")
                        }
                      >
                        <li key="4" className="pb-2">
                          Toracicas
                        </li>
                        <li key="5" className="pb-2">
                          Abdominales
                        </li>
                        <li key="6" className="pb-2">
                          T-Branch
                        </li>
                        <li key="7" className="pb-2">
                          Iliac Branch
                        </li>
                        <li key="8" className="pb-2">
                          Alta complejidad
                        </li>
                      </Tab>
                      <Tab
                        title="STENTS"
                        isOpen={openTab === "STENTS"}
                        onToggle={() => handleTabToggle("STENTS")}
                      >
                        <li key="10" className="pb-2">
                          Periféricos con droga
                        </li>
                        <li key="11" className="pb-2">
                          Venosos
                        </li>
                      </Tab>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row justify-around gap-4 pt-10 z-50 bg-[#e7e5e5] ]">
                  <div>
                    <img src={cardio1} />
                  </div>
                  <div>
                    <img src={cardio2} />
                  </div>
                  <div>
                    <img src={cardio3} />
                  </div>
                  
                </div>
              </div>
            )}
            {/*Inicio gastroenterologia */}
            {openSection === "gastroenterologia" && (
              <div className="flex flex-col w-full h-auto pb-20 z-50 bg-[#e7e5e5] border-t-[15px] border-t-[#2987bc]">
                <div className="flex flex-row justify-evenly z-50 bg-[#e7e5e5]">
                  <div>
                    <ul>
                      <Tab
                        title="PINZAS DE BIOPSIA"
                        isOpen={openTab === "PINZAS DE BIOPSIA"}
                        onToggle={() => handleTabToggle("PINZAS DE BIOPSIA")}
                      >
                        <li key="1" className="pb-2">
                          Pinza Caliente para biopsia
                        </li>
                        <li key="1" className="pb-2">
                          Pinza Fría para biopsia 2,4 y 1,8 mm
                        </li>
                      </Tab>
                      <Tab
                        title="GUIAS"
                        isOpen={openTab === "GUIAS"}
                        onToggle={() => handleTabToggle("GUIAS")}
                      >
                        <li key="4" className="pb-2">
                          Metro
                        </li>
                        <li key="5" className="pb-2">
                          Acrobat
                        </li>
                      </Tab>
                      <Tab
                        title="PAPILOTOMOS"
                        isOpen={openTab === "PAPILOTOMOS"}
                        onToggle={() => handleTabToggle("PAPILOTOMOS")}
                      >
                        <li key="7" className="pb-2">
                          Papilotomo triple vía
                        </li>
                        <li key="8" className="pb-2">
                          Precorte
                        </li>
                      </Tab>
                      <Tab
                        title="EXTRACTORES"
                        isOpen={openTab === "EXTRACTORES"}
                        onToggle={() => handleTabToggle("EXTRACTORES")}
                      >
                        <li key="9" className="pb-2">
                          Canastilla para Litotriptor
                        </li>
                        <li key="10" className="pb-2">
                          Balón extractor Tri-Ex
                        </li>
                        <li key="11" className="pb-2">
                          Set de litotricia
                        </li>
                      </Tab>
                      <Tab
                        title="CÁPSULA ENDOSCÓPICA"
                        isOpen={openTab === "CÁPSULA ENDOSCÓPICA"}
                        onToggle={() => handleTabToggle("CÁPSULA ENDOSCÓPICA")}
                      ></Tab>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <Tab
                        title="HEMOSTASIA"
                        isOpen={openTab === "HEMOSTASIA"}
                        onToggle={() => handleTabToggle("HEMOSTASIA")}
                      >
                        <li key="1" className="pb-2">
                          Inyector para várices
                        </li>
                        <li key="2" className="pb-2">
                          Set de ligadura de varices x 6 bandas
                        </li>
                        <li key="3" className="pb-2">
                          Set de ligadura de varices x 6+6 bandas
                        </li>
                        <li key="4" className="pb-2">
                          Set de ligadura de varices x 10 bandas
                        </li>
                        <li key="5" className="pb-2">
                          Set de ligadura de Hemorroides x 4 bandas
                        </li>
                        <li key="6" className="pb-2">
                          Clip endoscópico
                        </li>
                        <li key="7" className="pb-2">
                          Cateter Hemospray
                        </li>
                      </Tab>
                      <Tab
                        title="ANSAS"
                        isOpen={openTab === "ANSAS"}
                        onToggle={() => handleTabToggle("ANSAS")}
                      >
                        <li key="4" className="pb-2">
                          Ansa hexagonal
                        </li>
                        <li key="5" className="pb-2">
                          Ansa con mango para polipectomia
                        </li>
                      </Tab>
                      <Tab
                        title="DILATADORES"
                        isOpen={openTab === "DILATADORES"}
                        onToggle={() => handleTabToggle("DILATADORES")}
                      >
                        <li key="7" className="pb-2">
                          Balón dilatación vía biliar
                        </li>
                        <li key="8" className="pb-2">
                          Balón Hércules con guía
                        </li>
                        <li key="9" className="pb-2">
                          Inflador para balón
                        </li>
                        <li key="9" className="pb-2">
                          Dilatador rígido Soehendra
                        </li>
                        <li key="9" className="pb-2">
                          Dilatador Savary
                        </li>
                        <li key="9" className="pb-2">
                          Balón de Acalasia
                        </li>
                      </Tab>
                      <Tab
                        title="STENTS EXPANDIBLES"
                        isOpen={openTab === "STENTS EXPANDIBLES"}
                        onToggle={() => handleTabToggle("STENTS EXPANDIBLES")}
                      >
                        <li key="7" className="pb-2">
                          Prótesis esof. autoexp. recubierta parcial
                        </li>
                        <li key="8" className="pb-2">
                          Prótesis esof. autoexp. full coated
                        </li>
                        <li key="9" className="pb-2">
                          Prótesis duodenal/colónica descubierta
                        </li>
                        <li key="9" className="pb-2">
                          Prótesis exp. biliar descubierta
                        </li>
                        <li key="9" className="pb-2">
                          Prótesis exp. biliar parcial
                        </li>
                        <li key="9" className="pb-2">
                          Prótesis exp. biliar total
                        </li>
                      </Tab>
                      <Tab
                        title="AGUJAS"
                        isOpen={openTab === "AGUJAS"}
                        onToggle={() => handleTabToggle("AGUJAS")}
                      >
                        <li key="4" className="pb-2">
                          Aguja de biopsia
                        </li>
                        <li key="5" className="pb-2">
                          Aguja para ecoendoscopia
                        </li>
                      </Tab>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <Tab
                        title="STENTS PLÁSTICOS"
                        isOpen={openTab === "STENTS PLÁSTICOS"}
                        onToggle={() => handleTabToggle("STENTS PLÁSTICOS")}
                      >
                        <li key="1" className="pb-2">
                          Cotton
                        </li>
                        <li key="2" className="pb-2">
                          Tanenbaum pancreático
                        </li>
                      </Tab>
                      <Tab
                        title="GASTROSTOMIA"
                        isOpen={openTab === "GASTROSTOMIA"}
                        onToggle={() => handleTabToggle("GASTROSTOMIA")}
                      >
                        <li key="4" className="pb-2">
                          Set para gastrostomia endoscópica
                        </li>
                        <li key="5" className="pb-2">
                          Cateter para Jejuno
                        </li>
                        <li key="6" className="pb-2">
                          Repuesto para gastrostomia
                        </li>
                        <li key="7" className="pb-2">
                          Botón gastrostomia
                        </li>
                      </Tab>
                      <Tab
                        title="LINEA FUSION"
                        isOpen={openTab === "LINEA FUSION"}
                        onToggle={() => handleTabToggle("LINEA FUSION")}
                      >
                        <li key="10" className="pb-2">
                          Papilotomo Fusion
                        </li>
                        <li key="11" className="pb-2">
                          Canastilla Fusion
                        </li>
                        <li key="12" className="pb-2">
                          Papilotomo precorte Fusion
                        </li>
                      </Tab>
                      <Tab
                        title="BALÓN OBESIDAD"
                        isOpen={openTab === "BALÓN OBESIDAD"}
                        onToggle={() => handleTabToggle("BALÓN OBESIDAD")}
                      >
                        <li key="10" className="pb-2">
                          Balón intragástrico para la obesidad
                        </li>
                      </Tab>
                      <Tab
                        title="EQUIPOS LÁSER LITOTRICIA"
                        isOpen={openTab === "EQUIPOS LÁSER LITOTRICIA"}
                        onToggle={() =>
                          handleTabToggle("EQUIPOS LÁSER LITOTRICIA")
                        }
                      ></Tab>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row justify-around gap-4 pt-10 z-50 bg-[#e7e5e5]">
                  <div>
                    <img src={gastro1} />
                  </div>
                  <div>
                    <img src={gastro2} />
                  </div>
                  <div>
                    <img src={gastro3} />
                  </div>
                </div>
              </div>
            )}
            {/*Inicio intervencionismo */}
            {openSection === "intervencionismo" && (
              <div className="flex flex-col  w-full h-auto pb-20  z-50 border-t-[15px] border-t-[#2987bc]">
                <div className="flex flex-row justify-evenly z-50 bg-[#e7e5e5]">
                  <div>
                    <ul>
                      <Tab

                        title="DRENAJES"
                        isOpen={openTab === "DRENAJES"}
                        onToggle={() => handleTabToggle("DRENAJES")}
                      >
                        <li key="1" className="pb-2">
                          Sistema introductor percutáneo
                        </li>
                        <li key="2" className="pb-2">
                          Set drenaje Ultrathane multipropósito/ Biliar
                        </li>
                        <li key="2" className="pb-2">
                          Cateter drenaje multipropósito/Biliar
                        </li>
                      </Tab>
                      <Tab
                        title="TRANSYUGULAR"
                        isOpen={openTab === "TRANSYUGULAR"}
                        onToggle={() => handleTabToggle("TRANSYUGULAR")}
                      >
                        <li key="4" className="pb-2">
                          Set introductor Rosch-Uchida
                        </li>
                        <li key="5" className="pb-2">
                          Set de biopsia
                        </li>
                      </Tab>
                      <Tab
                        title="AGUJAS DE BIOPSIA"
                        isOpen={openTab === "AGUJAS DE BIOPSIA"}
                        onToggle={() => handleTabToggle("AGUJAS DE BIOPSIA")}
                      >
                        <li key="7" className="pb-2">
                          Agujas de aspiración
                        </li>
                        <li key="8" className="pb-2">
                          Aguja Quick Core
                        </li>
                      </Tab>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <Tab
                        title="GASTROSTOMIA"
                        isOpen={openTab === "GASTROSTOMIA"}
                        onToggle={() => handleTabToggle("GASTROSTOMIA")}
                      >
                        <li key="1" className="pb-2">
                          Set Gastrostomia
                        </li>
                        <li key="2" className="pb-2">
                          Puntos de fijación
                        </li>
                      </Tab>
                      <Tab
                        title="CECOSTOMIA"
                        isOpen={openTab === "CECOSTOMIA"}
                        onToggle={() => handleTabToggle("CECOSTOMIA")}
                      >
                        <li key="4" className="pb-2">
                          Repuesto de cecostomia
                        </li>
                        <li key="5" className="pb-2">
                          Set completo de cecostomia
                        </li>
                      </Tab>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <Tab
                        title="PRÓTESIS EXPANSIBLES"
                        isOpen={openTab === "PRÓTESIS EXPANSIBLES"}
                        onToggle={() => handleTabToggle("PRÓTESIS EXPANSIBLES")}
                      >
                        <li key="7" className="pb-2">
                          Prótesis expansible vía biliar
                        </li>
                        <li key="8" className="pb-2">
                          Esófago
                        </li>
                        <li key="9" className="pb-2">
                          Duodeno
                        </li>
                        <li key="9" className="pb-2">
                          Colónicas
                        </li>
                      </Tab>
                      <Tab
                        title="EQUIPOS LÁSER LITOTRICIA"
                        isOpen={openTab === "EQUIPOS LÁSER LITOTRICIA"}
                        onToggle={() =>
                          handleTabToggle("EQUIPOS LÁSER LITOTRICIA")
                        }
                      >
                        -------------------
                      </Tab>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row justify-around gap-4 pt-24 z-50 bg-[#e7e5e5] ">
                  <div>
                    <img src={interv1} />
                  </div>
                  <div>
                    <img src={interv2} />
                  </div>
                  <div>
                    <img src={interv3} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsHome2;
