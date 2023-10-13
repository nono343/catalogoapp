import React, { useState } from 'react';
import cherryamarillo from '../assets/cherrypera/amarillo/amarillo1.jpg';
import angelle from '../assets/cherrypera/angelle/angelle1.jpg';
import chocolate from '../assets/cherrypera/chocolate/chocolate.jpg';
import naranja from '../assets/cherrypera/naranja/naranja.jpg';
import peppermato from '../assets/cherrypera/peppermato/peppermato.jpg';
import fresa from '../assets/cherrypera/fresa/fresa.jpg';
import rama from '../assets/cherrypera/rama/rama.jpg';
import cherry from '../assets/cherry/cherry.jpg';



function CherryPera() {
    return (
        <div className="relative py-16">
            <div className="container relative m-auto px-6 text-gray-500 md:px-12">
                <h3 className="mb-5 text-gray-600 text-2xl font-bold dark:text-gray-300">Pera</h3>

                <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-4">
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={cherryamarillo}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Amarillo</h3>
                        {/* <p>
                            Asurcado Marrón
                        </p> */}
                    </div>
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={angelle}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Angelle</h3>
                        {/* <p>
                            Asurcado Marrón
                        </p> */}
                    </div>
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={chocolate}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Chocolate</h3>
                        {/* <p>
                            Asurcado Marrón
                        </p> */}
                    </div>
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={naranja}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Naranja</h3>
                        {/* <p>
                            Asurcado Marrón
                        </p> */}
                    </div>
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={fresa}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Fresa Essentia</h3>
                        {/* <p>
                            Asurcado Marrón
                        </p> */}
                    </div>
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={peppermato}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Peppermato</h3>
                        {/* <p>
                            Asurcado Marrón
                        </p> */}
                    </div>
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={rama}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Rama</h3>
                        {/* <p>
                            Asurcado Marrón
                        </p> */}
                    </div>
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={cherry}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Wild Mix</h3>
                        {/* <p>
                            Asurcado Marrón
                        </p> */}
                    </div>

                </div>
            </div>
        </div>

    );
}

export default CherryPera;
