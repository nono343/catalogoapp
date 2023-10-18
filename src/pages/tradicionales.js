import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom/dist';
import { Link } from 'react-router-dom/dist';
import berenjena from '../assets/tradicionales/berenjena/berenjena.jpg';
import pimientoitalianoverde from '../assets/tradicionales/pimientoitalianoverde/pimientoitalianoverde.jpg';
import pimientolamuyo from '../assets/tradicionales/pimientolamuyo/pimientolamuyo.jpg';
import pimientopadron from '../assets/tradicionales/pimientopadron/pimientopadron.jpg';
import pimientospicantes from '../assets/tradicionales/pimientospicantes/pimientospicantes.jpg';
import pimientossweetpalermo from '../assets/tradicionales/pimientosweetpalermo/pimientosweetpalermo.jpg';
import calabacinredondo from '../assets/tradicionales/calabacinredondo/calabacinredondo.jpg';
import calabacinalargado from '../assets/tradicionales/calabacinalargado/calabacinalargado.jpg';




function Tradicionales() {
    const cards = [
        {
            nombre: 'Berenjena Japonesa',
            imagen: berenjena,
        },
        {
            nombre: 'Pimiento Sweet Palermo',
            imagen: pimientossweetpalermo,
        },
        // {
        //     nombre: 'Pimiento Italiano Verde',
        //     imagen: pimientoitalianoverde,
        // },
        {
            nombre: 'Pimiento Lamuyo',
            imagen: pimientolamuyo,
        },
        {
            nombre: 'Pimiento Padrón',
            imagen: pimientopadron,
        },
        {
            nombre: 'Pimientos Picantes',
            imagen: pimientospicantes,
        },
        {
            nombre: 'Calabacín Redondo',
            imagen: calabacinredondo,
        },
        {
            nombre: 'Calabacín Alargado',
            imagen: calabacinalargado,
        },


    ];


    const location = useLocation();

    // Utiliza useEffect para detectar cambios en la ubicación y desplazar hacia arriba
    useEffect(() => {
      window.scrollTo(0, 0); // Desplazar hacia arriba al principio del componente
    }, [location.pathname]); // Detectar cambios en la ubicación


    return (
        <div className="relative text-center py-16">
            <div className="container relative m-auto px-6 text-gray-500 md:px-12">
                <h2 className="mb-5 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                    Verdura Tradicional
                </h2>
                <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-4">
                    {cards.map((card) => (
                        <Link
                            key={card.nombre}
                            to={`/catalogo/tradicionales/${card.nombre.toLowerCase().replace(/ /g, '_')}`}
                            className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105"
                        >
                            <img className="mx-auto w-120" src={card.imagen} alt="illustration" loading="lazy" />
                            <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">
                                {card.nombre.split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Tradicionales;
