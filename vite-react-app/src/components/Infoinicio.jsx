import React from 'react';
export const Infoinicio = () => {
    return <div>
        
     <section className="container-fluid text-warning">
    <div className="row w-75 mx-auto mb-1 servicio_fila">

        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono_wrap">
            <img src="/donaciones.jpeg" alt="donaciones" width="180" height="175"/>
            <div>
                <h3 className="fs-4 mt-3 px-4 pb-0 text-light">Donaciones</h3>
                <p className="px-2 mx-3">Nuestra empresa recolecta donativos para brindar una ayuda a quien lo necesite. 
                    Esto gracias a los donativos de personas y/o empresas.
                </p>
            </div>
        </div>
        

        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono_wrap">
            <img src="/publicidad - copia.jpeg" alt="publicidad" width="180" height="175"/>
            <div>
                <h3 className="fs-4 mt-3 px-4 pb-1 text-light">Publicidad</h3>
                <p className="px-2 mx-3">Nuestra empresa tambien brinda propaganda a las empresas que aporten a nuestra causa. Buscamos el beneficio mutuo para todo publico</p>
            </div>
        </div>

    </div>
</section>
<section>
    <div className="w-75 m-auto text-center " id="equipo">
        <h1 className="mb-5 fs-2">Equipo pequeño <span className="text-danger">con Grandes Resultados</span>
        </h1>
        <div className="mt-5 mb-5 w-50 d-block mx-auto " >
          <p className="fs-4">
            Buscamos una <span className="text-danger">solución</span> para todos
        </p>
          <img className="img-fluid " src="/public/publicidad - copia.jpeg" alt="grupo"/>
        </div>
    </div>
    
</section>
    </div>;
}

