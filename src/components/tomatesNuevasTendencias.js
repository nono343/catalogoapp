import React, { useState } from 'react';
import amela1 from '../assets/tomatedulce/amela/amela1.jpg';
import amela2 from '../assets/tomatedulce/amela/amela2.jpg';
import dulcextra1 from '../assets/tomatedulce//dulcextra/dulcextra1.jpg';
import dulcextra2 from '../assets/tomatedulce/dulcextra/dulcextra1.jpg';
import { Link } from 'react-router-dom/dist';


function TomatesNuevasTendencias() {
    return (

        <div className="relative py-16 text-center">
            <div className="container relative m-auto px-6 text-gray-500 md:px-12">
                <h2 className="mb-5 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                    Nuevas tendencias
                </h2>

                <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-4">
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                    <Link to="/catalogo/tomates/nuevastendencias/amela">
                                                <img
                            className="mx-auto w-120"
                            src={amela2}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Amela</h3>
                        {/* <p>
                            Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam
                            tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
                        </p> */}
                    </Link>
                </div>
                <Link to="/catalogo/tomates/nuevastendencias/dulcextra">

                <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                    <img
                        className="mx-auto w-120"
                        src={dulcextra2}
                        alt="illustration"
                        loading="lazy"
                    />
                    <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Dulcextra</h3>
                    {/* <p>
                            Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam
                            tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
                        </p> */}
                </div>
                </Link>

            </div>
        </div>
        </div >
    );
}

export default TomatesNuevasTendencias;
