import ButtonsHome2 from "../components/ButtonsHome2";
import CarouselHome from "../components/CarouselHome";
import CarouselIcons from "../components/CauroselIcons";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CarouselHome />
      <div className="flex flex-col justify-center items-center w-auto mt-4 mb-8">
        <h1 className="text-6xl text-[#6ab4d2]">Especialidades Médicas</h1>
      </div>
      <div className="flex-grow flex flex-col items-center">
        <ButtonsHome2 />
      </div>
      {/* <div>
        <CarouselIcons/>
      </div>*/}
    </div>
  );
};
export default Home;
