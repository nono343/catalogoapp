import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom/dist';
import TomatesTradicionalMarcas from '/workspaces/codespaces-react/src/components/tomatesTradicionalMarcas.jsx';
import TomatesTradicional from '../components/tomatesTradicional';
import TomatesNuevasTendencias from '../components/tomatesNuevasTendencias';

function Tomates() {
    const location = useLocation();

    // Utiliza useEffect para detectar cambios en la ubicación y desplazar hacia arriba
    useEffect(() => {
      window.scrollTo(0, 0); // Desplazar hacia arriba al principio del componente
    }, [location.pathname]); // Detectar cambios en la ubicación


    return (
        <>
        <TomatesNuevasTendencias/>
        <TomatesTradicionalMarcas/>
        <TomatesTradicional/>
        </>
    );
}

export default Tomates;
