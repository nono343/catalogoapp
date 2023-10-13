import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom/dist';
import CherryRedondo from '../components/cherryRedondo';
import CherryPera from "../components/cherryPera"

function Tomates() {
    const location = useLocation();

    // Utiliza useEffect para detectar cambios en la ubicación y desplazar hacia arriba
    useEffect(() => {
      window.scrollTo(0, 0); // Desplazar hacia arriba al principio del componente
    }, [location.pathname]); // Detectar cambios en la ubicación

    return (
        <>
        <CherryRedondo />
        <CherryPera />
        </>
    );
}

export default Tomates;
