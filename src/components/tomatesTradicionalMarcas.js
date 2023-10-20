import React from 'react';
import adora2 from '../assets/tradicional/adora/adora2.jpg';
import primora2 from '../assets/tradicional/primora/primora2.jpg';
import chocmato1 from '../assets/tradicional/chocmato/chocmato2.jpg';
import antociano1 from '../assets/tradicional/antociano/antociano2.jpg';
import monterosa from '../assets/tradicional/monterosa/monterosa2.jpg';

import { Link } from 'react-router-dom';

const cards = [
    {
        nombre: 'Adora',
        imagen: adora2,
    },
    {
        nombre: 'Primora',
        imagen: primora2,
    },
    {
        nombre: 'Chocmato',
        imagen: chocmato1,
    },
    {
        nombre: 'Monterosa',
        imagen: monterosa,
    },

    {
        nombre: 'Murice',
        imagen: antociano1,
    },
];

function TomatesTradicionalMarcas() {
    return (
        <div className="relative text-center  py-16">
            <div className="container relative m-auto px-6 text-gray-500 md:px-12">
            <h2 className="mb-5 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                    Tomate tradicional
                </h2>
                <h3 className="mb-5 text-gray-600 text-2xl font-bold dark:text-gray-300"> Nuestras marcas</h3>
                <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-4">
                    {cards.map((card) => (
                        <Link
                            key={card.nombre}
                            to={`/tomates/tradicionales/marcas/${card.nombre.toLowerCase()}`}
                            className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105"
                        >
                            <img className="mx-auto w-120" src={card.imagen} alt="illustration" loading="lazy" />
                            <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">{card.nombre}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TomatesTradicionalMarcas;