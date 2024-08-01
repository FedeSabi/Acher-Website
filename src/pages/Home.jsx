
import ButtonsHome2 from '../components/ButtonsHome2';
import ButtonsHome3 from '../components/ButtonsHome3';
import CarouselHome from '../components/CarouselHome';
import CarouselIcons from '../components/CauroselIcons'

const Home = () => {
  return (
    <div className="flex flex-col">
      <CarouselHome />
      <div className="flex flex-col justify-center items-center w-auto mt-4 mb-8">
        <h1 className="sm:text-6xl text-3xl text-[#6ab4d2]">
          Especialidades Médicas
        </h1>
      </div>
      <div className="flex flex-col items-center mb-8">
        <div className="w-full">
          <ButtonsHome2  />
        </div>
          <div className="w-full">
            <ButtonsHome3 />
          </div>
      </div>    
       <div className="flex-shrink-0 p-20">
        <CarouselIcons />
      </div>
    </div>
  );
};

export default Home;

