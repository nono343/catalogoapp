import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

import tomates from '../assets/tomatedulce/amela/amela1.jpg';
import minivegetales from '../assets/fiesta/fiesta.jpg';
import tradicionales from '../assets/tradicional/berenjena/berenjena1.jpg';
import tropicales from '../assets/tropicales/tropicales.jpg';
import cherry from '../assets/cherry/cherry.jpg';
import vgama from '../assets/vgama/salmorejo/salmorejo.jpg';


export default function Hero() {

    const cards = [
        {
            nombre: 'Tomates',
            imagen: tomates,
        },
        {
            nombre: 'Cherrys',
            imagen: cherry,
        },
        {
            nombre: 'Minivegetales',
            imagen: minivegetales,
        },
        {
            nombre: 'Verdura tradicional',
            imagen: tradicionales,
        },
        {
            nombre: 'Tropicales',
            imagen: tropicales,
        },
        {
            nombre: 'V Gama',
            imagen: vgama,
        },

    ];


    const location = useLocation();

    // Utiliza useEffect para detectar cambios en la ubicación y desplazar hacia arriba
    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar hacia arriba al principio del componente
    }, [location.pathname]); // Detectar cambios en la ubicación

    return (
        <div className="relative py-16">


                <div className="container relative m-auto px-6 text-gray-500 md:px-12">
                    <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
                        {cards.map((card) => (
                            <Link
                                key={card.nombre}
                                to={`/${card.nombre.toLowerCase().replace(/ /g, '_')}`}
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
    )
}

