//useCargarCiudades
import { useState, useEffect } from 'react';

const useCargarCiudades = () => {
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    fetch('/datos.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        return response.json();
      })
      .then((data) => {
        setCiudades(data.ciudades); 
      })
      .catch((error) => {
        console.error('Error al cargar las ciudades:', error);
      });
  }, []);  

  return ciudades;  
};

export default useCargarCiudades;
