import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Mainbody from '../componentes/mainbody'
import Registro from '../paginas/Registro'
import Iniciosesion from '../paginas/Iniciosesion'



const Rutas=()=> {
  return (
        <Router>

            <Routes>
                <Route path='/' element= {<Mainbody/>}/>
                <Route path='/Registro' element= {<Registro/>}/>
                <Route path='/Iniciosesion' element={<Iniciosesion/>}/>
            </Routes>

        </Router>
  )
}

export default Rutas
