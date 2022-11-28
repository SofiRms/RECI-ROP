import React from "react";
import { useState } from "react";
import { diccionario } from "../auxs/library";
export const Singin = () => {

  
  const handlechange=({target})=>{
    setFormData({
      ...formData,[target.name]: target.value
    })
    console.log(formData)
  }
 const postuser=async(e)=>{
  
   
    e.preventDefault();

  const crear= await diccionario.createUser()
  
    crear(formData.username, formData.email, formData.password)
    }
 
  /*const postUser = async () => {
    

    console.log(crear)
    //handlechange()

  }*/
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });




  // const options = {
  //   method: "POST",
  //   Headers: {
  //     "Content-type": "application/json",
  //   },
  // };
  /*const handlesubmit = async (e) => {
    e.preventDefault();

    options.body = JSON.stringify({username, email, password });
    const resp = await fetch("localhost:4024/user", options);

    if (!resp.ok) console.log("Hubo un error,verifique e intente de nuevo");

    const data = await resp.json();
    console.log(data);

   // localStorage.setItem("token", JSON.stringify(data));
  };
  console.log(formData);*/
  return (
    <div className="container">
      <form action="/my-handling-form-page" onSubmit={postuser}>
        <ul>
          <li>
            <label htmlFor="name">Nombre:</label>
           <div> <input
              type="text"
              id="name"
              name="username"
              onChange={handlechange}
              
            ></input>
            </div>
          </li>
          <li>
            <label htmlFor="mail">Correo electrónico:</label>
           <div> 
            <input
              type="email"
              id="mail"
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
              className="password"
              name="password"
              onChange={handlechange}
            >
            </input>
            </div>
          </li>
        </ul>
        <button type="submit" className="btn btn-outline-dark">
          enviar
        </button>
      </form>
    </div>
  );
};




