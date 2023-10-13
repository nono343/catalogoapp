import React, { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import amela1 from '../assets/tomatedulce/amela/amela1.jpg';
import fiesta from '../assets/fiesta/fiesta.jpg';
import berenjena1 from '../assets/tradicional/berenjena/berenjena1.jpg';
import tropicales from '../assets/tropicales/tropicales.jpg';
import cherry from '../assets/cherry/cherry.jpg';
import salmorejo from '../assets/vgama/salmorejo/salmorejo.jpg';




export default function Hero() {
    const location = useLocation();

    // Utiliza useEffect para detectar cambios en la ubicación y desplazar hacia arriba
    useEffect(() => {
      window.scrollTo(0, 0); // Desplazar hacia arriba al principio del componente
    }, [location.pathname]); // Detectar cambios en la ubicación
    
    return (
        <div className="relative py-16">
            <div className="container relative m-auto px-6 text-gray-500 md:px-12">
                <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <Link to="/catalogo/tomates">
                            <img
                                className="mx-auto w-120" // Ajusta el ancho según tus necesidades
                                src={amela1}
                                alt="illustration"
                                loading="lazy"
                            />

                            <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Tomates</h3>
                            {/* <p>
                            Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam
                            tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
                        </p> */}
                        </Link>
                    </div>
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <Link to="/catalogo/cherrys">
                            <img
                                className="mx-auto w-120"
                                src={cherry}
                                alt="illustration"
                                loading="lazy"
                            />
                        </Link>
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Tomates Cherry</h3>
                        {/* <p>
                            Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam
                            tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
                        </p> */}
                    </div>
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <Link to="/catalogo/minivegetales">

                            <img
                                className="mx-auto w-120"
                                src={fiesta}
                                alt="illustration"
                                loading="lazy"
                            />
                            <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Minivegetales</h3>
                            {/* <p>
                            Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam
                            tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
                        </p> */}
                        </Link>
                    </div>
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <Link to="/catalogo/tradicionales">

                            <img
                                className="mx-auto w-120"
                                src={berenjena1}
                                alt="illustration"
                                loading="lazy"
                            />
                            <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Tradicional</h3>
                            {/* <p>
                            Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam
                            tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
                        </p> */}
                        </Link>
                    </div>

                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <Link to="/catalogo/tropicales">
                            <img
                                className="mx-auto w-120"
                                src={tropicales}
                                alt="illustration"
                                loading="lazy"
                            />
                            <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Tropicales</h3>
                            {/* <p>
                            Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam
                            tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
                        </p> */}
                        </Link>
                    </div>
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <Link to="/catalogo/VGama">

                            <img
                                className="mx-auto w-120"
                                src={salmorejo}
                                alt="illustration"
                                loading="lazy"
                            />
                            <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">V Gama</h3>
                            {/* <p>
                            Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam
                            tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
                        </p> */}
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    )
}

