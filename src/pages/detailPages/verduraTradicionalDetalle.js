import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import berenjena from '../../assets/tradicionales/berenjena/berenjena.jpg';
import pimientosweetpalermo from '../../assets/tradicionales/pimientosweetpalermo/pimientosweetpalermo.jpg';
import pimientoitalianoverde from '../../assets/tradicionales/pimientoitalianoverde/pimientoitalianoverde.jpg';
import pimientolamuyo from '../../assets/tradicionales/pimientolamuyo/pimientolamuyo.jpg';
import pimientopadron from '../../assets/tradicionales/pimientopadron/pimientopadron.jpg';
import pimientospicantes from '../../assets/tradicionales/pimientospicantes/pimientospicantes.jpg';
import calabacinredondo from '../../assets/tradicionales/calabacinredondo/calabacinredondo.jpg';
import calabacinalargado from '../../assets/tradicionales/calabacinalargado/calabacinalargado.jpg';

import BeefPackagingTable from '../../components/packagingtables/beefPackagingTable';
import PeraPackagingTable from '../../components/packagingtables/peraPackagingTable';
import CorazondebueyPackagingTable from '../../components/packagingtables/corazondebueyPackagingTable';
import MelangePackagingTable from '../../components/packagingtables/melangePackagingTable';
import BerenjenaPackagingTable from '../../components/packagingtables/berenjenaPackagingTable';
import LamuyoPackagingTable from '../../components/packagingtables/lamuyoPackagingTable';
import PicantesPackagingTable from '../../components/packagingtables/picantesPackagingTable';


function VerduraTradicionalDetalle() {
    let { nombreCard } = useParams();

    // Define un objeto de imágenes
    const cardImages = {
        berenjena_japonesa: berenjena,
        pimiento_sweet_palermo: pimientosweetpalermo,
        // pimiento_italiano_verde: pimientoitalianoverde,
        pimiento_lamuyo: pimientolamuyo,
        pimiento_padrón: pimientopadron,
        pimientos_picantes: pimientospicantes,
        calabacín_redondo: calabacinredondo,
        calabacín_alargado: calabacinalargado,
    };

    const cardDescriptions = {
        berenjena_japonesa: `
            <strong>Una calidad única</strong>
            <p>Alargada, delgada y de pocas semillas, 
            la berenjena japonesa nos deleita con su 
            sabor delicado. Su piel brillante tiene un 
            tono púrpura-negro y es lo suficientemente 
            fina para que no requiera pelarse antes de 
            su uso. </p>
            <p>Única en su capacidad de mantener su 
            tono violeta al cocinarla. Fácil de cortar y 
            de trabajar en cocina, su sabor es menos 
            amargo que el de la berenjena tradicional.</p>

        `,
        pimiento_sweet_palermo: `
            <strong>Un pimiento diferente
            </strong> 
            <p>Prueba el pimiento gourmet que 
            conquista por su color y su dulzura. </p>
            <p>Jugoso y suave, sin apenas pepitas 
            y de sabor sorprendentemente 
            dulce y ligero.</p>
            <p>Delicioso en ensalada, como snack, 
            salteado, al horno o relleno.</p>
            <p>De forma cónica, piel fina, color 
            rojo oscuro y sabor dulce y sutil, 
            puede disfrutarse de muchas 
            más maneras que cualquier otro 
            pimiento, incluso en crudo.</p>

        `,
        //     pimiento_italiano_verde: `
        //     <strong>El sabor por excelencia</strong>
        //     <p>El tomate Corazón de Buey tiene 
        //     una piel muy fina que alberga una 
        //     fruta muy carnosa y con muy pocas 
        //     semillas en sus cámaras. </p>
        //     <p>Su sabor es delicioso muy jugoso, 
        //     ideal para disfrutarlo con un poco 
        //     de sal y aceite de oliva virgen extra.</p>
        //     <p>Es precisamente este tomate el que 
        //     muchas veces se utiliza para hacer 
        //     la ensalada Caprese italiana.</p>
        //     <p>El color del tomate Corazón de 
        //     Buey es rojo intenso y brillante.</p>
        // `,

        pimiento_lamuyo: `
            <strong>Una tradición mediterránea
            </strong>
            <p>El pimiento lamuyo es característico por 
            su forma rectangular y excelente calidad. 
            Destaca además por su gran firmeza y 
            llamativa piel lisa brillante de color rojo 
            intenso.</p>
            <p>Una variedad tradicional y de sabor 
            suave de la costa mediterránea.</p>
        `,
        pimiento_padrón: `
        <strong>Intenso y suave
        </strong>
        <p>Original de Padrón (Galicia), aunque 
        en sus inicios se remonta a una 
        variedad de Chile cultivada en Centro 
        América y traída a España por monjes 
        franciscanos.</p>
        <p>El Padrón es un pequeño pimiento 
        alargado en forma de pico que nunca 
        deja de sorprender. </p>

    `,
        pimientos_picantes: `
            <strong>Un ingrediente atrevido
            </strong>
            <p>Originarios del viejo mundo fueron 
            introducidos en España y Europa por 
            Colón y desde entonces se hicieron 
            hueco en las cocinas tradicionales de 
            nuestro país. </p>
            <p>Los pimientos picantes, de agradable 
            olor y gran variedad de sabores, se han 
            convertido en un alimento saludable</p>
            <p>Indispensable para dar esa chispa 
            en multitud de guisos y propuestas 
            gastronómicas gracias a los diferentes 
            grados de picor del producto.</p>
            <p>El ingrediente atrevido para la cocina 
            tradicional.</p>

        `,
        calabacín_redondo: `
        <strong>Una reunión muy provechosa
        </strong>
        <p>Una selección de nuestros mejores 
        tomates ancestrales: marmande, tomate 
        asurcado marrón, tomate asurcado 
        antociano, tomate beef, y tomate pera, 
        en sus tres variedades de color.</p>
        <p>Tradicionales delicias de jardín con 
        las que experimentar un universo de 
        sabores, texturas y colores.</p>
    `,
        calabacín_alargado: `
    <strong>Una reunión muy provechosa
    </strong>
    <p>Una selección de nuestros mejores 
    tomates ancestrales: marmande, tomate 
    asurcado marrón, tomate asurcado 
    antociano, tomate beef, y tomate pera, 
    en sus tres variedades de color.</p>
    <p>Tradicionales delicias de jardín con 
    las que experimentar un universo de 
    sabores, texturas y colores.</p>
`,


    };

    // Obtén la descripción correspondiente al nombre del card
    const descripcion = cardDescriptions[nombreCard];
    const location = useLocation();

    // Utiliza useEffect para detectar cambios en la ubicación y desplazar hacia arriba
    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar hacia arriba al principio del componente
    }, [location.pathname]); // Detectar cambios en la ubicación


    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img
                            src={cardImages[nombreCard]}
                            alt={nombreCard}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            {nombreCard.split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </h1>
                        <p className="mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: descripcion }}></p>
                    </div>
                </div>
            </section>

            {(nombreCard === 'berenjena_japonesa' || nombreCard === 'pimiento_sweet_palermo' || nombreCard === 'pimiento_padrón' || nombreCard === 'pimientos_picantes' || nombreCard === 'calabacín_redondo' || nombreCard === 'calabacín_alargado') && (
                <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6">
                    <h1 className="sm:text-3xl text-center text-2xl mb-5">Calendario de producción</h1>
                    <div className="flex justify-center max-w-screen-md mx-auto"> {/* Contenedor que centra los elementos */}
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">1</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">2</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">3</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">4</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">5</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">6</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">7</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">8</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">9</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">10</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">11</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">12</a>
                    </div>
                </div>
            )}

            {(nombreCard === 'pimiento_lamuyo') && (
                <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6">
                    <h1 className="sm:text-3xl text-center text-2xl mb-5">Calendario de producción</h1>
                    <div className="flex justify-center max-w-screen-md mx-auto"> {/* Contenedor que centra los elementos */}
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">1</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">2</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">3</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">4</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">5</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">6</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">7</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">8</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">9</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">10</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">11</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">12</a>
                    </div>
                </div>
            )}

            <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6">
            </div>
            {nombreCard === 'berenjena_japonesa' && <BerenjenaPackagingTable />} {/* Render Beef Packaging Table */}
            {nombreCard === 'pimiento_lamuyo' && <LamuyoPackagingTable />} {/* Render Pera Packaging Table */}
            {nombreCard === 'pimientos_picantes' && <PicantesPackagingTable />} {/* Render Corazon de Buey Packaging Table */}
            {nombreCard === 'melange' && <MelangePackagingTable />} {/* Render Melange Packaging Table */}


        </div>
    );
}

export default VerduraTradicionalDetalle;
