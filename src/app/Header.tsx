import Image from 'next/image';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg w-100 h-12 d-flex justify-content-between px-3" style={{ backgroundColor: '#6abb3a', paddingTop: '5px' }}>
      <div className="d-flex align-items-start"> 
        <div className="me-3">
          <Image src="/images/logo-corrientes.svg" alt="Logo Corrientes" width={200} height={100} />
        </div>
        <div className="me-3">
          <Image src="/images/ministerioJusticia.svg" alt="Ministerio Justicia" width={100} height={100} />
        </div>
        <div className="me-3">
          <Image src="/images/registro-provincial.svg" alt="Registro Provincial" width={100} height={100} />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-login d-flex align-items-center bg-light d-sm-block shadow py-2 px-3 bg-body-tertiary rounded-1 border border-0 fw-semibold mt-1"
        style={{ marginRight: '20%' }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2" style={{ width: '24px', height: '24px' }}>
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <circle cx="12" cy="6" r="4" fill="#000000"></circle>
            <path d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" fill="#000000"></path>
          </g>
        </svg>
        <span className="text-black">INGRESAR</span>
      </button>
    </header>
  );
};

export default Header;
