import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

import tomates from '../assets/tomatedulce/amela/amela1.jpg';
import minivegetales from '../assets/fiesta/fiesta.jpg';
import tradicionales from '../assets/tradicional/berenjena/berenjena1.jpg';
import tropicales from '../assets/tropicales/tropicales.jpg';
import cherry from '../assets/cherry/cherry.jpg';
import vgama from '../assets/vgama/salmorejo/salmorejo.jpg';


    export default function Hero({ isSpanish }) {
        const cardData = [
            {
                nombre: {
                    es: 'Tomates',
                    en: 'Tomatoes',
                },
                imagen: tomates,
            },
            {
                nombre: {
                    es: 'Cherrys',
                    en: 'Cherries',
                },
                imagen: cherry,
            },
            {
                nombre: {
                    es: 'Minivegetales',
                    en: 'Mini Vegetables',
                },
                imagen: minivegetales,
            },
            {
                nombre: {
                    es: 'Tradicionales',
                    en: 'Traditional Vegetables',
                },
                imagen: tradicionales,
            },
            {
                nombre: {
                    es: 'Tropicales',
                    en: 'Tropical Fruits',
                },
                imagen: tropicales,
            },
            {
                nombre: {
                    es: 'V Gama',
                    en: 'V Range',
                },
                imagen: vgama,
            },
        ];
    
        const location = useLocation();
    
        // Utiliza useEffect para detectar cambios en la ubicación y desplazar hacia arriba
        useEffect(() => {
            window.scrollTo(0, 0); // Desplazar hacia arriba al principio del componente
        }, [location.pathname]); // Detectar cambios en la ubicación
    
        return (
            <div className="relative py-5">
                <div className="container relative m-auto px-6 text-gray-500 md:px-12">
                    <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3 animate-fade">
                        {cardData.map((card) => (
                            <Link
                                key={card.nombre.es} // Usamos el nombre en español como clave
                                to={`/${card.nombre.es.toLowerCase().replace(/ /g, '_')}`} // URL en español
                                className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105 duration-500 ease-in-out hover:shadow-2xl hover:border-red-400"
                            >
                                <img className="mx-auto w-120" src={card.imagen} alt="illustration" loading="lazy" />
                                <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                                    {isSpanish ? card.nombre.es : card.nombre.en}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    