import React from "react";
import { json, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { isUndefined } from "../auxs/ourLibrary";
import axios from "axios";

export const InitDonar = () => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token')
        }
    }

    const [opcion, setOpcion] = useState({
        typeDonacion: "",
        description: ""
    })

    const { typeDonacion, description } = opcion


    const handleInputChange = ({ target }) => {
        setOpcion({
            ...opcion,
            [target.name]: target.value
        })
    };


    useEffect(() => {
        console.log(opcion)
        const rop = document.getElementById("idSiRopa");
        const matre = document.getElementById("matre");
        const siO = document.getElementById("siOtro");
        (opcion.typef == "Ropa") ? rop.classList.replace("ocultar", "mostrar") : rop.classList.replace("mostrar", "ocultar");
        (opcion.typef == "Material Reciclable") ? matre.classList.replace("ocultar", "mostrar") : matre.classList.replace("mostrar", "ocultar");
        (opcion.typef == "Otro") ? siO.classList.replace("ocultar", "mostrar") : siO.classList.replace("mostrar", "ocultar");
    }, [opcion])

    const handleSubmit = (e) => {
        e.preventDefault();
        opcion.typeDonacion = `${opcion.typef} ${opcion.para} ${opcion.de}`;
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzhlMmJmOWM4MzU2MGMwMDQ5Y2I4ZDgiLCJpYXQiOjE2NzAyNjc4NzcsImV4cCI6MTY3MDI4NTg3N30.2W0nKKswAzQDuZOMpjEuR2Qh0c_QxIgEPRwxwEIFh7g");
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
            "typeDonacion":opcion.typeDonacion,
            "description": opcion.description,
            "direction": "Paraguay"
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:4000/donacion", requestOptions)
        .then(responses => responses.json())
        .then(responseJSON => console.log(responseJSON))
    };

    return (
        <>
            <br />
            <div className="container text-center">
                <p>
                    <NavLink id="idButton" className="btn btn-outline-danger" data-bs-toggle="collapse" to="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <strong>Click aqui para Iniciar Donacion</strong>
                    </NavLink>
                </p>
            </div>
            <div className="collapse " id="collapseExample">
                <div className="card card-body blankito">
                    <form className="form " onSubmit={handleSubmit}>
                        <div>
                            <span className="h4 form-label text-center ">Elija  el tipo de producto que desea donar</span>
                            <select className={`form-select`} id="siDonar" name="typef" onChange={handleInputChange}>
                                <option defaultValue={""}>Selecciona</option>
                                <option value="Ropa" >Ropa</option>
                                <option value="Material Reciclable">Material Reciclable</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div><hr />
                        <div id="idSiRopa" className="ocultar">
                            <span className="h5 form-label text-center">Tipo de Ropa</span>
                            <select name="para" id="siRopa" className={`form-control `} onChange={handleInputChange}>
                                <option defaultValue={""}>Seleccione</option>
                                <option value="para hombre">Para Hombre</option>
                                <option value="para mujer">Para Mujer</option>
                                <option value="para unisex">Unisex</option>
                                <option value="para bebe">Para Bebe</option>
                                <option value="para niño">Para Niño</option>
                                <option value="para niña">Para Niña</option>
                            </select><hr />
                        </div><br />

                        <div id="matre" className="ocultar">
                            <span className="h5 form-label text-center">Tipo de Material</span>
                            <select id="tipo" className="form-select" name="de" onChange={handleInputChange}>
                                <option defaultValue={""}>Seleccione</option>
                                <option value="de tela">Telas</option>
                                <option value="de madera">Maderas</option>
                                <option value="de plastico">Plasticos</option>
                                <option value="de carton">Carton</option>
                            </select><hr />
                        </div>
                        <div id="siOtro" className="h5 ocultar"><p>Por favor, describa el ojeto a donar </p><hr /></div>

                        <div>
                            <label htmlFor="dess" className="form-label">Descripcion</label>
                            <textarea id="dess" className="form-control" name="description" onChange={handleInputChange} value={description}>

                            </textarea>

                        </div>

                        <div>
                            <button type="submit" className="btn btn-outline-danger">
                                Listo
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}