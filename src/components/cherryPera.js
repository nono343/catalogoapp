import React from 'react';
import { Link } from 'react-router-dom';

import amarillo from '../assets/cherrypera/amarillo/amarillo1.jpg';
import angelle from '../assets/cherrypera/angelle/angelle1.jpg';
import chocolate from '../assets/cherrypera/chocolate/chocolate.jpg';
import fresa from '../assets/cherrypera/fresa/fresa.jpg';
import naranja from '../assets/cherrypera/naranja/naranja.jpg';
import peppermato from '../assets/cherrypera/peppermato/peppermato.jpg';
import rama from '../assets/cherrypera/rama/rama.jpg';



const cards = [
    {
        nombre: 'Amarillo',
        imagen: amarillo,
    },
    {
        nombre: 'Angelle',
        imagen: angelle,
    },
    {
        nombre: 'Chocolate',
        imagen: chocolate,
    },
    {
        nombre: 'Fresa',
        imagen: fresa,
    },
    {
        nombre: 'Naranja',
        imagen: naranja,
    },
    {
        nombre: 'Peppermato',
        imagen: peppermato,
    },
    {
        nombre: 'Rama',
        imagen: rama,
    },


];

function CherryPera() {
    return (
        <div className="relative py-16">
            <div className="container relative m-auto px-6 text-gray-500 md:px-12">
                <h3 className="mb-5 text-gray-600 text-2xl font-bold dark:text-gray-300">Pera</h3>
                <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-4">
                    {cards.map((card) => (
                        <Link
                            key={card.nombre}
                            to={`/catalogo/cherrys/pera/${card.nombre.toLowerCase()}`}
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

export default CherryPera;
