import ButtonsHome2 from "../components/ButtonsHome2";
import CarouselHome from "../components/CarouselHome";
import CarouselIcons from "../components/CauroselIcons";
import ButtonsHome3 from "../components/ButtonsHome3";

const Home = () => {
  return (
    <>
      <CarouselHome />
      <div className="flex flex-col justify-center items-center h-[62px] w-auto">
        <h1 className="text-6xl text-[#6ab4d2]">Especialidades Médicas</h1>
      </div>
      <div>
        <div className="flex flex-row justify-evenly gap-5">
          <ButtonsHome2 />
        </div>
        <div className="flex flex-row justify-evenly gap-5">
          <ButtonsHome3 />
        </div>
      </div>
      <div>
         <CarouselIcons /> 
      </div>
    
    </>
  );
};
export default Home;
