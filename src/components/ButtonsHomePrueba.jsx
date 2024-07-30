import { useState } from "react";
import imagen1 from "../assets/carrousel_medicina_3.png";

// Componente Tab para el menú acordeón
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

// Componente principal para manejar los botones y el contenido del acordeón
const ButtonsHome = () => {
  const [openSection, setOpenSection] = useState(null);
  const [openTab, setOpentab] = useState(null);

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleTabToggle = (tab) => {
    setOpentab(openTab === tab ? null : tab);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="relative mt-20 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => handleToggle("cardiología")}
            className="outline-none focus:outline-none border w-[442px] h-[129px] bg-[#6ab4d2] rounded-2xl flex items-center min-w-32"
          >
            <span className="pr-1 font-semibold flex-1 text-white text-2xl">
              Cardiología
            </span>
            <span>
              <svg
                className={`fill-current h-4 w-4 transform transition duration-150 ease-in-out mr-6 text-white text-2xl ${
                  openSection === "cardiología" ? "-rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => handleToggle("gastroenterologia")}
            className="outline-none focus:outline-none border w-[442px] h-[129px] bg-[#6ab4d2] rounded-2xl flex items-center min-w-32"
          >
            <span className="pr-1 font-semibold flex-1 text-white text-2xl">
              Gastroenterología
            </span>
            <span>
              <svg
                className={`fill-current h-4 w-4 transform transition duration-150 ease-in-out mr-6 text-white text-2xl ${
                  openSection === "gastroenterologia"
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
          <button
            onClick={() => handleToggle("intervencionismo")}
            className="outline-none focus:outline-none border w-[442px] h-[129px] bg-[#6ab4d2] rounded-2xl flex items-center min-w-32"
          >
            <span className="pr-1 font-semibold flex-1 text-white text-2xl">
              Intervencionismo
            </span>
            <span>
              <svg
                className={`fill-current h-4 w-4 transform transition duration-150 ease-in-out mr-6 text-white text-2xl ${
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
            } overflow-hidden absolute left-0 right-0 bg-[#e7e5e5] mt-[128px] -ml-[90px]`}
          >
            {/* Sección de Cardiología */}
            {openSection === "cardiología" && (
              <div className="flex flex-col bg-[#e7e5e5] w-full h-auto pb-20  border-8 border-t-[#6ab4d2]">
                <div className="flex flex-row justify-evenly h-auto">
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
                        <li key="6" className="pb-2">
                          Microesferas
                        </li>
                        <li key="7" className="pb-2">
                          Coils
                        </li>
                      </Tab>
                      <Tab
                        title="STENTS"
                        isOpen={openTab === "STENTS"}
                        onToggle={() => handleTabToggle("STENTS")}
                      >
                        <li key="10" className="pb-2">
                          AAA
                        </li>
                        <li key="11" className="pb-2">
                          TAA
                        </li>
                        <li key="12" className="pb-2">
                          Carotídeos
                        </li>
                      </Tab>
                      <Tab
                        title="CLOSURE DEVICE"
                        isOpen={openTab === "CLOSURE DEVICE"}
                        onToggle={() => handleTabToggle("CLOSURE DEVICE")}
                      >
                        <li key="10" className="pb-2">
                          MANTA
                        </li>
                      </Tab>
                    </ul>
                  </div>

                  <div>
                    <img
                      src={imagen1}
                      alt="Descripción de la imagen"
                      className="w-[333px] h-[185px]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Sección de Gastroenterología */}
            {openSection === "gastroenterologia" && (
              <div className="flex flex-col bg-[#e7e5e5] w-full h-auto pb-20  border-8 border-t-[#6ab4d2]">
                <div className="flex flex-row justify-evenly h-auto">
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
                        <li key="6" className="pb-2">
                          Microesferas
                        </li>
                        <li key="7" className="pb-2">
                          Coils
                        </li>
                      </Tab>
                      <Tab
                        title="STENTS"
                        isOpen={openTab === "STENTS"}
                        onToggle={() => handleTabToggle("STENTS")}
                      >
                        <li key="10" className="pb-2">
                          AAA
                        </li>
                        <li key="11" className="pb-2">
                          TAA
                        </li>
                        <li key="12" className="pb-2">
                          Carotídeos
                        </li>
                      </Tab>
                      <Tab
                        title="CLOSURE DEVICE"
                        isOpen={openTab === "CLOSURE DEVICE"}
                        onToggle={() => handleTabToggle("CLOSURE DEVICE")}
                      >
                        <li key="10" className="pb-2">
                          MANTA
                        </li>
                      </Tab>
                    </ul>
                  </div>

                  <div>
                    <img
                      src={imagen1}
                      alt="Descripción de la imagen"
                      className="w-[333px] h-[185px]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Sección de Intervencionismo */}
            {openSection === "intervencionismo" && (
              <div className="flex flex-col bg-[#e7e5e5] w-full h-auto pb-20  border-8 border-t-[#6ab4d2]">
                <div className="flex flex-row justify-evenly h-auto">
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
                        <li key="6" className="pb-2">
                          Microesferas
                        </li>
                        <li key="7" className="pb-2">
                          Coils
                        </li>
                      </Tab>
                      <Tab
                        title="STENTS"
                        isOpen={openTab === "STENTS"}
                        onToggle={() => handleTabToggle("STENTS")}
                      >
                        <li key="10" className="pb-2">
                          AAA
                        </li>
                        <li key="11" className="pb-2">
                          TAA
                        </li>
                        <li key="12" className="pb-2">
                          Carotídeos
                        </li>
                      </Tab>
                      <Tab
                        title="CLOSURE DEVICE"
                        isOpen={openTab === "CLOSURE DEVICE"}
                        onToggle={() => handleTabToggle("CLOSURE DEVICE")}
                      >
                        <li key="10" className="pb-2">
                          MANTA
                        </li>
                      </Tab>
                    </ul>
                  </div>

                  <div>
                    <img
                      src={imagen1}
                      alt="Descripción de la imagen"
                      className="w-[333px] h-[185px]"
                    />
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

export default ButtonsHome;
