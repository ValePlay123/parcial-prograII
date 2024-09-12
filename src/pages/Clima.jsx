//Clima.jsx
import { useState } from 'react';
import ClimaDetalle from '../components/ClimaDetalle';

const Clima = () => {
  const [clima, setClima] = useState(null);

  return (
    <div>
      <h1>Clima de la Ciudad</h1>
      {}
      {clima ? <ClimaDetalle clima={clima} /> : <p>Cargando...</p>}
      {}
      
    </div>
  );
};

export default Clima;