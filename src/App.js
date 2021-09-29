import React, { useState } from "react";
import "./index.css";
import './App.css';
import Header from "./Components/Header/Header.js";
import Filters from "./Components/Filters/Filters";
import Hotels from "./Components/Hotels/Hotels";
import { hotelsData } from "./hotelsData";

function App() {
  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");
  const [pais, setPais] = useState("Todos");
  const [tamaño, setTamaño] = useState("Todos");
  const [precio, setPrecio] = useState("Todos");

// Convertir fecha
let DS_desde = new Date(desde+"T00:00:00");
let DS_hasta = new Date(hasta+"T00:00:00");

//Convertir a UNIX(milisegundos)
let desdeUNIX = DS_desde.getTime();
let hastaUNIX = DS_hasta.getTime();

// Filtrar Por fechas
let hotelesFiltradosFecha;

  if (desde !== "" && hasta !== "") {
     hotelesFiltradosFecha = hotelsData.filter((hotel) => {
      if(
        hotel.availabilityFrom <= desdeUNIX && 
        hotel.availabilityTo >= hastaUNIX
      ) {
        return true;
      } else {
        return false;
      }
    });
  } else {
    hotelesFiltradosFecha = hotelsData;
  };


// Filtrar Hoteles por Pais
  const filtrarFechaPais = hotelesFiltradosFecha.filter((hotel) => {
    if (pais === "Todos") {
      return true;
    } else {
      return hotel.country.toUpperCase() === pais.toUpperCase();
    }
  });

  const filtrarFechaPaisPrecio = filtrarFechaPais.filter((hotel) => {
    if(precio === "Todos") {
      return true;
    } else {
      return hotel.price === precio.length; 
    }
  })

  const filtrarFechaPaisPrecioTamaño = filtrarFechaPaisPrecio.filter((hotel) => {
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
    return false;
  });


  return (
    <div className="App">
      <Header 
      desde={desde}
      hasta={hasta}
      pais={pais}
      precio={precio} 
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
        hotelsData={hotelsData}
      />
      <Hotels 
        hoteles={hotelsData}
        filtrarLista={filtrarFechaPaisPrecioTamaño}
      />
    </div>
  );
}

export default App;
