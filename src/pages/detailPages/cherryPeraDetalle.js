import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import CherryPackagingTable from '../../components/packagingtables/cherryPackagingTable';

// Importa las imágenes
import amarillo from '../../assets/cherrypera/amarillo/amarillo1.jpg';
import angelle from '../../assets/cherrypera/angelle/angelle1.jpg';
import chocolate from '../../assets/cherrypera/chocolate/chocolate.jpg';
import fresa from '../../assets/cherrypera/fresa/fresa.jpg';
import naranja from '../../assets/cherrypera/naranja/naranja.jpg';
import peppermato from '../../assets/cherrypera/peppermato/peppermato.jpg';
import rama from '../../assets/cherrypera/rama/rama.jpg';
import rojo from '../../assets/cherryredondo/rojo/cherryrojo1.jpg';

function CherryPeraDetalle() {
    let { nombreCard } = useParams();

    // Define un objeto de imágenes
    const cardImages = {
        amarillo: amarillo,
        angelle: angelle,
        chocolate: chocolate,
        fresa: fresa,
        naranja: naranja,
        peppermato: peppermato,
        rama: rama,
        rojo: rojo,
    };

    const cardDescriptions = {
        amarillo: `
            <strong>Pequeño pero versátil</strong>
            <p>Este pequeño hará las delicias de cualquier profesional o aficionado a la cocina. Jugoso, dulce y ligeramente ácido. Es un experto en contrastes y un todo terreno en nuestra mesa: ensaladas frescas, conservas, bebidas y decoración de platos...</p>
        `,
        angelle: `
            <strong>El sabor más deseado</strong> 
            <p>Tomate cherry pera de calidad excelente y color rojo intenso brillante. Con una forma única, este tomate te sorprenderá por su equilibrado sabor dulce a la par que ácido.</p>
            <p>Su textura crujiente y agradable aroma hacen que el sabor sea excelente, reconocible y muy atractivo. Los consumidores son atraídos por su excelente sabor, pero a menudo se confunden por el gran número de nombres comerciales diferentes (“perla”, “santa”, “dátil”, “cherry pera”) y de presentaciones.</p>
        `,
        chocolate: `
            <strong>Un bombón sorprendente</strong>
            <p>Déjate seducir por el intenso y exótico color chocolate de este tomate cherry pera.</p>
            <p>Un exquisito tomate que marca la diferencia con una textura y maduración únicas, que realzan sus características.</p>
            <p>Los tomates Minichocmato® son muy jugosos, con una textura firme. A pesar de su apariencia inusual, esta familia de tomates tiene un intenso sabor único e increíblemente agradable.</p>
            <p>Tienen una dulzura más alta que los tomates tradicionales, y se contrarrestan con notas ligeramente ácidas.</p>
        `,
        fresa: `
            <strong>Un tomate que enamora</strong>
            <p>Cherry fresa, un tomate capaz de enamorar a cualquier paladar. Forma de corazón, cuerpo crujiente y un sabor especial. ¡Toda una experiencia sensorial en tus platos!</p>
            <p>Una delicia para los apasionados de los pequeños detalles.</p>
        `,
        naranja: `
            <strong>El rey del naranja</strong>
            <p>Con una forma alargada y color naranja brillante, este tomate cherry pera te propone un sabor único y textura agradable.</p>
            <p>Degústalo como un snack saludable. Sólo o junto a otros, dando colorido y diversión a las meriendas.</p>
            <p>Este fruto ovalado es una auténtica experiencia culinaria acompañado de pan tostado o en ensaladas.</p>
            <p>Color, sabor y forma única para nuestros platos.</p>
        `,
        peppermato: `
            <strong>Intenso, vivo y con carácter</strong>
            <p>Peppermato, el tomate cherry que te seduce con su particular forma y un intenso color púrpura.</p>
            <p>Dulce, fresco y con un ligero toque cítrico, de textura carnosa y jugosa. Digno de un gran manjar.</p>
        `,
        rama: "Descripción para Rama.",
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
                        {nombreCard.charAt(0).toUpperCase() + nombreCard.slice(1)}
                        </h1>
                        <p className="mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: descripcion }}></p>
                    </div>
                </div>
            </section>

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

            <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6">
            </div>
            <CherryPackagingTable />
        </div>
    );
}

export default CherryPeraDetalle;
