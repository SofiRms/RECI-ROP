import { BrowserRouter, Route, Routes } from "react-router-dom"

import Iniciosesion from "../pages/Iniciosesion"
import { PublicRoutes } from "./PublicRoutes"
import Inicio from "../pages/Inicio"
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={ 
          <PublicRoutes>
            
              <Iniciosesion/>
           
          </PublicRoutes>
        } />

        <Route path='/*' element={
            <Inicio/>
          // Proteger las rutas privadas
        } />
      </Routes>
    </BrowserRouter>
  )
}