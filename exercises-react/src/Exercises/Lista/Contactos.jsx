import React, { useState } from "react";

const Contactos = () => {
  const [lista, setLista] = useState([
    {
      nombre: "Carla",
      telefono: "677338890",
      email: "carla@gmail.com",
      conectado: false,
    },
    {
      nombre: "Alberto",
      telefono: "644453652",
      email: "alberto@gmail.com",
      conectado: false,
    },
  ]);

  const [nuevoContacto, setNuevoContacto] = useState({
    nombre: "",
    telefono: "",
    email: "",
    conectado: false,
  });

  const [mostrarContactos, setMostrarContactos] = useState(true);

  const agregarContacto = () => {
    setLista((prevLista) => [...prevLista, nuevoContacto]);
    setNuevoContacto({
      nombre: "",
      telefono: "",
      email: "",
      conectado: false,
    });
  };

  const handleInputChange = (e) => {
    console.log("%cEvento:", `background:green`, e);
    const { name, value } = e.target;
    setNuevoContacto((prevNuevoContacto) => ({
      ...prevNuevoContacto,
      [name]: value,
    }));
  };
  const eliminarContacto = (indice) => {
    setLista((prevLista) => {
      const nuevaLista = [...prevLista];
      nuevaLista.splice(indice, 1);
      return nuevaLista;
    });
  };

  const cambiarEstadoConectado = (indice) => {
    setLista((prevLista) => {
      const nuevaLista = prevLista.map((elemento, i) => {
        if (i === indice) {
          return {
            ...elemento,
            conectado: !elemento.conectado,
          };
        }
        return elemento;
      });
      return nuevaLista;
    });
  };

  const toggleMostrarContactos = () => {
    setMostrarContactos((prevMostrarContactos) => !prevMostrarContactos);
  };

  return (
    <>
      <h2>Contactos:</h2>
      <button onClick={toggleMostrarContactos}>
        {mostrarContactos ? "Ocultar Contactos" : "Mostrar Contactos"}
      </button>
      {mostrarContactos &&
        lista.map((lis, index) => (
          <ul className="lista" key={index}>
            <li>{lis.nombre}</li>
            <li>{lis.telefono}</li>
            <li>{lis.email}</li>
            <button onClick={() => eliminarContacto(index)}>Eliminar</button>
            <button onClick={() => cambiarEstadoConectado(index)}>
              {lis.conectado ? "Desconectar" : "Conectar"}
            </button>
            {lis.conectado ? (
              <p style={{ color: "green" }}>Conectado</p>
            ) : (
              <p style={{ color: "red" }}>Desconectado</p>
            )}
          </ul>
        ))}
      <h2>Agregar Nuevo Contacto:</h2>
      <form>
        <input
          type="text"
          name="nombre"
          value={nuevoContacto.nombre}
          onChange={handleInputChange}
          placeholder="Nombre"
        />
        <br />
        <input
          type="text"
          name="telefono"
          value={nuevoContacto.telefono}
          onChange={handleInputChange}
          placeholder="Teléfono"
        />
        <br />
        <input
          type="text"
          name="email"
          value={nuevoContacto.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <br />
        <button type="button" onClick={agregarContacto}>
          Agregar
        </button>
      </form>
    </>
  );
};

export default Contactos;
