import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Formulario = ({ busqueda, setBusqueda, setConsultar, setErrorMain }) => {
  const [error, setError] = useState(false);

  // Estraer ciudad y pais
  const { ciudad, pais } = busqueda;

  // Funcion que coloca los elementos en el state
  const handleChange = (e) => {
    // Eliminar mensaje de error
    setError(false);

    // Eliminar mensaje de error del componente Principal
    setErrorMain(false);

    // Actualizar el State
    setBusqueda({ ...busqueda, [e.target.name]: e.target.value });
  };

  // Cuando el usuario da submit al form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar
    if (ciudad.trim() === "" || pais.trim() === "") {
      setError(true);
      return;
    }

    setConsultar(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="Todos los campos son obligatorios." /> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad: </label>
      </div>

      <div className="input-field col s12">
        <select name="pais" id="pais" value={pais} onChange={handleChange}>
          <option value="">-- Seleccione un pais --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">Pais: </label>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar Clima"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

Formulario.propTypes = {
  busqueda: PropTypes.object.isRequired,
  setBusqueda: PropTypes.func.isRequired,
  setConsultar: PropTypes.func.isRequired,
  setErrorMain: PropTypes.func.isRequired,
};

export default Formulario;
