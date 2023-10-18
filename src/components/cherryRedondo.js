import React from 'react';
import { Link } from 'react-router-dom';
import amarillo from '../assets/cherryredondo/amarillo/cherryamarillo1.jpg';
import rojo from '../assets/cherryredondo/rojo/cherryrojo1.jpg';
// import rama from '../assets/cherryredondo/rama/rama.jpg';
// import juanita from '../assets/cherryredondo/juanita/juanita.jpg';

const cards = [
    {
        nombre: 'Amarillo',
        imagen: amarillo,
    },
    {
        nombre: 'Rojo',
        imagen: rojo,
    },
];

function CherryRedondo() {
    return (
        <div className="relative py-16">
            <div className="container relative m-auto px-6 text-gray-500 md:px-12">
                <h3 className="mb-5 text-gray-600 text-2xl font-bold dark:text-gray-300">Redondo</h3>
                <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-4">
                    {cards.map((card) => (
                        <Link
                            key={card.nombre}
                            to={`/catalogo/cherrys/redondo/${card.nombre.toLowerCase()}`}
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

export default CherryRedondo;



