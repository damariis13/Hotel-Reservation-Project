import React from "react";
import "./Filters.css";

function Filters(props) {
  const manejarClick = () => {
    props.setDesde("");
    props.setHasta("");
    props.setPais("Todos");
    props.setTamaño("Todos");
    props.setPrecio("Todos");
    props.setImprimePrecio("Todos");
  };

  const manejarCambioDesde = (evento) => {
    props.setDesde(evento.target.value);
  };

  const manejarCambioHasta = (evento) => {
    props.setHasta(evento.target.value);  
};

  const manejarCambioPais = (evento) => {
    props.setPais(evento.target.value);
  };

  const manejarCambioTamaño = (evento) => {
    props.setTamaño(evento.target.value);
  };

  const manejarCambioPrecio = (evento) => {
    props.setPrecio(evento.target.value)
    props.setImprimePrecio(
      () => {
        if (evento.target.value === "1") {
          return "$ - Económico"
        } else if (evento.target.value === "2") {
          return "$$ - Confort"
        } else if (evento.target.value === "3") {
          return "$$$ - Lujoso"
        } else {
          return "$$$$ - Magnífico"
        }
      }
      );
  }

  return (
    <div className="filtros">
        {/*Filtro Fecha*/}
      <div className="filtros-lista">
        <div className="fecha desde">
        <i className='bx bxs-calendar'></i>
          <span>Desde: </span>
          <input value={props.desde} type="date" onChange={manejarCambioDesde} />
        </div>
        <div className="fecha hasta">
          <span>Hasta: </span>
          <input value={props.hasta} type="date" onChange={manejarCambioHasta} />
        </div>
        {/* filtro pais */}
        <div className="contenedor-select">
            <i className='bx bxs-map'></i>
            <select value={props.pais} onChange={manejarCambioPais}>
                <option value="Todos">Todos</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
                <option value="Uruguay">Uruguay</option>
            </select>
        </div>
        {/* filtro precio */}
        <div className="contenedor-select">
            <i className='bx bx-dollar' ></i>
            <select value={props.precio} onChange={manejarCambioPrecio}>
                <option value="Todos">Todos</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
            </select>
        </div>
        {/* filtro tamaño */}
        <div className="contenedor-select">
            <i className='bx bxs-building'></i>
            <select value={props.tamaño} onChange={manejarCambioTamaño}>
                <option value="Todos">Todos</option>
                <option value="Pequeño">Pequeño</option>
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
            </select>
        </div>
        {/* Boton Limpiar */}
        <button onClick={manejarClick}>
            <i className='bx bxs-trash'></i>
             Limpiar
        </button>
      </div>
    </div>
  );
}

export default Filters;