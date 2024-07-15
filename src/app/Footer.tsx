import Image from 'next/image';

const Footer = () => {
  return (
    <nav className="navbar fixed-bottom navbar-expand-lg w-100 h-12 d-flex justify-content-between px-3" style={{ backgroundColor: '#FFFFFF', paddingTop: '5px' }}>
      <div className="me-3">
        <Image src="/images/logo-corrientes.svg" alt="Logo Corrientes" width={200} height={100} />
      </div>
      <a href="/terminos-y-condiciones" className="text-decoration-none text-dark fw-bold">
        Términos y Condiciones
      </a>
    </nav>
  );
};

export default Footer;
