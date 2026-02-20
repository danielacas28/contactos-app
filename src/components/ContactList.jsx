import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import contactsData from "../data/contacts.json";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  const toggleFavorito = (id) => {
    const updated = contacts.map(c => c.id === id ? {...c, favorito: !c.favorito} : c);
    updated.sort((a,b) => b.favorito - a.favorito);
    setContacts(updated);
  };

  const eliminarContacto = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const agregarContacto = (nombre, apellido, telefono) => {
    const nuevo = { id: Date.now(), nombre, apellido, telefono, favorito: false };
    setContacts([...contacts, nuevo]);
  };

  return (
    <div>
      <h2>Lista de Contactos</h2>
      <AgregarContactoForm agregarContacto={agregarContacto} />
      {contacts.map(c => (
        <Contact key={c.id} contact={c} toggleFavorito={toggleFavorito} eliminarContacto={eliminarContacto} />
      ))}
    </div>
  );
}

function AgregarContactoForm({ agregarContacto }) {
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [telefono, setTelefono] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !telefono) return;
    agregarContacto(nombre, apellido, telefono);
    setNombre(""); setApellido(""); setTelefono("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
      <input placeholder="Apellido" value={apellido} onChange={e => setApellido(e.target.value)} />
      <input placeholder="Teléfono" value={telefono} onChange={e => setTelefono(e.target.value)} />
      <button type="submit">Agregar Contacto</button>
    </form>
  );
}