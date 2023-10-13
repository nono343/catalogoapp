import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom/dist';
import Aguacates from '../components/aguacates';
import Mangos from '../components/mangos';
import Pitahayas from '../components/pitahayas';
import OtrasVariedades from '../components/otrasVariedades';


function Tropicales() {
    const location = useLocation();

    // Utiliza useEffect para detectar cambios en la ubicación y desplazar hacia arriba
    useEffect(() => {
      window.scrollTo(0, 0); // Desplazar hacia arriba al principio del componente
    }, [location.pathname]); // Detectar cambios en la ubicación


    return (
        <>
        <Aguacates />
        <Mangos />
        <Pitahayas />
        <OtrasVariedades />
        </>
    );
}

export default Tropicales;
