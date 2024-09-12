import React, { useState, useEffect } from 'react';

const CiudadSelector = ({ onSeleccionarCiudad }) => {
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    fetch('/datos.json')
      .then(response => response.json())
      .then(data => setCiudades(data.ciudades))
      .catch(error => console.error('Error al cargar el JSON:', error));
  }, []);

  const handleChange = (event) => {
    const idCiudad = event.target.value;
    onSeleccionarCiudad(idCiudad); 
  };

  return (
    <select onChange={handleChange}>
      <option value="">Selecciona una ciudad</option>
      {ciudades.map((ciudad) => (
        <option key={ciudad.id} value={ciudad.id}>
          {ciudad.nombre}
        </option>
      ))}
    </select>
  );
};

export default CiudadSelector;

