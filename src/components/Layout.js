import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Layout.css'

export const Layout = () => {
  return (
    <div>
      <nav class='navbar navbar-expand-lg bg-body-tertiary'>
          <Link to ='/'> <img
            class='navbar-brand'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Cardinal_Health_Logo.svg/2560px-Cardinal_Health_Logo.svg.png'/> </Link>

            <div class='navbar-nav'>
              <Link to='/primerbloque' class='nav-link'>
                Bloque 1
              </Link>
              <Link to='/segundobloque' class='nav-link'>
                Bloque 2
              </Link>
              <Link to='/flow' class='nav-link'>
                Flow
              </Link>
              <Link to='/kutter' class='nav-link'>
                Kutter
              </Link>
              

            </div>
            {/* <div class="sesionButtons">
                <Link to='/login' class='nav-link'>
                  Iniciar sesion
                </Link>
                <Link to='/kutter' class='nav-link'>
                  Registrarse
                </Link>
              </div> */}
              <div>
             
                {/* <Link to='/kutter' class='nav-link'>
                    Registrarse
                </Link> */}
              </div>
              <div class="navbar-nav">
              <Link to='/login' class='nav-l'>
                  Iniciar sesion
                </Link>
                </div>
      </nav>

      <Outlet />
    </div>
  )
}
export default Layout
