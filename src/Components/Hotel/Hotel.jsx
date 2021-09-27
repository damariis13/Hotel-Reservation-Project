import React from "react";
import "./Hotel.css";



function Hotel(props) {
  return (
    <div className="hotel">
      <img width="100%" src={props.imagen} alt={props.nombre} />
      <h1>{props.nombre}</h1>
      <h3>{props.ciudad}, {props.pais}</h3>
      <p className="texto">{props.descripcion}</p>
      <h4>Desde {props.fecha1UNIX}</h4>
      <h4>Hasta {props.disponibleHasta}</h4>
      <p className="pre-hab">{props.precio}
      <span className="Habitaciones"><i class='bx bxs-bed'></i><div className="linea"></div>{props.cuartos} Habitaciones</span> </p>
      <button>Reservar</button>
    </div>
  );
}

export default Hotel;