import ButtonsHome2 from "../components/ButtonsHome2";
import CarouselHome from "../components/CarouselHome";

const Home = () => {
  return (
    <>
  <CarouselHome />
  <div className="flex flex-row justify-center items-center h-[62px] w-auto">
        <h1 className="text-6xl text-[#6ab4d2]">Especialidades Médicas</h1>
    </div>
    <div className="flex flex-row gap-5">
  <ButtonsHome2 /> 
  </div>
  <div className="flex flex-row gap-5 justify-around ">

 
  </div>
    </>
  );
};
export default Home
