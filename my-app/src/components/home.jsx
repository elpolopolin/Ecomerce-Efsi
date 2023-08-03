import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
  const [personaId, setPersonaId] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    // Verificar si el ID es un número antes de redirigir
    if (!isNaN(personaId)) {
      navigate(`/persona/${personaId}`);
    } else {
      alert('Ingresa un ID válido (número)');
    }
  };

  const handleInputChange = (event) => {
    setPersonaId(event.target.value);
  };

  return (
    <>
      <h1 className="">Home</h1>
      <form onSubmit={handleSearch}>
        <input type="number" value={personaId} onChange={handleInputChange} />
        <button type="submit">Buscar Persona</button>
      </form>
    </>
  );
}

export default Home;