import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/guardarEnStorage';

export const Crear = ({setListadoState}) => {

    const titulo = "Añadir Película"
    const [pelicula, setPelicula] = useState();

    const conseguirDatosForm = (e) => {
        e.preventDefault();

        let target = e.target;

        let _pelicula = {
            id: new Date().getTime(),
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        setPelicula(_pelicula)

        //Actualizar el estado
        setListadoState(elementos => {
            //Todo lo que habia mas el nuevo 
            return[...elementos,_pelicula]
        })

        //Almacenamiento local
        GuardarEnStorage("pelis",_pelicula);

    }

    return (
        <div className="add">
            <h3 className="title">{titulo}</h3>
            <form onSubmit={conseguirDatosForm}>
                <input type="text" id='titulo' name='titulo' aria-placeholder="Titulo" />
                <textarea id='descripcion' name='descripcion' placeholder="Descripcion"></textarea>
                <input type="submit" id='save' value="Guardar" />
            </form>
        </div>
    )
}
