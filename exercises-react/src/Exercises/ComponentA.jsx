import React from "react";
import PropTypes from "prop-types";
import { Contact } from "./ContactTask";
import { useState } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const defaultContact = new Contact(
    "Example",
    "Default description",
    "default",
    false
  );

  return (
    <div>
      Hola
      <h2>Contactos</h2>
      <ComponentB contact={defaultContact} />
    </div>
  );
};

export default ComponentA;
