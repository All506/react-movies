import React, { Fragment, useEffect, useState } from 'react'

export const Listado = ({listadoState,setListadoState}) => {

  

  useEffect(() => {
    conseguirPeliculas();
  }, [])

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas)
    return peliculas;
  }

  const borrarPelicula = (id) => {
    //Conseguir peliculas almacenadas
    let _peliculas = conseguirPeliculas();
    //Filtrar peliculas para eliminar la que no queremos con filter
    let peliculas_nuevas = _peliculas.filter(_peliculas => _peliculas.id !== parseInt(id));
    //Actualizar estado del listado
    setListadoState(peliculas_nuevas);
    //Actualizar los datos en localStorage
    localStorage.setItem("pelis",JSON.stringify(peliculas_nuevas));
  }

  return (
    <Fragment>
      {listadoState != null ?
       listadoState.map(peli => {
        return (
          <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="descripcion">{peli.descripcion}</p>

            <button className="edit">Editar</button>
            <button className="delete" onClick={ () => borrarPelicula(peli.id)}>Borrar</button>
          </article>
        );
      })
    :
      <h2>No hay peliculas para mostrar</h2>
    }


    </Fragment>
  )
}

export default Listado