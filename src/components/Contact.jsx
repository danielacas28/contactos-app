import React from "react";

export default function Contact({ contact, toggleFavorito, eliminarContacto }) {
  return (
    <div style={{
      border: "1px solid black",
      padding: "10px",
      margin: "5px",
      backgroundColor: contact.favorito ? "#F29CA3" : "white"
    }}>
      <h3>{contact.nombre} {contact.apellido}</h3>
      <p>Teléfono: {contact.telefono}</p>
      <button onClick={() => toggleFavorito(contact.id)}>
        {contact.favorito ? "Quitar favorito" : "Agregar favorito"}
      </button>
      <button onClick={() => eliminarContacto(contact.id)}>Eliminar</button>
    </div>
  );
}