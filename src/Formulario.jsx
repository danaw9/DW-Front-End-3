import React, { useState } from 'react';
import Card from './Card';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim().length < 3 ) {
      setError('Por favor, verifica que el nombre sea correcto.');
      return;
    }

    if (color.length < 6 ) {
      setError('Por favor, verifica que el color tenga mas de 3 letras.');
      return;
    }

    setError('');

    
    ReactDOM.render(
      <Card nombre={nombre} color={color} />,
      document.getElementById('cardContainer')
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <br />
      <label>
        Color:
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Formulario;