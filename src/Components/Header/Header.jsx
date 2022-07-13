import React from "react";
import "./Header.css";

function Header(props) {

  //Opciones para LocaleDateString
  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

// Condicional para no mostrar "invalid Date" en header cuando fechas vacías
  function convertirTiempoHeader(disponibleHeader) {
      if(disponibleHeader !== "") {
        return new Date(disponibleHeader+"T00:00:00").toLocaleDateString("es-PE", opciones);
      } else {
      return ""
    }
  }

  //Condicional para los Precios en Header
  function precioHeader(precioNatural) {
    if (precioNatural === "$") {
      return "$ - Económico"
    } else if (precioNatural === "$$") {
      return "$$ - Confort"
    } else if (precioNatural === "$$$") {
      return "$$$ - Lujoso"
    } else if (precioNatural === "$$$$"){
      return "$$$$ - Magnífico"
    } else {
      return "Todos"
    }
  };

  return (
    <div className="header">
        <div className="texto-encabezado">
            <h1>Búsqueda de Hoteles</h1>
            <h3>Fecha seleccionada: {convertirTiempoHeader(props.desde)} - {convertirTiempoHeader(props.hasta)}</h3>
            <h3>País seleccionado: {props.pais} </h3>
            <h3>Precio seleccionado: {precioHeader(props.precio)}</h3>
            <h3>Tamaño seleccionado: {props.tamaño}</h3>
        </div>
    </div>
  );
}

export default Header;