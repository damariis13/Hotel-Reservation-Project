import React from "react";
import "./Hotel.css";



function Hotel(props) {
  //Opciones para LocaleDateString
  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  //Funcion para mostrar fecha a natural
  function convertirTiempo(disponible) {
    return new Date(disponible).toLocaleDateString("es-PE", opciones);
  }

  function precioHotelCard(precioCard) {
    if (precioCard === 1) {
      return (
              <React.Fragment>
                <i className='bx bx-dollar' ></i>
              </React.Fragment>
              )
    } else if (precioCard === 2) {
      return (

              <React.Fragment>
                <i className='bx bx-dollar' ></i>
                <i className='bx bx-dollar' ></i>
              </React.Fragment>
              )
    } else if (precioCard === 3) {
      return ( 
        <React.Fragment>
        <i className='bx bx-dollar' ></i>
        <i className='bx bx-dollar' ></i>
        <i className='bx bx-dollar' ></i>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
        <i className='bx bx-dollar' ></i>
        <i className='bx bx-dollar' ></i>
        <i className='bx bx-dollar' ></i>
        <i className='bx bx-dollar' ></i>
        </React.Fragment>

      )
    } 
  };

  return (
    <div className="hotel">
      <img width="100%" src={props.imagen} alt={props.nombre} />
      <h1>{props.nombre}</h1>
      <h3>{props.ciudad}, {props.pais}</h3>
      <p className="texto">{props.descripcion}</p>
      <h4>Desde {convertirTiempo(props.disponibleDesde)}</h4>
      <h4>Hasta {convertirTiempo(props.disponibleHasta)}</h4>
      <div className="pre-hab">{precioHotelCard(props.precio)}
      <span className="Habitaciones"><i className='bx bxs-bed'></i><div className="linea"></div>{props.cuartos} Habitaciones</span> </div>
      <button>Reservar</button>
    </div>
  );
}

export default Hotel;