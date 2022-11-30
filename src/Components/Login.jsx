
<<<<<<< HEAD
export const Login=()=> {
  return (
    <div className='promo_card'>
      <form action="/my-handling-form-page" method="post" className='form '>
        <ul>
          <li>
            <label htmlFor="name" className='labelname'>Nombre:</label>
            <input className='form-control' type="text" id="name" name="user_name"></input>
          </li>
          
          <li>
            <label htmlFor="password">Contraseña</label>
            <input type="password" className='form-control'></input>
          </li>
        </ul>
      </form>
=======

import React from "react";
import { useState } from "react";
import { diccionario} from "../auxs/library";

export const Login = () => {
  
  const handlechange=({target})=>{
    setFormData({
      ...formData,[target.name]: target.value
    })
    console.log(formData)
  }
 const postuser=async()=>{
    e.preventDefault();
>>>>>>> 84f4e11211b4d013c42f3d5d279e3c728796078e

  const userlogged = await diccionario.iniciarSesion(formData.email, formData.password)

    }
 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <div className="promo_card">
        <form action="/my-handling-form-page" onSubmit={postuser}>
          <ul>
            <li>
              <label htmlFor="name" className="labelname">
                email:
              </label>
              <div>
                <input
                  className="inputname"
                  type="email"
                  id="name"
                  name="email"
                  onChange={handlechange}
                ></input>
              </div>
            </li>

            <li>
              <label htmlFor="password">Contraseña</label>
              <div>
                <input
                  type="password"
                  className="inputpassword"
                  name="password"
                  onChange={handlechange}
                ></input>
              </div>
            </li>
          </ul>
          <button type="submit" >enviar</button>
        </form>
      </div>
    </>
  );
};
