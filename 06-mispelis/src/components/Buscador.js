import React, { useState } from 'react'

export const Buscador = ({listadoState,setListadoState}) => {

    const [busqueda, setBusqueda] = useState('');
    const [noEncontrado,setNoEncontrado] = useState(false);

    const buscarPeli = (e) => {
        // Crear estado y actualizarlo
        setBusqueda(e.target.value);
        
        // Listado completo de peliculas 
        let pelis_encontradas = listadoState.filter(peli => {
            //includes es para enecontrar similaridades entre string
            return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
        })

        // Comprobar si hay un resultado
        if(busqueda.length <= 1 || pelis_encontradas <= 0){
            //Si se reinicio la busqueda o no hay ninguna entrada
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
            setNoEncontrado(true);
        } else {
            setNoEncontrado(false);
        }

        //Actualizar estado de listado principal con lo que se logro filtrar
        setListadoState(pelis_encontradas)
    }

    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            {(noEncontrado && busqueda.length > 1) && (
                <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
            )} 
            
            <form>
                <input type="text" id='search_field' name='busqueda' autoComplete='off' value={busqueda}
                onChange={buscarPeli} />
                <button id='search'>Buscar</button>
            </form>
        </div>
    )
}
