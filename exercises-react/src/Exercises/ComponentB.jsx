import React from "react";
import { useState } from "react";

const ComponentB = (props) => {
  const [connect, setConnect] = useState(props.conectado);

  const change = () => {
    setConnect(!connect);
  };

  return (
    <div className="componenteB">
      <h2>Nombre: {props.name}</h2>
      <h3>Apellido: {props.apellido}</h3>
      <h3>Email: {props.email}</h3>

      <button className="boton" onClick={change}>
        {connect ? "desconectar" : "conectar"}
      </button>
      {connect ? <h4>En linea</h4> : <h4>Contacto no disponible</h4>}
    </div>
  );
};

export default ComponentB;
