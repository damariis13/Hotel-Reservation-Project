import React, { useState } from "react";
import "./index.css";
import './App.css';
import Header from "./Components/Header/Header.js";
import Filters from "./Components/Filters/Filters";
import Hotels from "./Components/Hotels/Hotels";
import { hotelsData } from "./hotelsData";

function App() {
  const [desde, setDesde] = useState(null);
  const [hasta, setHasta] = useState(null);
  const [pais, setPais] = useState("Todos");
  const [tamaño, setTamaño] = useState("Todos");
  const [precio, setPrecio] = useState("Todos");

  // Opciones para LocaleDateString
const opciones = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

// Convertir Date Strings a fechas naturales
let fecha1UNIX = new Date(hotelsData.availabilityFrom+"T00:00:00").getTime();

let desdeNaturalHotel = new Date(hotelsData.availabilityFrom + "T00:00:00").toLocaleDateString("es-PE", opciones);
let hastaNaturalHotel = new Date(hotelsData.availabilityTo*1000 + "T00:00:00").toLocaleDateString("es-PE", opciones);



// Filtrar Hoteles por Pais
  const filtrarPais = hotelsData.filter((hotel) => {
    if (pais === "Todos") {
      return true;
    } else {
      return hotel.country.toUpperCase() === pais.toUpperCase();
    }
  });

  const filtrarPaisPrecio = filtrarPais.filter((hotel) => {
    if(precio === "Todos") {
      return true;
    } else {
      return hotel.price === precio.length;
    }
  })

  const filtrarPaisPrecioTamaño = filtrarPaisPrecio.filter((hotel) => {
    if(tamaño === "Todos") {
      return true
    } else {
      if (tamaño === "Pequeño") {
        return hotel.rooms <= 10;
      } else if (tamaño === "Mediano") {
        return hotel.rooms > 10 && hotel.rooms < 20
      } else if (tamaño === "Grande"){
        return hotel.rooms >= 20;
      } 
    }
  });

  let descripcionPrecio = () => {
    if (precio === "$") {
      return "$ - Hotel Económico"
    } else if (precio === "$$") {
      return "$$ - Hotel Confort"
    } else if (precio === "$$$") {
      return "$$$ - Hotel Lujoso"
    } else if (precio === "$$$$") {
      return "$$$$ - Hotel Magnífico"
    } else {
      return precio
    }
  }

  let descripcionTamaño = () => {
    if (tamaño <= 10) {
      return "Pequeño"
    } else if (tamaño > 10 && tamaño < 20) {
      return "Mediano"
    } else if (tamaño >= 20) {
      return "Grande"
    }
  }


  return (
    <div className="App">
      <Header 
      desde={desde}
      hasta={hasta}
      pais={pais} 
      precio={descripcionPrecio}
      // precio = {precio}
      tamaño={tamaño}
      />
      <Filters
        setDesde={setDesde}
        setHasta={setHasta}
        desde={desde}
        hasta={hasta}
        precio={precio}
        setPrecio={setPrecio}
        pais={pais}
        setPais={setPais}
        tamaño={tamaño}
        setTamaño={setTamaño}
        filtroPais={filtrarPais}
        // hotelsFiltered={hotelsFiltered}
        // setHotelsFiltered={setHotelsFiltered}
        hotelsData={hotelsData}
      />
      <Hotels 
        Desde = {fecha1UNIX}
        hoteles={hotelsData} 
        // listaHoteles={hotelsFiltered} 
        filtrarLista={filtrarPaisPrecioTamaño}
      />
    </div>
  );
}

export default App;
