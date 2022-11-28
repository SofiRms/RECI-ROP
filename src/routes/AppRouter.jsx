import { BrowserRouter, Route, Routes } from "react-router-dom"

import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoues"

import { Iniciosesion, Registro, Inicio, Donaciones } from '../pages/'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={
          <PublicRoutes>

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
  )
}