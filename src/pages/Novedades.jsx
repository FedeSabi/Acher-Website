import ImgHome1 from '../assets/carrousel_medicina_3.png';


const Novedades = () => {
  return (
    <div>
         <div className="flex flex-row justify-center items-center w-full h-[171px] mt-[120px] bg-[#d9f0f9] font-lato">
        <h1 className="text-6xl text-[#2987BC]">Novedades</h1>
      </div>
      <div className="flex flex-row justify-around mt-14 gap-14 m-12">
        <div className="w-1/2 flex flex-col gap-10">
            <h1>
            Título de producto NUEVO
            </h1>
            <p>
            Hace 50 años, Acher se instaló en el mercado en un contexto en el que aun no existía el intervencionismo. De esta manera, la empresa se constituyó pionera en el rubro, siendo responsable de introducir nuevas tecnologías. Así se impulsaron cambios fundamentales en la mentalidad y práctica médica, lo que implicó una importante dedicación e inversión.
            </p>
            <img src={ImgHome1} className='w-[614px] h-[337px]'/>
        </div>
        <div className="w-1/2 flex flex-col gap-10">
            <h1>
            Título de producto NUEVO
            </h1>
            <p>
            Hace 50 años, Acher se instaló en el mercado en un contexto en el que aun no existía el intervencionismo. De esta manera, la empresa se constituyó pionera en el rubro, siendo responsable de introducir nuevas tecnologías. Así se impulsaron cambios fundamentales en la mentalidad y práctica médica, lo que implicó una importante dedicación e inversión.
            </p>
            <img src={ImgHome1} className='w-[614px] h-[337px] mb-44'/>
        </div>
      </div>
    </div>
  )
}
export default Novedades