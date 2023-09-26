import React from 'react'

export const Editar = ({peli,conseguirPeliculas,setEditar,setListadoState}) => {

    const titulo_componente = "Editar pelicula";

    const guardarEdicion = (e, id) => {
        e.preventDefault();

        //Conseguir el target del evento / el formulario como tal
        let target = e.target;
        
        //Buscar el indice del objeto de la pelicula a actualizar
        const peliculas_almacenadas = conseguirPeliculas();

        const indice = peliculas_almacenadas.findIndex(peli => peli.id === id);

        //Crear un objeto con el indice almacenado
        let pelicula_actualizada = {
          indice,
          titulo: target.titulo.value,
          descripcion: target.descripcion.value
        };

        //Actualizar el elemento con el indice
        peliculas_almacenadas[indice] = pelicula_actualizada;

        //Guardar el nuevo array en el localstorage y actualizar estados

        localStorage.setItem("pelis",JSON.stringify(peliculas_almacenadas));

        setListadoState(peliculas_almacenadas);
        setEditar(0);

    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}</h3>
        <form onSubmit={e => guardarEdicion(e,peli.id)}>
            <input type="text" name='titulo' className='titulo_editado' defaultValue={peli.titulo}/>
            <textarea name='descripcion' defaultValue={peli.descripcion}/>

            <input type='submit' className='editar' value="Actualizar"/>
        </form>
    </div>
  )
}
