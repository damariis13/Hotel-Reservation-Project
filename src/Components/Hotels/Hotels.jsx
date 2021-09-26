import React from "react";
import "./Hotels.css";
import Hotel from "../Hotel/Hotel";


function Hotels(props) {

  const definePrecio = (e) => {
    if (e === "1") {
      return "$ - Económico"
    } else if (e === "2") {
      return "$$ - Confort"
    } else if (e === "3") {
      return "$$$ - Lujoso"
    } else {
      return "$$$$ - Magnífico"
    }
  }

  return (
    <div className="hoteles">
      <div className="contenedor-hoteles">
      {props.filtrarLista.map((hotel) => {
        return (
          <Hotel
            imagen={hotel.photo}
            nombre={hotel.name}
            pais={hotel.country}
            ciudad={hotel.city}
            descripcion={hotel.description}
            disponibleDesde={hotel.availabilityFrom}
            disponibleHasta={hotel.availabilityTo}
            cuartos={hotel.rooms}
            precio={hotel.price}
            definePrecio = {definePrecio(hotel.price)}
          />
        );
      })}
      </div>
    </div>
  );
}

export default Hotels;