import React from 'react';
import { useNavigate } from 'react-router-dom';
import CiudadSelector from '../components/CiudadSelector'; 
import useHistorial from '../hooks/useHistorial'; 

const Home = () => {
  const navigate = useNavigate();
  const { historial, limpiarHistorial } = useHistorial(); 

  const handleSeleccionarCiudad = (idCiudad) => {
    navigate(`/clima/${idCiudad}`); 
  };

  return (
    <div>
      <h1>Consulta de Clima</h1>

      {}
      <CiudadSelector onSeleccionarCiudad={handleSeleccionarCiudad} />

      {}
      <h2>Historial de Consultas</h2>
      <ul>
        {historial.map((consulta) => (
          <li key={consulta.id}>
            <a href={`/clima/${consulta.id}`}>
              {consulta.ciudad} - {consulta.fecha}
            </a>
          </li>
        ))}
      </ul>

      {}
      <button onClick={limpiarHistorial}>Limpiar Historial</button>
    </div>
  );
};

export default Home;

