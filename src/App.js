import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
  const [ubicacion, setUbicacion] = useState({});
  return (
    <>
      <Header titulo="Clima React App"></Header>

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario setUbicacion={setUbicacion} />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
