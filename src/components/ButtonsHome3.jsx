import { useState } from "react";
import uro1 from "../assets/4 Uro-01.png"
import uro2 from "../assets/4 Uro-02.png"
import uro3 from "../assets/4 Uro-03.png"
import cuidados1 from "../assets/5 CC-01.png"
import cuidados2 from "../assets/5 CC-02.png"
import cuidados3 from "../assets/5 CC-03.png"
import gineco1 from "../assets/6 Gineco-01.png"
import gineco2 from "../assets/6 Gineco-02.png"
import gineco3 from "../assets/6 Gineco-03.png"
  
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

const ButtonsHome3 = () => {
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
        {/* Ajuste del contenedor 2 */}  
        <div className="relative mt-10 flex flex-wrap gap-4 justify-center ">
          {/* Asegurar el flujo de columna y espacio entre los botones */}
          <button
            onClick={() => {
              handleToggle("urologia");
              handleButtonClick("urologia")}}
            className={`outline-none focus:outline-none border w-[442px] h-[129px] ${selectedButton === "urologia" ? "bg-[#2987bc] h-[165px]" : "bg-[#6ab4d2]"} rounded-2xl flex items-center min-w-32`}
          >
            <span className="pr-1 font-semibold flex-1 text-white text-2xl">
              Urología
            </span>
            <span>
              <svg
                className={`fill-current h-6 w-6 transform transition duration-150 ease-in-out mr-6 text-white text-2xl ${
                  openSection === "urologia" ? "-rotate-180" : "rotate-0" //
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
              handleToggle("Cuidados Críticos");
              handleButtonClick("Cuidados Críticos");
            }}
            className={`outline-none focus:outline-none border w-[442px] h-[129px] ${selectedButton === "Cuidados Críticos" ? "bg-[#2987bc] h-[165px]" : "bg-[#6ab4d2]"} rounded-2xl flex items-center min-w-32`}
          >
            <span className="pr-1 font-semibold flex-1 text-white text-2xl">
              Cuidados Críticos
            </span>
            <span>
              <svg
                className={`fill-current h-6 w-6 transform transition duration-150 ease-in-out mr-6 text-white text-2xl ${
                  openSection === "Cuidados Críticos"
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
            onClick={() => {
              handleToggle("Gineco - Reproducción");
              handleButtonClick("Gineco - Reproducción");
              }}
            className={`outline-none focus:outline-none border w-[442px] h-[129px] ${selectedButton === "Gineco - Reproducción"  ? "bg-[#2987bc] h-[165px]" : "bg-[#6ab4d2]"} rounded-2xl flex items-center min-w-32`}
          >
            <span className="pr-1 font-semibold flex-1 text-white text-2xl">
              Gineco - Reproducción
            </span>
            <span>
              <svg
                className={`fill-current h-6 w-6 transform transition duration-150 ease-in-out mr-6 text-white text-2xl ${
                  openSection === "Gineco - Reproducción"
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
          <div
            className={`transition-all duration-500 ease-in-out w-screen ${
              openSection ? "max-h-[900px]" : "max-h-0"
            } overflow-hidden absolute left-0 right-0 bg-[#e7e5e5] mt-[150px] -ml-[90px]`}
          >
            {/* inicio urologia */}
            {openSection === "urologia" && (
              <div className="flex flex-col w-full h-auto pb-20  z-50 bg-[#e7e5e5] border-t-[15px] border-t-[#2987bc]">
                <div className="flex flex-row justify-evenly z-50 bg-[#e7e5e5]">
                  <div>
                    <ul>
                      <Tab
                        title="CATETER DOBLE 'J' - URETERALES"
                        isOpen={openTab === "CATETER DOBLE 'J' - URETERALES"}
                        onToggle={() =>
                          handleTabToggle("CATETER DOBLE 'J' - URETERALES")
                        }
                      >
                        <li key="1" className="pb-2">
                          Set stent doble Pigtail permanente
                        </li>
                        <li key="1" className="pb-2">
                          Set stent doble Pigtail temporario
                        </li>
                        <li key="1" className="pb-2">
                          Set stent doble Pigtail c/guía hidrofílica
                        </li>
                        <li key="1" className="pb-2">
                          Aguja de Williams
                        </li>
                        <li key="1" className="pb-2">
                          Set cateter Bander
                        </li>
                        <li key="1" className="pb-2">
                          Cateter ureteral punta abierta
                        </li>
                        <li key="1" className="pb-2">
                          Cateter dual Lumen Flexi Tip
                        </li>
                      </Tab>
                      <Tab
                        title="EXTRACTORES"
                        isOpen={openTab === "EXTRACTORES"}
                        onToggle={() => handleTabToggle("EXTRACTORES")}
                      >
                        <li key="4" className="pb-2">
                          Canastilla N-Circle de 4.5 Fr x 65 cm
                        </li>
                        <li key="5" className="pb-2">
                          Canastilla N-Circle De 3.0 Fr x 115 cm
                        </li>
                        <li key="4" className="pb-2">
                          Canastilla Helical N-Force de 3.2 x 115
                        </li>
                        <li key="5" className="pb-2">
                          Canastilla N-Compass 2.4 Fr x 115 cm
                        </li>
                        <li key="4" className="pb-2">
                          Canastilla Percutánea semirígida
                        </li>
                        <li key="5" className="pb-2">
                          Oclusor-Extractor de 2.8 Fr x 145 cm
                        </li>
                        <li key="4" className="pb-2">
                          Canastilla Ncircle 1.5-115/2,2-115
                        </li>
                        <li key="5" className="pb-2">
                          Delta Wire Grasper Set 3.2 Fr 115 cm
                        </li>
                        <li key="4" className="pb-2">
                          Canastilla Tipo Grasping Ngage
                        </li>
                      </Tab>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <Tab
                        title="BALONES/DILATADORES"
                        isOpen={openTab === "BALONES/DILATADORES"}
                        onToggle={() => handleTabToggle("BALONES/DILATADORES")}
                      >
                        <li key="1" className="pb-2">
                          Cateter balón dilatador ureteral
                        </li>
                        <li key="2" className="pb-2">
                          Balón dilatación percutánea Ultraxx
                        </li>
                        <li key="1" className="pb-2">
                          Set dilatadores Amplatz
                        </li>
                        <li key="2" className="pb-2">
                          Set dilatadores ureterales
                        </li>
                        <li key="2" className="pb-2">
                          Set dilatadores uretrales
                        </li>
                      </Tab>
                      <Tab
                        title="NEFROSTOMIA"
                        isOpen={openTab === "NEFROSTOMIA"}
                        onToggle={() => handleTabToggle("NEFROSTOMIA")}
                      >
                        <li key="4" className="pb-2">
                          Set nefrostomia Pigtail 8,3/10
                        </li>
                        <li key="5" className="pb-2">
                          Set nefrostomia Malecot 12/14/16
                        </li>
                      </Tab>
                      <Tab
                        title="SUPRAPÚBICOS"
                        isOpen={openTab === "SUPRAPÚBICOS"}
                        onToggle={() => handleTabToggle("SUPRAPÚBICOS")}
                      >
                        <li key="7" className="pb-2">
                          Set de punción suprapúbica Stamey
                        </li>
                      </Tab>
                      <Tab
                        title="GUIAS"
                        isOpen={openTab === "GUIAS"}
                        onToggle={() => handleTabToggle("GUIAS")}
                      >
                        <li key="7" className="pb-2">
                          Guía Heavy Duty
                        </li>
                      </Tab>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <Tab
                        title="STENTS"
                        isOpen={openTab === "STENTS"}
                        onToggle={() => handleTabToggle("STENTS")}
                      >
                        <li key="1" className="pb-2">
                          Stent ureteral autoexpansible
                        </li>
                        <li key="2" className="pb-2">
                          Stent ureteral metálico Resonance
                        </li>
                        <li key="3" className="pb-2">
                          Stent uretral autoexpansible con OPS - Plataforma
                          única de liberación
                        </li>
                      </Tab>
                      <Tab
                        title="ESFINTER URINARIO"
                        isOpen={openTab === "ESFINTER URINARIO"}
                        onToggle={() => handleTabToggle("ESFINTER URINARIO")}
                      >
                        <li key="4" className="pb-2">
                          Esfínter urinario masculino
                        </li>
                      </Tab>
                      <Tab
                        title="PRÓTESIS PENEANAS"
                        isOpen={openTab === "PRÓTESIS PENEANAS"}
                        onToggle={() => handleTabToggle("PRÓTESIS PENEANAS")}
                      >
                        <li key="10" className="pb-2">
                          Maleable
                        </li>
                        <li key="11" className="pb-2">
                          Inflable
                        </li>
                        <li key="11" className="pb-2">
                          Transgénero
                        </li>
                      </Tab>
                      <Tab
                        title="EQUIPOS LÁSER LITOTRICIA"
                        isOpen={openTab === "EQUIPOS LÁSER LITOTRICIA"}
                        onToggle={() =>
                          handleTabToggle("EQUIPOS LÁSER LITOTRICIA")
                        }
                      >
                        <li key="10" className="pb-2">
                          Cyber Ho 60/100/150
                        </li>
                        <li key="11" className="pb-2">
                          Fiber Dust
                        </li>
                        <li key="11" className="pb-2">
                          Magneto 100/150
                        </li>
                      </Tab>
                      <Tab
                        title="URETERESCOPIA"
                        isOpen={openTab === "URETERESCOPIA"}
                        onToggle={() => handleTabToggle("URETERESCOPIA")}
                      >
                        <li key="10" className="pb-2">
                          Ureteroscopio flexible desechable
                        </li>
                        <li key="10" className="pb-2">
                          Balón UPJ oclusor
                        </li>
                      </Tab>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row justify-around gap-4 mt-10">
                  <div>
                    <img src={uro1} />
                  </div>
                  <div>
                    <img src={uro2} />
                  </div>
                  <div>
                    <img src={uro3} />
                  </div>
                </div>
              </div>
            )}
            {/* cuidados criticos */}
            {openSection === "Cuidados Críticos" && (
              <div className="flex flex-col bg-[#e7e5e5] w-full h-auto min-h-[100vh] pb-20 z-50 border-t-[15px] border-t-[#2987bc]">
                <div className="flex flex-row justify-evenly z-50 bg-[#e7e5e5]">
                  <div>
                    <ul>
                      <Tab
                        title="MONITOREO"
                        isOpen={openTab === "MONITOREO"}
                        onToggle={() => handleTabToggle("MONITOREO")}
                      >
                        <li key="1" className="pb-2">
                          Set p/monitoreo central doble lumen
                        </li>
                        <li key="1" className="pb-2">
                          Set venoso central periférico
                        </li>
                        <li key="1" className="pb-2">
                          Set venoso central periférico/ Turbojet
                        </li>
                      </Tab>
                      <Tab
                        title="DIALISIS"
                        isOpen={openTab === "DIALISIS"}
                        onToggle={() => handleTabToggle("DIALISIS")}
                      >
                        <li key="4" className="pb-2">
                          Set hemodialisis peritoneal Tenckhoff
                        </li>
                      </Tab>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <Tab
                        title="BALONES/DILATADORES"
                        isOpen={openTab === "BALONES/DILATADORES"}
                        onToggle={() => handleTabToggle("BALONES/DILATADORES")}
                      >
                        <li key="1" className="pb-2">
                          Cateter balón dilatador ureteral
                        </li>
                        <li key="2" className="pb-2">
                          Balón dilatación percutánea Ultraxx
                        </li>
                        <li key="1" className="pb-2">
                          Set dilatadores Amplatz
                        </li>
                        <li key="2" className="pb-2">
                          Set dilatadores ureterales
                        </li>
                        <li key="2" className="pb-2">
                          Set dilatadores uretrales
                        </li>
                      </Tab>
                      <Tab
                        title="NEFROSTOMIA"
                        isOpen={openTab === "NEFROSTOMIA"}
                        onToggle={() => handleTabToggle("NEFROSTOMIA")}
                      >
                        <li key="4" className="pb-2">
                          Set nefrostomia Pigtail 8,3/10
                        </li>
                        <li key="5" className="pb-2">
                          Set nefrostomia Malecot 12/14/16
                        </li>
                      </Tab>
                      <Tab
                        title="SUPRAPÚBICOS"
                        isOpen={openTab === "SUPRAPÚBICOS"}
                        onToggle={() => handleTabToggle("SUPRAPÚBICOS")}
                      >
                        <li key="7" className="pb-2">
                          Set de punción suprapúbica Stamey
                        </li>
                      </Tab>
                      <Tab
                        title="GUIAS"
                        isOpen={openTab === "GUIAS"}
                        onToggle={() => handleTabToggle("GUIAS")}
                      >
                        <li key="7" className="pb-2">
                          Guía Heavy Duty
                        </li>
                      </Tab>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <Tab
                        title="STENTS"
                        isOpen={openTab === "STENTS"}
                        onToggle={() => handleTabToggle("STENTS")}
                      >
                        <li key="1" className="pb-2">
                          Stent ureteral autoexpansible
                        </li>
                        <li key="2" className="pb-2">
                          Stent ureteral metálico Resonance
                        </li>
                        <li key="3" className="pb-2">
                          Stent uretral autoexpansible con OPS - Plataforma
                          única de liberación
                        </li>
                      </Tab>
                      <Tab
                        title="ESFINTER URINARIO"
                        isOpen={openTab === "ESFINTER URINARIO"}
                        onToggle={() => handleTabToggle("ESFINTER URINARIO")}
                      >
                        <li key="4" className="pb-2">
                          Esfínter urinario masculino
                        </li>
                      </Tab>
                      <Tab
                        title="PRÓTESIS PENEANAS"
                        isOpen={openTab === "PRÓTESIS PENEANAS"}
                        onToggle={() => handleTabToggle("PRÓTESIS PENEANAS")}
                      >
                        <li key="10" className="pb-2">
                          Maleable
                        </li>
                        <li key="11" className="pb-2">
                          Inflable
                        </li>
                        <li key="11" className="pb-2">
                          Transgénero
                        </li>
                      </Tab>
                      <Tab
                        title="EQUIPOS LÁSER LITOTRICIA"
                        isOpen={openTab === "EQUIPOS LÁSER LITOTRICIA"}
                        onToggle={() =>
                          handleTabToggle("EQUIPOS LÁSER LITOTRICIA")
                        }
                      >
                        <li key="10" className="pb-2">
                          Cyber Ho 60/100/150
                        </li>
                        <li key="11" className="pb-2">
                          Fiber Dust
                        </li>
                        <li key="11" className="pb-2">
                          Magneto 100/150
                        </li>
                      </Tab>
                      <Tab
                        title="URETERESCOPIA"
                        isOpen={openTab === "URETERESCOPIA"}
                        onToggle={() => handleTabToggle("URETERESCOPIA")}
                      >
                        <li key="10" className="pb-2">
                          Ureteroscopio flexible desechable
                        </li>
                        <li key="10" className="pb-2">
                          Balón UPJ oclusor
                        </li>
                      </Tab>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row justify-around gap-4 mt-10">
                  <div>
                    <img src={cuidados1} />
                  </div>
                  <div>
                    <img src={cuidados2} />
                  </div>
                  <div>
                    <img src={cuidados3} />
                  </div>
                </div>
              </div>
            )}
            {/* inicio gineco - reproduccion */}
            {openSection === "Gineco - Reproducción" && (
              <div className="flex flex-col w-full h-auto min-h-[100vh] pb-20 z-50 bg-[#e7e5e5]  border-t-[15px] border-t-[#2987bc]">
                <div className="flex flex-row justify-evenly z-50 bg-[#e7e5e5] ">
                  <div >
                    <ul>
                      <Tab
                        title="REPRODUCCIÓN"
                        isOpen={openTab === "REPRODUCCIÓN"}
                        onToggle={() => handleTabToggle("REPRODUCCIÓN")}
                      >
                        <li key="1" className="pb-2">
                          Catéter de transferencia
                        </li>
                        <li key="1" className="pb-2">
                          Agujas de aspiración
                        </li>
                        <li key="1" className="pb-2">
                          Micropipetas
                        </li>
                        <li key="1" className="pb-2">
                          Medios de cultivo
                        </li>
                      </Tab>{" "}
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <Tab
                        title="OBSTETRICIA"
                        isOpen={openTab === "OBSTETRICIA"}
                        onToggle={() => handleTabToggle("OBSTETRICIA")}
                      >
                        <li key="4" className="pb-2">
                          Balón Bakri para la hemorragia postparto
                        </li>
                      </Tab>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <Tab
                        title="INCUBADORAS"
                        isOpen={openTab === "INCUBADORAS"}
                        onToggle={() => handleTabToggle("INCUBADORAS")}
                      >
                      </Tab>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row justify-around gap-4 pt-20 z-50 bg-[#e7e5e5]">
                  <div>
                    <img src={gineco1} />
                  </div>
                  <div>
                    <img src={gineco2} />
                  </div>
                  <div>
                    <img src={gineco3} />
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

export default ButtonsHome3;

