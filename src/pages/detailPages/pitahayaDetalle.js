import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import purpura from '../../assets/pitahayas/purpura/purpura.jpg';
import rosa from '../../assets/pitahayas/rosa/rosa.jpg';
import blanca from '../../assets/pitahayas/blanca/blanca.jpg';
import PitahayaPackagingTable from '../../components/packagingtables/pitahayaPackagingTable';


function PitahayaDetalle() {
    let { nombreCard } = useParams();

    // Define un objeto de imágenes
    const cardImages = {
        púrpura: purpura,
        rosa: rosa,
        blanca: blanca,
    };

    const cardDescriptions = {
        púrpura: `
            <strong>La fruta del dragón
            </strong>
            <p>Su rico sabor recuerda al agua 
            azucarada, la pitahaya es una fruta 
            de muy bajo valor calórico, ya que 
            apenas contiene hidratos de carbono 
            y está compuesta principalmente de 
            agua.</p>
            <p>Las semillas de la pitahaya contienen 
            grasas del tipo Omega 3, ideales para 
            reforzar el sistema inmunológico y 
            combatir algunas enfermedades.</p>
            <p>Además, contiene importantes 
            minerales como hierro, calcio y 
            fósforo, así como gran cantidad de 
            vitaminas perfectas para mantener 
            nuestro organismo sano.</p>
            <p>Gracias a las particulares condiciones 
            climáticas de Andalucía, esta fruta 
            exótica se cultiva con éxito desde 
            hace años en la Costa Tropical.
            </p>
        `,
        rosa: `
        <strong>La fruta del dragón
        </strong>
        <p>Su rico sabor recuerda al agua 
        azucarada, la pitahaya es una fruta 
        de muy bajo valor calórico, ya que 
        apenas contiene hidratos de carbono 
        y está compuesta principalmente de 
        agua.</p>
        <p>Las semillas de la pitahaya contienen 
        grasas del tipo Omega 3, ideales para 
        reforzar el sistema inmunológico y 
        combatir algunas enfermedades.</p>
        <p>Además, contiene importantes 
        minerales como hierro, calcio y 
        fósforo, así como gran cantidad de 
        vitaminas perfectas para mantener 
        nuestro organismo sano.</p>
        <p>Gracias a las particulares condiciones 
        climáticas de Andalucía, esta fruta 
        exótica se cultiva con éxito desde 
        hace años en la Costa Tropical.
        </p>
`,
        blanca: `
        <strong>La fruta del dragón
        </strong>
        <p>Su rico sabor recuerda al agua 
        azucarada, la pitahaya es una fruta 
        de muy bajo valor calórico, ya que 
        apenas contiene hidratos de carbono 
        y está compuesta principalmente de 
        agua.</p>
        <p>Las semillas de la pitahaya contienen 
        grasas del tipo Omega 3, ideales para 
        reforzar el sistema inmunológico y 
        combatir algunas enfermedades.</p>
        <p>Además, contiene importantes 
        minerales como hierro, calcio y 
        fósforo, así como gran cantidad de 
        vitaminas perfectas para mantener 
        nuestro organismo sano.</p>
        <p>Gracias a las particulares condiciones 
        climáticas de Andalucía, esta fruta 
        exótica se cultiva con éxito desde 
        hace años en la Costa Tropical.
        </p>
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

            <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6">
                <h1 className="sm:text-3xl text-center text-2xl mb-5">Calendario de producción</h1>
                <div className="flex justify-center max-w-screen-md mx-auto"> {/* Contenedor que centra los elementos */}
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">1</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">2</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">3</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">4</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">5</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">6</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">7</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">8</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">9</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">10</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">11</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">12</div>
                </div>
            </div>


            <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6">
            </div>
            <PitahayaPackagingTable />
        </div>
    );
}

export default PitahayaDetalle;
