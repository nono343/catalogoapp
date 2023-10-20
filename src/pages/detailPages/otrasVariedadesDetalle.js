import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import chirimoya from '../../assets/otrasvariedades/chirimoya/chirimoya.jpg';
import caviarcitrico from '../../assets/otrasvariedades/caviarcitrico/caviarcitrico.jpg';
import nispora from '../../assets/otrasvariedades/nispora/nispora.jpg';
import ChirimoyaPackagingTable from '../../components/packagingtables/chirimoyaPackagingTable';
import CaviarCitricoPackagingTable from '../../components/packagingtables/caviarCitricoPackagingTable';


function OtrasVariedadesDetalle() {
    let { nombreCard } = useParams();

    // Define un objeto de imágenes
    const cardImages = {
        chirimoya_fino_de_jete: chirimoya,
        caviar_cítrico: caviarcitrico,
        níspora: nispora,
    };

    const cardDescriptions = {
        chirimoya_fino_de_jete: `
            <strong>La delicia en sí misma
            </strong>
            <p>La Palma se ha especializado en atender 
            la demanda de más alto nivel de esta 
            delicia tropical con frutos de gran calibre, 
            calidad y un sabor exquisito. </p>
            <p>Solo con un cultivo cuidadoso y un 
            manejo esmerado se logra la correcta 
            maduración y sabor dulce de la 
            chirimoya. Consiguiendo así toques 
            levemente ácidos, baja presencia de 
            huesos y el característico color verde de 
            su piel.</p>
            <p>El consumo de chirimoya está 
            recomendado para los amantes de 
            lo delicado, lo sabroso, lo exótico y lo 
            alegre.</p>
        `,
        caviar_cítrico: `
        <strong>Explosión cítrica
        </strong>
        <p>El Caviar Cítrico es un pequeño 
        fruto con aspecto de lima, cuya 
        pulpa está formada por pequeñas 
        esferas transparentes, similares 
        a las huevas de caviar, que al 
        masticarlas explotan en la boca 
        liberando un zumo efervescente.</p>
        <p>Es el perfecto aderezo de limón ya 
        que el jugo no entra en contacto 
        con el producto hasta que se 
        mastica.</p>
        <p>Como otros cítricos presenta 
        grandes beneficios para la salud, 
        gracias al gran de aporte de 
        vitamina C, que puede llegar a ser 
        5 veces superior al de una pieza de 
        kiwi y la aportación de polifenoles, 
        que ejercen un poder antioxidante.</p>
        
`,
        níspora: `
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
            {(nombreCard === 'chirimoya_fino_de_jete' || nombreCard === 'níspora') && (
                <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6">
                    <h1 className="sm:text-3xl text-center text-2xl mb-5">Calendario de producción</h1>
                    <div className="flex justify-center max-w-screen-md mx-auto"> {/* Contenedor que centra los elementos */}
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">1</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">2</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">3</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">4</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">5</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">6</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">7</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">8</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">9</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">10</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">11</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">12</div>
                    </div>
                </div>
            )}

            {(nombreCard === 'caviar_cítrico') && (
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
            )}


            <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6"></div>
            {(nombreCard === 'chirimoya_fino_de_jete') && (
                <ChirimoyaPackagingTable />
            )}
            {(nombreCard === 'níspora') && (
                <CaviarCitricoPackagingTable />
            )}
            {(nombreCard === 'caviar_cítrico') && (
                <ChirimoyaPackagingTable />
            )}
        </div>
    );
}

export default OtrasVariedadesDetalle;
