import React from "react";
import PropTypes from "prop-types";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const defaultContact = {
    nombre: "Sheyla",
    apellido: "Perez del Valle",
    email: "shey@shey.com",
    conectado: false,
  };

  return (
    <div className="componenteA">
      <h2>Contactos: </h2>
      <ComponentB
        name={defaultContact.nombre}
        apellido={defaultContact.apellido}
        email={defaultContact.email}
        conectado={defaultContact.conectado}
      />
    </div>
  );
};

ComponentA.propTypes = {
  nombre: PropTypes.string,
  apellido: PropTypes.string,
  email: PropTypes.string,
  conectado: PropTypes.bool,
};

export default ComponentA;
