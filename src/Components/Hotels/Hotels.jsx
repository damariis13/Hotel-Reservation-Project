import React from "react";
import "./Hotels.css";
import Hotel from "../Hotel/Hotel";


function Hotels(props) {

  let hotelPrecio = () => {
  {props.filtrarLista.map((hotel)=> {
    if (hotel.price === "1") {
      return "$"
    } else if (hotel.price === "2") {
      return "$$"
    } else if (hotel.price === "3") {
      return "$$$"
    } else {
      return "$$$$"
    }
   })}
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
            precio={hotelPrecio}
          />
        );
      })}
      </div>
    </div>
  );
}

export default Hotels;