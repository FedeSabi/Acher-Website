import ButtonsHome2 from "../components/ButtonsHome2";
import CarouselHome from "../components/CarouselHome";
import CarouselIcons from "../components/CauroselIcons";

const Home = () => {
  return (
    <div>
      <CarouselHome />
      <div className="h-screen">
        <div className="flex flex-col justify-center items-center h-[62px] w-auto">
          <h1 className="text-6xl text-[#6ab4d2]">Especialidades Médicas</h1>
        </div>
        <div>
          <div className="flex flex-row justify-evenly gap-5">
            <ButtonsHome2 />
          </div> 
          </div>
        </div>
  <div className="mt-52">
          <CarouselIcons />
        </div>

    </div>
  );
};
export default Home;
