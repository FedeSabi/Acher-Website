
import { useState } from 'react';
import ButtonsHome2 from '../components/ButtonsHome2';
import ButtonsHome3 from '../components/ButtonsHome3';
import CarouselHome from '../components/CarouselHome';
import CarouselIcons from '../components/CauroselIcons'

const Home = () => {
  const [openComponent, setopenComponent] = useState(null);// Estado para rastrear qué conjunto de botones está abierto

  const handleToggle = (componentName) => {
     //alternar el estado entre ButtonsHome2 y ButtonsHome3
    if (openComponent === componentName) {
     setopenComponent(null); //cerrar el conjunto de botones si ya esta abierto
    } else {
      setopenComponent(componentName);
    }
  }
  
  return (
    <div className='bg-[#E6F2F8] ml-6'>
    <div className="flex flex-col justify-evenly">
      <CarouselHome />
      <div className="flex flex-col justify-center items-center w-auto mb-8">
        <h1 className="sm:text-6xl sm:mt-20 text-3xl text-[#6ab4d2]">
          Especialidades Médicas
        </h1>
      </div>
      <div className="flex flex-col items-center mb-8 h-auto">
        <div className="w-full ">
          <ButtonsHome2 
          isOpen={openComponent === 'ButtonsHome2'}
          handleToggle={() => handleToggle('ButtonsHome2')} />
        </div>
          <div className="w-full">
            <ButtonsHome3 />
          </div>
      </div>    
       <div className="">
        <CarouselIcons 
          isOpen={openComponent === 'ButtonsHome3'}
          handleToggle={() => handleToggle(ButtonsHome3)}
        />
      </div>
    </div>
    </div>
  );
};

export default Home;

