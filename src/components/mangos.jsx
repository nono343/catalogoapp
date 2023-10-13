import React, { useState } from 'react';
import osteen from '../assets/mangos/osteen/osteen.jpg';
import irwin from '../assets/mangos/irwin/irwin.jpg';
import keitt from '../assets/mangos/keitt/keitt.jpg';
import miniirwin from '../assets/mangos/miniirwin/miniirwin.jpg';


function Mangos() {
    return (
        <div className="relative py-16">
            <div className="container relative m-auto px-6 text-gray-500 md:px-12">
                <h2 className="mb-5 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                    Mangos
                </h2>
                <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-4">
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={osteen}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Osteen</h3>
                        {/* <p>
                            Asurcado Marrón
                        </p> */}
                    </div>
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={irwin}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Irwin</h3>
                        {/* <p>
                            Asurcado Marrón
                        </p> */}
                    </div>

                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={keitt}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Keitt</h3>
                        {/* <p>
                            Asurcado Marrón
                        </p> */}
                    </div>
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={miniirwin}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Mini Irwin</h3>
                        {/* <p>
                            Asurcado Marrón
                        </p> */}
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Mangos;
