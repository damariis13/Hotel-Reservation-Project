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
        filtroPais={filtrarPais}
        hotelsData={hotelsData}
      />
      <Hotels 
        hoteles={hotelsData}
        filtrarLista={filtrarPaisPrecioTamaño}
      />
    </div>
  );
}

export default App;
