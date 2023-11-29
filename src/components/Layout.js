import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom'; 
import './Layout.css';
export const Layout = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Verificar la autenticación al cargar el componente
    const isAuthenticated = localStorage.getItem('auth') === 'yes';
    setIsLoggedIn(isAuthenticated);
  }, []);
  const cerrarSesion = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate('/primerbloque');
  };
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <Link to='/primerbloque'>
          <img className='navbar-brand'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Cardinal_Health_Logo.svg/2560px-Cardinal_Health_Logo.svg.png' /> </Link>

        <div className='navbar-nav'>
          <Link to='/primerbloque' className='nav-link'>
            Bloque 1
          </Link>
          <Link to='/segundobloque' className='nav-link'>
            Bloque 2
          </Link>
          <Link to='/flow' className='nav-link'>
            Flow
          </Link>
          <Link to='/kutter' className='nav-link'>
            Kutter
          </Link>


        </div>
        <div className="navbar-nav">
          {!isLoggedIn && (
            <Link to="/login" className="nav-link">
              Iniciar sesión
            </Link>
          )}
          {isLoggedIn && (
            <div className="navbar-nav">
              <Link to="/login" onClick={cerrarSesion} className="nav-link">
                Cerrar sesión
              </Link>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
export default Layout;