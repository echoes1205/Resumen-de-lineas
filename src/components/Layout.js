import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Layout.css'

export const Layout = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
          <Link to ='/'> <img
            className='navbar-brand'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Cardinal_Health_Logo.svg/2560px-Cardinal_Health_Logo.svg.png'/> </Link>

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
              <Link to='/login' className='nav-l'>
                  Iniciar sesion
                </Link>
                </div>
      </nav>

      <Outlet />
    </div>
  )
}
export default Layout
