import React from 'react';
import "./EmptyList.css";

const listaVacia = () => {
    return (
        <div className="listaVacia">
            <i className='bx bx-sad'></i>
            <p>Lo sentimos, no hemos encontrado resultados para su búsqueda</p>
        </div>
    )
}

export default listaVacia