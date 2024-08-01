import ImgPage1 from "../assets/pageUnderconstuction.jpg";

const Novedades = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center w-full h-[171px] mt-[120px] bg-[#d9f0f9] font-lato">
        <h1 className="text-6xl text-[#2987BC]">Novedades</h1>
      </div>
      <div className="flex flex-row justify-center mt-20 gap-14 m-12">
        <div className="flex flex-col gap-10">
          <h1 className="flex text-center justify-center text-3xl font-bold">PAGINA EN CONSTRUCCIÓN</h1>
          <img src={ImgPage1} className=" w-[614px] h-[337px]" />
        </div>
      
      </div>
    </div>
  );
};
export default Novedades;
