import React from 'react'

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

 
    </div>
  )
}

