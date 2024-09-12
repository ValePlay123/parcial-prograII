//useHistorial.js
import { useContext } from 'react';
import HistorialContext from '../context/HistorialContext';

const useHistorial = () => {
  const { historial, setHistorial } = useContext(HistorialContext);

  const agregarConsulta = (consulta) => {
    const nuevoHistorial = [...historial, consulta];  
    setHistorial(nuevoHistorial);  
    localStorage.setItem('historialConsultas', JSON.stringify(nuevoHistorial));  
  };

  const limpiarHistorial = () => {
    setHistorial([]);  
    localStorage.removeItem('historialConsultas');  
  };

  return { historial, agregarConsulta, limpiarHistorial };
};

export default useHistorial;
