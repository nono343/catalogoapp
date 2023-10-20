import React, { useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import mycubies from '../assets/minivegetales/mycubies/mycubies.jpg';
import tribelli from '../assets/minivegetales/tribelli/tribelli.jpg';
import { Link } from 'react-router-dom';

function Minivegetales() {
    const cards = [
        {
            nombre: 'Pepino Cocktail Mycubies',
            imagen: mycubies,
        },
        {
            nombre: 'Minipimientos Tribelli',
            imagen: tribelli,
        },
    ];

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar hacia arriba al principio del componente
    }, [location.pathname]); // Detectar cambios en la ubicación


    return (

        <div className="container relative m-auto px-6 text-gray-500 md:px-12">
            <div className="relative text-center py-16">
                <h2 className="mb-5 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                    Minivegetales
                </h2>
                <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-4">
                    {cards.map((card) => (
                        <Link
                            key={card.nombre}
                            to={`/catalogo/minivegetales/${card.nombre.toLowerCase().replace(/ /g, '_')}`}
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

export default Minivegetales;
