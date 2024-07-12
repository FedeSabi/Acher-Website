const EspecialidadesMedicas = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center w-full h-[171px] mt-[120px] bg-[#d9f0f9] font-lato">
        <h1 className="text-6xl text-[#2987BC]">Especialidades Médicas</h1>
      </div>
      {/*primer fila */}
      <div className="sm:flex flex-row justify-around mt-14 gap-14 m-12">
        <div className="w-1/3 flex flex-col gap-10">
          <h1 className="text-4xl text-[#2987BC]">Cardiología</h1>
          <ul className="text-xl list-disc list-inside text-[#505050] marker-red">
            <li>AGUJAS DE BIOPSIA</li>
            <li>INTRODUCTORES VASCULARES</li>
            <li>GUÍAS ESTANDARES / CURVAS</li>
            <li>CATÉTERES</li>
            <li>EMBOLIZACIÓN</li>
            <li>FILTROS DE VENA CAVA</li>
            <li>EXTRACCIÓN CATÉTERES MARCAPASOS</li>
            <li>ENDOPRÓTESIS AÓRTICAS</li>
            <li>STENTS</li>
          </ul>
        </div>
        <div className="w-1/3 flex flex-col gap-10">
          <h1 className="text-4xl text-[#2987BC]">Gastroenterología</h1>
          <ul className="text-xl list-disc list-inside text-[#505050] marker-red">
            <li>PINZAS DE BIOPSIA</li>
            <li>GUÍAS</li>
            <li>PAPILOTOMOS</li>
            <li>EXTRACTORES</li>
            <li>HEMOSTASIA</li>
            <li>ANSAS</li>
            <li>DILATADORES</li>
            <li>STENTS EXPANDIBLES</li>
            <li>STENTS PLÁSTICOS</li>
            <li>GASTROSTOMIA</li>
            <li>LINEA FUSIÓN</li>
            <li>BALON OBESIDAD</li>
            <li>CÁPSULA ENDOSCÓPICA</li>
            <li>AGUJAS</li>
            <li>EQUIPOS LÁSER PARA LITOTRICIA</li>
          </ul>
        </div>
        <div className="w-1/3 flex flex-col gap-10">
          <h1 className="text-4xl text-[#2987BC]">Intervencionismo</h1>
          <ul className="text-xl list-disc list-inside text-[#505050] marker-red">
            <li>DRENAJES</li>
            <li>TRANSYUGULAR</li>
            <li>AGUJAS DE BIOPSIA</li>
            <li>GASTROSTOMIA</li>
            <li>CECOSTOMIA</li>
            <li>PROTESIS EXPANSIBLES</li>
            <li>EQUIPOS LÁSER PARA LITOTRICIA</li>
          </ul>
        </div>
      </div>
      {/*segunda fila */}
      <div className="sm:flex flex-row justify-around mt-14 gap-14 m-12">
        <div className="w-1/3 flex flex-col gap-10">
          <h1 className="text-4xl text-[#2987BC]">Urología</h1>
          <ul className="text-xl list-disc list-inside text-[#505050] marker-red">
            <li>CATÉTERES DOBLE J / URETERALES</li>
            <li>EXTRACTORES</li>
            <li>BALONES / DILATADORES</li>
            <li>NEFROSTOMIA</li>
            <li>SUPRAPUBICOS</li>
            <li>GUÍAS</li>
            <li> STENTS</li>
            <li>ESFINTER URINARIO</li>
            <li>PRÓTESIS PENEANA</li>
            <li>URETEROSCOPIA</li>
            <li>EQUIPOS LÁSER PARA LITOTRICIA</li>
          </ul>
        </div>
        <div className="w-1/3 flex flex-col gap-10">
          <h1 className="text-4xl text-[#2987BC]">Cuidados Críticos</h1>
          <ul className="text-xl list-disc list-inside text-[#505050] marker-red">
            <li>MONITOREO</li>
            <li>DIALISIS</li>
            <li>LAPAROSCOPIA</li>
            <li>AGUJAS</li>
            <li>EMERGENCIA RESPIRATORIA</li>
          </ul>
        </div>
        <div className="w-1/3 flex flex-col gap-10">
          <h1 className="text-4xl text-[#2987BC]">
            Ginecología - Reproducción{" "}
          </h1>
          <ul className="text-xl list-disc list-inside text-[#505050] marker-red">
            <li>REPRODUCCIÓN</li>
            <li>OBSTETRICIA</li>
            <li>INCUBADORAS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default EspecialidadesMedicas;
