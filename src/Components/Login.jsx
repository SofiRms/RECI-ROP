import React from "react";
import { useState } from "react";

export const Login = () => {
  const [formData, setFormData] = useState({username: "", password: "" });
  const options = {
    method: "POST",
    Headers: {
      "Content-type": "application/json",
    },
  };
  const handlechange=({target})=>{
    setFormData({
      ...formData,[target.name]: target.value
    })
    }
  const handlesubmit = async (e) => {
    e.preventDefault();

    options.body = JSON.stringify({username, password });
    const resp = await fetch("localhost:4024/user", options);

    if (!resp.ok)
      alert("Hubo un error en las casillas verifique e intenlo de nuevo");

    const data = await resp.json();
    console.log(data);

    localStorage.setItem("token", JSON.stringify(data));
  };
  console.log(formData);
  return (
    <>
      <div className="promo_card">
        <form action="/my-handling-form-page" onSubmit={handlesubmit}>
          <ul>
            <li>
              <label htmlFor="name" className="labelname">
                Nombre:
              </label>
              <div>
                <input
                  className="inputname"
                  type="text"
                  id="name"
                  name="user_name"
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
          <button type="submit">enviar</button>
        </form>
      </div>
    </>
  );
};
