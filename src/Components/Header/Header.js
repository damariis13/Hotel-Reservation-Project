import React from "react";
import "./Header.css";

function Header(props) {
  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let desdeNatural = new Date(props.desde+"T00:00:00").toLocaleDateString("es-PE", opciones);
  let hastaNatural = new Date(props.hasta+"T00:00:00").toLocaleDateString("es-PE", opciones);

  
  return (
    <div className="header">
        <div className="texto-encabezado">
            <h1>Busqueda de Hoteles</h1>
            <h3>Fecha seleccionada: {desdeNatural} y {hastaNatural}</h3>
            <h3>País seleccionado: {props.pais} </h3>
            <h3>Precio seleccionado: {props.imprimePrecio}</h3>
            <h3>Tamaño seleccionado: {props.tamaño}</h3>
        </div>
    </div>
  );
}

export default Header;