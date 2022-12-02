import React from "react";
import { NavLink } from "react-router-dom";

export const InitDonar = () =>{


    return (
        <> 
        <hr />
            <p>
                <NavLink className="btn degradeMVerde" data-bs-toggle="collapse" to="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                   <strong>Iniciar Donacion</strong>
                </NavLink>
            </p>
            <div className="collapse " id="collapseExample">
                <div className="card card-body blankito">
                  <form className="form ">
                    <div>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </div>
                    <div>
                        <textarea className="form-control"></textarea>
                        
                    </div>
                  </form>
                </div>
            </div>
        </>
    )
}