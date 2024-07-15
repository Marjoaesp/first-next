import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-green-700" style={{ backgroundColor: '#70b444' }}>
      <div className="container justify-content-center">
        <button type="button" className="btn btn-success h5 shadow m-1 text-decoration-none border-0 fw-bold">INSTITUCIONAL</button>
        <button type="button" className="btn btn-success h5 shadow m-1 text-decoration-none border-0 fw-bold">SERVICIOS</button>
        <button type="button" className="btn btn-success h5 shadow m-1 text-decoration-none border-0 fw-bold">TRAMITES</button>
      </div>
    </nav>
  );
};

export default NavBar;
