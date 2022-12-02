import React from "react";
import { Link } from "react-router-dom";


export const Navbar= (props)=>{
    const{Saludo}=props
    return (
       <header>
     <nav className="navbar navbar-expand-lg bg-light p-2" id="menu_barra">
        <div className="container-fluid">

        <Link className="navbar-brand" to="/*" id="ReciRop">Reci<span className="text-danger">Rop</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
          <Link className="dropdown-item" to="/*">Inicio</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Usuario
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/login">Iniciar Sesion</Link></li>
                <li><Link className="dropdown-item" to="/Registro">Registrarse</Link></li>
                <li><h1 className="dropdown-divider"></h1></li>
                <li><a className="dropdown-item">Necesitas ayuda?</a></li>
                <li><h1>{Saludo}</h1></li>
              </ul>
            </li>

            </ul>
          </div>
        </div>
      </nav>
       </header>
    )
}
