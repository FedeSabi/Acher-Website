const Institucional = () => {
  return (
    <div className='border-l-[60px] border-r-[60px] border-[#E6F2F8]'>
      <div className="flex flex-row justify-center items-center w-full h-[171px] mt-[120px] bg-[#d9f0f9] font-lato">
        <h1 className="sm:text-6xl text-3xl text-[#2987BC]">Institucional</h1>
      </div>
      {/*primer fila */}
      <div className="sm:flex flex-row justify-around mt-14 gap-14 m-12">
        <div className="w-full sm:w-2/3 md:w-1/3 flex flex-col gap-10">
          <h1 className="sm:text-4xl text-3xl text-[#2987BC]">Historia</h1>
          <p className="sm:text-xl text-md text-[#505050]">
            Hace 50 años, Acher se instaló en el mercado en un contexto en el
            que aun no existía el intervencionismo. De esta manera, la empresa
            se contituyó pionera en el rubro, siendo responsable de introducir
            nuevas tecnologías, Así se impulsaron cambios fundamentales en la
            mentalidad y práctica médica, lo que implicó una importante
            dedicación e inversón.
          </p>
        </div>
        <div className="w-full sm:w-2/3 md:w-1/3 flex flex-col gap-10">
          <h1 className="sm:text-4xl text-3xl text-[#2987BC] sm:mt-0 mt-10">
            Desarrollo
          </h1>
          <p className="sm:text-xl text-md text-[#505050]">
            Actualmente es considerada una de las empresas de dispositivos
            médicos más destacadas en Argentina contando con un canal de
            comercialización y servicio que posee más de 50 años de experiencia
          </p>
          <p className="sm:text-xl text-md text-[#505050] -mt-4">
            Acher es sinónimo de garantía, valorada como una marca responsable
            que ofrece un absoluto respaldo en la venta y post-venta de cada uno
            de sus productos.
          </p>
        </div>
        <div className="w-full sm:w-2/3 md:w-1/3 flex flex-col gap-10">
          <h1 className="sm:text-4xl text-3xl text-[#2987BC] sm:mt-0 mt-10">
            Negocio
          </h1>
          <p className="sm:text-xl text-md text-[#505050]">
            Acher nace en 1968, especializada en la comercialización de
            productos médicos. Principalmente importa desde USA, Dinamarca,
            Australia, Francia, Israel y Suiza.
          </p>
        </div>
      </div>
      {/*segunda fila */}
      <div className="sm:flex flex-row justify-around mt-14 gap-14 ml-12">
        <div className="w-full sm:w-2/3 md:w-1/3 flex flex-col gap-10 pb-12">
          <h1 className="sm:text-4xl text-3xl text-[#2987BC]">Capacitación</h1>
          <p className="sm:text-xl text-md text-[#505050]">
            Apostamos a la capacitación y formación de profesionales en las
            distintas áreas de la medicina.
          </p>
          <p className="sm:text-xl text-md text-[#505050] -mt-4">
            Brindamos apoyo continuo a endoscopistas, cirujanos endovasculares,
            percutáneos y radiólogos, como así también, a una escuela de
            enfermería para el área endoscópica.
          </p>
          <p className="sm:text-xl text-md text-[#505050] -mt-4">
            Destacamos la permanente participación y soporte en los cursos
            <b>“Hands on”</b>, en el marco de las distintas asociaciones
            nacionales y provinciales.
          </p>
          <p className="sm:text-xl text-md text-[#505050] -mt-4">
            Estamos convencidos que los cursos <b>“Hands on”</b> son uno de los
            motores fundamentales para el desarrollo y crecimiento del
            intervensionismo en el País.
          </p>
        </div>
        <div className="w-full sm:w-2/3 md:w-1/3 flex flex-col gap-10">
          <h1 className="sm:text-4xl text-3xl text-[#2987BC] sm:mt-0 mt-10">
            Especialidades
          </h1>
          <p className="sm:text-xl text-md text-[#505050]">
            Gastroenterología/ Endoscopia, Cirugía Vascular, Cardiología y
            Radiología Intervencionista, Laparoscopia, Urología, Terapia
            intensiva, Equipamiento Láser.
          </p>
        </div>
        <div className="w-full sm:w-2/3 md:w-1/3 flex flex-col gap-10 mr-12">
          <h1 className="sm:text-4xl text-3xl text-[#2987BC] sm:mt-0 mt-10">
            Cobertura
          </h1>
          <p className="sm:text-xl text-md text-[#505050] sm:mb-0 mb-20">
            Maneja en forma directa Capital Federal, Provincia de Buenos Aires,
            Mar del Plata y Córdoba.Cuenta con una red de distribuidores en el
            resto de las provincias.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Institucional;
