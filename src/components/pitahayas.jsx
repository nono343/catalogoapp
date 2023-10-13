import React, { useState } from 'react';
import purpura from '../assets/pitahayas/purpura/purpura.jpg';
import rosa from '../assets/pitahayas/rosa/rosa.jpg';
import blanca from '../assets/pitahayas/blanca/blanca.jpg';


function Pitahayas() {
    return (
        <div className="relative py-16">
            <div className="container relative m-auto px-6 text-gray-500 md:px-12">
                <h2 className="mb-5 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                    Pitahayas
                </h2>
                <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-4">
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={purpura}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Púrpura</h3>
                        {/* <p>
                            Asurcado Marrón
                        </p> */}
                    </div>
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={rosa}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Rosa</h3>
                        {/* <p>
                            Asurcado Marrón
                        </p> */}
                    </div>

                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={blanca}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Blanca</h3>
                        {/* <p>
                            Asurcado Marrón
                        </p> */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Pitahayas;
