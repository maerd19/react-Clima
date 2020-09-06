import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {
  // State de App
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  // controlar consulta
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);

  const { ciudad, pais } = busqueda;

  // Consulta hacia API
  const consultarAPI = async () => {
    if (consultar) {
      const appId = "72100030264e88b7ae62d9e6ce1a8570";
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      // Guardando la respuesta del API en el State
      setResultado(resultado);
      setConsultar(false);

      // Detectar si hubo resultados correctos en la consulta
      if (resultado.cod === "404") setError(true);
    }
  };

  useEffect(() => {
    consultarAPI();
    // Cuando consultar cambie de valor se hara la busqueda hacia la API
  }, [consultar]);

  return (
    <>
      <Header titulo="Clima React App"></Header>

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
                setErrorMain={setError}
              />
            </div>
            <div className="col m6 s12">
              {error ? (
                <Error mensaje="No hay resultados" />
              ) : (
                <Clima resultado={resultado} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
