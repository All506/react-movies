export const GuardarEnStorage = (clave,elemento) => {

    //Conseguir elementos actuales
    let elementos = JSON.parse(localStorage.getItem(clave));

    //Es array? Sino crear desde 0
    if(Array.isArray(elementos)){
        elementos.push(elemento);
    } else {
        //crear un array con la nueva pelicula
        elementos = [elemento];
    }

    //Guardar en el local storage
    localStorage.setItem(clave,JSON.stringify(elementos));
    console.log(elementos)
    //Devolver objeto guardado
    return elemento;
}
