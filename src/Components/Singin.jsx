import React from 'react'

export const Singin=()=> {
  
  return (
    <div className='container'>
    <form action="/my-handling-form-page" method="post">
    <ul>
     <li>
       <label htmlFor="name">Nombre:</label>
       <input type="text" id="name" name="user_name"></input>
     </li>
     <li>
       <label htmlFor="password">Contraseña</label>
       <input type="password" className='password'></input>
     </li>
     <li>
       <label htmlFor="mail">Correo electrónico:</label>
       <input type="email" id="mail" name="user_mail"></input>
     </li>
    </ul>
   </form>
   </div>
  )
}



