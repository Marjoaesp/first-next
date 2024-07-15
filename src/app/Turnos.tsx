import Link from 'next/link';

const Turnos = () => {
  return (
    <div className="container-fluid py-4 mt-lg-4" style={{ backgroundColor: '#808080' }}>
      <h1 className="text-white ">TURNOS</h1>
      <div className="row justify-content-center mt-4">

        <div className="col-md-2 text-center m-2">
          <img className="img-fluid" src="/images/dni.svg" alt="DNI" width={100} height={100} />
          <h5 className="text-white mt-2">DNI</h5>
        </div>

        <div className="col-md-2 text-center m-2">
          <img className="img-fluid" src="/images/pasaporte.svg" alt="Pasaporte" width={100} height={100} />
          <h5 className="text-white mt-2">PASAPORTE</h5>
        </div>

        <div className="col-md-2 text-center m-2">
          <img className="img-fluid" src="/images/educacion.svg" alt="Reconocimiento" width={100} height={100} />
          <h5 className="text-white mt-2">RECONOCIMIENTO</h5>
        </div>

        <div className="col-md-2 text-center m-2">
          <img className="img-fluid" src="/images/arma-imp.svg" alt="Solicitud Actas" width={100} height={100} />
          <h5 className="text-white mt-2">SOLICITUD ACTAS</h5>
        </div>
      </div>
    </div>
  );
};

export default Turnos;
