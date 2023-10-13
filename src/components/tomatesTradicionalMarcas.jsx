import React, { useState } from 'react';
import adora1 from '../assets/tradicional/adora/adora1.jpg';
import adora2 from '../assets/tradicional/adora/adora2.jpg';
import primora1 from '../assets/tradicional/primora/primora1.jpg';
import primora2 from '../assets/tradicional/primora/primora2.jpg';
import chocmato2 from '../assets/tradicional/chocmato/chocmato1.jpg';
import chocmato1 from '../assets/tradicional/chocmato/chocmato2.jpg';
import antociano2 from '../assets/tradicional/antociano/antociano1.jpg';
import antociano1 from '../assets/tradicional/antociano/antociano2.jpg';
import monterosa2 from '../assets/tradicional/monterosa/monterosa1.jpg';
import monterosa1 from '../assets/tradicional/monterosa/monterosa2.jpg';


function TomatesTradicionalMarcas() {
    // const [isAdoraHovered, setIsAdoraHovered] = useState(false);
    // const [isPrimoraHovered, setIsPrimoraHovered] = useState(false);
    // const [isChocmatoHovered, setIsChocmatoHovered] = useState(false);
    // const [isAntocianoHovered, setIsAntocianoHovered] = useState(false);
    // const [isMonterosaHovered, setIsMonterosaHovered] = useState(false);


    // const handleAdoraMouseEnter = () => {
    //     setIsAdoraHovered(true);
    // };

    // const handleAdoraMouseLeave = () => {
    //     setIsAdoraHovered(false);
    // };

    // const handlePrimoraMouseEnter = () => {
    //     setIsPrimoraHovered(true);
    // };

    // const handlePrimoraMouseLeave = () => {
    //     setIsPrimoraHovered(false);
    // };

    // const handleChocmatoMouseEnter = () => {
    //     setIsChocmatoHovered(true);
    // };

    // const handleChocmatoMouseLeave = () => {
    //     setIsChocmatoHovered(false);
    // };

    // const handleAntocianoMouseEnter = () => {
    //     setIsAntocianoHovered(true);
    // };

    // const handleAntocianoMouseLeave = () => {
    //     setIsAntocianoHovered(false);
    // };

    // const handleMonterosaMouseEnter = () => {
    //     setIsMonterosaHovered(true);
    // };

    // const handleMonterosaMouseLeave = () => {
    //     setIsMonterosaHovered(false);
    // };

    return (
        <div className="relative py-16">
            <div className="container relative m-auto px-6 text-gray-500 md:px-12">
                <h2 className="mb-5 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                    Tomate tradicional
                </h2>
                <h3 className="mb-5 text-gray-600 text-2xl font-bold dark:text-gray-300"> Nuestras marcas</h3>

                <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-4">
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={adora2}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Adora</h3>
                        <p>
                            Asurcado Marrón
                        </p>
                    </div>
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={primora2}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Primora</h3>
                        <p>
                            Asurcado Marrón
                        </p>
                    </div>
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={chocmato1}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Chocmato</h3>
                        <p>
                            Asurcado Marrón
                        </p>
                    </div>
                    <div className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105">
                        <img
                            className="mx-auto w-120"
                            src={antociano1}
                            alt="illustration"
                            loading="lazy"
                        />
                        <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">Murice</h3>
                        <p>
                            Asurcado Azul
                        </p>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default TomatesTradicionalMarcas;
