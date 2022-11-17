import React from 'react'

export const Login=()=> {
  return (
    <div className='promo_card'>
    <form action="/my-handling-form-page" method="post">
 <ul>
  <li>
    <label htmlFor="name" className='labelname'>Nombre:</label>
    <input className='inputname' type="text" id="name" name="user_name"></input>
  </li>
  
 <li>
  <label htmlFor="password">Contraseña</label>
  <input type="password" className='inputpassword'></input>
 </li>
 </ul>
</form>

 
    </div>
  )
}

