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
                <i className='bx bx-dollar bx-plomo'></i>
                <i className='bx bx-dollar bx-plomo'></i>
                <i className='bx bx-dollar bx-plomo'></i>
              </React.Fragment>
              )
    } else if (precioCard === 2) {
      return (
              <React.Fragment>
                <i className='bx bx-dollar'></i>
                <i className='bx bx-dollar'></i>
                <i className='bx bx-dollar bx-plomo'></i>
                <i className='bx bx-dollar bx-plomo'></i>
              </React.Fragment>
              )
    } else if (precioCard === 3) {
      return ( 
              <React.Fragment>
              <i className='bx bx-dollar'></i>
              <i className='bx bx-dollar'></i>
              <i className='bx bx-dollar'></i>
              <i className='bx bx-dollar bx-plomo'></i>
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
      <div className="fechas-hotel">
      <h4>Desde {convertirTiempo(props.disponibleDesde)}</h4>
      <h4>Hasta {convertirTiempo(props.disponibleHasta)}</h4>
      </div>
      <div className="pre-hab"><span className="signo-dolar">{precioHotelCard(props.precio)}</span>
      <div className="Habitaciones"><span className="cama-icono"><i className='bx bxs-bed'></i></span>{props.cuartos} Habitaciones</div> </div>
      <button>Reservar</button>
    </div>
  );
}

export default Hotel;