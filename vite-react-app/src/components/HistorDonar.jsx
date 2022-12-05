import React from "react";



export const HistorDonar = () =>{


return (
  
     <div>
        
        <div  id="container form " className="container"><br />
            <div className="text-center">
                <label htmlFor="#container" className="form-control blankito"><p className="h4"> Historial de donaciones</p></label>
            </div>
            <div className="card text-bg-dark mb-3">
                <div className="row g-0">
                 <div className="col-md-4">
                    <img src="/donaciones.jpeg" className="img-fluid rounded-start" alt="..." />
                 </div>
                 <div className="col-md-8">
                  <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
       </div>
     </div> 
   
)
}