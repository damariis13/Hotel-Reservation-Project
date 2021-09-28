import React from "react";
import "./Hotels.css";
import Hotel from "../Hotel/Hotel";


function Hotels(props) {

  return (
    <div className="hoteles">
      <div className="contenedor-hoteles">
      {props.filtrarLista.map((hotel) => {
        return (
          <Hotel
            key={hotel.slug}
            imagen={hotel.photo}
            nombre={hotel.name}
            pais={hotel.country}
            ciudad={hotel.city}
            descripcion={hotel.description}
            disponibleDesde={hotel.availabilityFrom}
            disponibleHasta={hotel.availabilityTo}
            cuartos={hotel.rooms}
            precio={hotel.price}
          />
        );
      })}
      </div>
    </div>
  );
}

export default Hotels;