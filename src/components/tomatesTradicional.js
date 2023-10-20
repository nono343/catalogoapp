import React from 'react';
import beef from '../assets/tradicional/beef/beef2.jpg';
import pera from '../assets/tradicional/pera/pera2.jpg';
import corazonbuey from '../assets/tradicional/corazonbuey/corazonbuey2.jpg';
import melange from '../assets/tradicional/melange/melange2.jpg';
import { Link } from 'react-router-dom';

const cards = [
    {
        nombre: 'Beef',
        imagen: beef,
    },
    {
        nombre: 'Pera',
        imagen: pera,
    },
    {
        nombre: 'Corazon_de_Buey',
        imagen: corazonbuey,
    },
    {
        nombre: 'Melange',
        imagen: melange,
    },
];

function TomatesTradicional() {
    return (
        <div className="relative text-center py-16">
            <div className="container relative m-auto px-6 text-gray-500 md:px-12">
                <h3 className="mb-5 text-gray-600 text-2xl font-bold dark:text-gray-300"> Comoditys</h3>
                <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-4">
                    {cards.map((card) => (
                        <Link
                            key={card.nombre}
                            to={`/tomates/tradicionales/comoditys/${card.nombre.toLowerCase().replace(/ /g, '_')}`}
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

export default TomatesTradicional;
