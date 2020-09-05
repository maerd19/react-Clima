import React from "react";
import PropTypes from "prop-types";

const Clima = ({ resultado }) => {
  // Extraer los valores
  const { name, main } = resultado;

  // Evitar fallo en la carga del primer componente
  if (!name) return null;

  // Grados kelvin
  const KELVIN = 273.15;

  return (
    <div className="card-panel white-col-s12">
      <div className="black-text">
        <h2>El clima de {name} es: </h2>
        <p className="temperatura">
          {parseFloat(main.temp - KELVIN, 10).toFixed(2)} <span>&#x2103;</span>
        </p>
        <p>
          Temperatura Maxima:
          {parseFloat(main.temp_max - KELVIN, 10).toFixed(2)}{" "}
          <span>&#x2103;</span>
        </p>
        <p>
          Temperatura Minima
          {parseFloat(main.temp_min - KELVIN, 10).toFixed(2)}{" "}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};

export default Clima;
