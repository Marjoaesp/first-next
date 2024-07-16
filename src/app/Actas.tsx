import Link from 'next/link';

const Actas = () => {
  return (
    <div className="container mt-4" style={{ backgroundColor: '#f0f0f0' }}>
      <h1 style={{ color: "#4e9d2d", marginTop: "20px", marginBottom: "20px" }}>INSCRIPCIONES Y TRAMITES</h1>

      <div className="row justify-content-center align-content-center mt-4 flex-nowrap">
        
        <div className="col-md-3 mx-2 rounded-4 text-center" style={{ backgroundColor: '#A81628', padding: '20px', borderRadius: '26px' }}>
          <div className="d-flex flex-column align-items-center">
            <img className="card-img-top mb-3" src="/images/matrimonio_icono.svg" alt="Matrimonio" width={100} height={100} />
            <p className="text-center mb-3" style={{ color: '#ffffff' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, nisl vel rutrum malesuada.</p>
            <div className="d-flex flex-column mt-3">
              <button className="btn btn-primary mb-3 fw-bold" style={{ backgroundColor: 'white', color: '#A81628', fontSize: '1.2rem', border: 'none' }}>SOLICITAR ACTAS</button>
              
            
              
              <button className="btn btn-secondary text-white fw-bold" style={{ borderColor: 'white', color: '#A81628', borderStyle: 'solid', borderWidth: '1px', backgroundColor: '#A81628' }}>INSCRIPCIONES</button>
            </div>
            <div style={{ borderTop: '2px solid white', width: '100%', marginTop: '30px' }}></div>

            <Link href="/ruta-del-panel-1" passHref className='text-decoration-none'>
              <h5 className="card-title text-white mt-4">MATRIMONIO</h5>
            </Link>
          </div>
        </div>

        <div className="col-md-3 mx-2 rounded-4 text-center" style={{ backgroundColor: '#b38a00', padding: '20px', borderRadius: '26px' }}>
          <div className="d-flex flex-column align-items-center">
            <img className="card-img-top mb-3" src="/images/nacimiento_icono.svg" alt="Panel 1" width={100} height={100} />
            <p className="text-center mb-3" style={{ color: '#ffffff' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, nisl vel rutrum malesuada.</p>
            <div className="d-flex flex-column mt-3">
              <button className="btn btn-primary mb-3 fw-bold" style={{ backgroundColor: 'white', color: '#b38a00', fontSize: '1.2rem', border: 'none' }}>SOLICITAR ACTAS</button>
              
             

              <button className="btn btn-secondary text-white fw-bold" style={{ borderColor: 'white', color: '#b38a00', borderStyle: 'solid', borderWidth: '1px', backgroundColor: '#b38a00' }}>INSCRIPCIONES</button>
            </div>
            <div style={{ borderTop: '2px solid white', width: '100%', marginTop: '30px' }}></div>

            <Link href="/ruta-del-panel-1" passHref className='text-decoration-none'>
              <h5 className="card-title text-white mt-4">NACIMIENTO</h5>
            </Link>
          </div>
        </div>

        <div className="col-md-3 mx-2 rounded-4 text-center" style={{ backgroundColor: '#A0B3B5', padding: '20px', borderRadius: '26px' }}>
          <div className="d-flex flex-column align-items-center">
            <img className="card-img-top mb-3" src="/images/defuncion_icono.svg" alt="Panel 2" width={100} height={100} />
            <p className="text-center mb-3" style={{ color: '#ffffff' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, nisl vel rutrum malesuada.</p>
            <div className="d-flex flex-column mt-3">
              <button className="btn btn-primary mb-3 fw-bold" style={{ backgroundColor: 'white', color: '#A0B3B5', fontSize: '1.2rem', border: 'none' }}>SOLICITAR ACTAS</button>
              


              <button className="btn btn-secondary text-white fw-bold" style={{ borderColor: 'white', color: '#A0B3B5', borderStyle: 'solid', borderWidth: '1px', backgroundColor: '#A0B3B5' }}>INSCRIPCIONES</button>
            </div>
            <div style={{ borderTop: '2px solid white', width: '100%', marginTop: '30px' }}></div>

            <Link href="/ruta-del-panel-2" passHref className='text-decoration-none'>
              <h5 className="card-title text-white mt-4">DEFUNCIÓN</h5>
            </Link>
          </div>
        </div>

        <div className="col-md-3 mx-2 rounded-4 text-center" style={{ backgroundColor: '#863D81', padding: '20px', borderRadius: '26px' }}>
          <div className="d-flex flex-column align-items-center">
            <img className="card-img-top mb-3" src="/images/union_convivencial_icono.svg" alt="Panel 3" width={100} height={100} />
            <p className="text-center mb-3" style={{ color: '#ffffff' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, nisl vel rutrum malesuada.</p>
            <div className="d-flex flex-column mt-3">
              <button className="btn btn-primary mb-3 fw-bold" style={{ backgroundColor: 'white', color: '#863D81', fontSize: '1.2rem', border: 'none', marginBottom: '10px' }}>SOLICITAR ACTAS</button>
              

              <button className="btn btn-secondary text-white fw-bold" style={{ borderColor: 'white', color: '#863D81', borderStyle: 'solid', borderWidth: '1px', backgroundColor: '#863D81' }}>INSCRIPCIONES</button>
            </div>
            <div style={{ borderTop: '2px solid white', width: '100%', marginTop: '30px' }}></div>

            <Link href="/ruta-del-panel-3" passHref className='text-decoration-none'>
              <h5 className="card-title text-white mt-4">UNIÓN CONVIVENCIAL</h5>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Actas;
