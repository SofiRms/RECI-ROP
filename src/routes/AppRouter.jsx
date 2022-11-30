import { BrowserRouter, Route, Routes } from "react-router-dom"
import "../App.css"
import { PublicRoutes } from "./PublicRoutes"
<<<<<<< HEAD
import {Iniciosesion, Registro,Inicio} from '../pages/'
import { Donar } from "../pages/Donar"
import { PrivateRoutes } from "./PrivateRoues"
=======
import { PrivateRoutes } from "./PrivateRoues"

import { Iniciosesion, Registro, Inicio, Donaciones } from '../pages/'

>>>>>>> 84f4e11211b4d013c42f3d5d279e3c728796078e
export const AppRouter = () => {
  return (
    <BrowserRouter >
      <Routes>

        <Route path='/login' element={
          <PublicRoutes>
<<<<<<< HEAD
            
              <Iniciosesion/>
               
            </PublicRoutes>
        } />

        <Route path='/Registro' element={
          <Registro/>
        }/> 

        <Route path="/Donar" element={
          <Donar />
        }/>

        <Route path='/*' element={
            <Inicio/>
          // Proteger las rutas privadas
        } />

      <Route path='/*' element={
        <PrivateRoutes>
           {/*<Donar/>*/}
        </PrivateRoutes>
       
      }/>

      </Routes>
    </BrowserRouter>
=======

            <Iniciosesion />

          </PublicRoutes>
        } />

        <Route path='/Registro' element={
          <Registro />
        } />

<Route path='/donacion' element={
          <PrivateRoutes>

            <Donaciones/>

          </PrivateRoutes>
        } />

      <Route path='/*' element={
        <Inicio />
        // Proteger las rutas privadas
      } />
    </Routes>
    </BrowserRouter >
>>>>>>> 84f4e11211b4d013c42f3d5d279e3c728796078e
  )
}