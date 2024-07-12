import cook from "../assets/0 COOK MEDICAL.png";
import quanta from "../assets/1 QUANTA.png";
import seegen from  "../assets/2 SEEGEN.png"
import allium from "../assets/3 ALLIUM.png"
import spatz from "../assets/4 SPATZ.png"
import anx from "../assets/5 ANX.png"
import capsovision from "../assets/6 CAPSOVISION.png"
import zephyr from "../assets/7 ZEPHYR.png"
import ovesco from "../assets/8 OVESCO.png"
import danumed from "../assets/9 DANUMED.png"
import vigeo from "../assets/10 VIGEO.png"

const Representaciones = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center w-full h-[171px] mt-[120px] bg-[#d9f0f9] font-lato">
        <h1 className="text-6xl text-[#2987BC]">Representaciones</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center mt-28 gap-6">
          <img src={cook} className="w-[203px] h-[130px]" />
          <div>
            <a
              href="https://www.cookmedical.com/"
              className="size-6 font-lato underline hover:text-[#2987BC]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Cook Medical Website
            </a>
          </div>
        </div>
        {/* primer fila de icons */}
        <div className="w-5/5 flex flex-row justify-around">
        <div className="flex flex-col items-center justify-center mt-28 gap-6">
          <img src={quanta} className="w-[338px] h-[132px]" />
          <div>
            <a
              href="https://www.quantasystem.com/es/"
              className="size-6 font-lato underline hover:text-[#2987BC]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Quanta System Website
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-28 gap-6">
          <img src={seegen} className="w-[217px] h-[132px]" />
          <div>
            <a
              href="https://www.seegenmed.com/"
              className="size-6 font-lato underline hover:text-[#2987BC]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Seegen WebSite
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-28 gap-6">
          <img src={allium} className="w-[254px] h-[130px]" />
          <div>
            <a
              href="https://www.allium-medical.com/"
              className="size-6 font-lato underline hover:text-[#2987BC]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Allium Website
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-28 gap-6">
          <img src={spatz} className="w-[213px] h-[130px]" />
          <div>
            <a
              href="https://www.spatzmedical.com/es/"
              className="size-6 font-lato underline hover:text-[#2987BC]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Spatz3 Website
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-28 gap-6">
          <img src={anx} className="w-[196px] h-[135px]" />
          <div>
            <a
              href="https://www.anxrobotics.com/"
              className="size-6 font-lato underline hover:text-[#2987BC]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              ANX Website
            </a>
          </div>
        </div>
        </div>
        {/* segunda fila de icons */}
        <div className="w-5/5 flex flex-row justify-around mb-48">
        <div className="flex flex-col items-center justify-center mt-28 gap-6">
          <img src={capsovision} className="w-[206px] h-[130px]" />
          <div>
            <a
              href="https://capsovision.com/"
              className="size-6 font-lato underline hover:text-[#2987BC]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              CapsoVisión Website
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-28 gap-6">
          <img src={zephyr} className="w-[203px] h-[130px]" />
          <div>
            <a
              href="https://es.zsimplants.ch/"
              className="size-6 font-lato underline hover:text-[#2987BC]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Zephyr Website
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-28 gap-6">
          <img src={ovesco} className="w-[219px] h-[130px]" />
          <div>
            <a
              href="https://ovesco.com/"
              className="size-6 font-lato underline hover:text-[#2987BC]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Ovesco Website
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-28 gap-6">
          <img src={danumed} className="w-[231px] h-[130px]" />
          <div>
            <a
              href="https://www.danumed.com/"
              className="size-6 font-lato underline hover:text-[#2987BC]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Danumed Website
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-28 gap-6">
          <img src={vigeo} className="w-[200px] h-[130px]" />
          <div>
            <a
              href="https://www.vigeosrl.it/"
              className="size-6 font-lato underline hover:text-[#2987BC]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Vigeo Website
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Representaciones;
