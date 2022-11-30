import React from "react";
<<<<<<< HEAD
import { Link, NavLink } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> 84f4e11211b4d013c42f3d5d279e3c728796078e


export const Navbar= (props)=>{
    const{Saludo}=props
    return (
       <header>
       <nav className="navbar navbar-expand-lg bg-light p-2 degradeVerde" id="menu_barra">
        <div className="container-fluid">

        <NavLink className="navbar-brand" to="/Inicio" id="ReciRop">Reci<span className="text-danger">Rop</span></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
<<<<<<< HEAD
              <NavLink className="nav-link active" aria-current="page" to="/Inicio">Incio</NavLink>
=======
              <a className="nav-link active" aria-current="page" href="./index.html">Inicio</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="./donar.html">Donar</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="./Recibir.html">Recibir</a>
            </li>

            <li className="nav-item">
            <Link className="dropdown-item" to="/donacion">Donacion</Link>
>>>>>>> 84f4e11211b4d013c42f3d5d279e3c728796078e
            </li>
            

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Usuario
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to="/login">Iniciar Sesion</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Registro">Registrarse</NavLink></li>
                <li><h1 className="dropdown-divider"></h1></li>
                <li><NavLink className="dropdown-item">Necesitas ayuda?</NavLink></li>
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
