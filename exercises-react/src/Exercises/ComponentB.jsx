import React from "react";
import PropTypes from "prop-types";
import { Contact } from "./ContactTask";
import { useState } from "react";

const ComponentB = ({ contact }) => {
  const [connect, setConnect] = useState(true);
  const change = () => {
    console.log("hola");
    setConnect(!connect);
  };

  return (
    <div>
      <h2>Name: {contact.name}</h2>
      <h3>Surname: {contact.surname}</h3>
      <h3>Email: {contact.email}</h3>
      <button onClick={change}>Connected:</button>
      {connect ? "Contacto en linea" : "Contacto No Disponible"}
    </div>
  );
};

ComponentB.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponentB;
