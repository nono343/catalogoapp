import React, {useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import beef from '../../assets/tradicional/beef/beef1.jpg';
import pera from '../../assets/tradicional/pera/pera1.jpg';
import corazonbuey from '../../assets/tradicional/corazonbuey/corazonbuey1.jpg';
import melange from '../../assets/tradicional/melange/melange1.jpg';
import BeefPackagingTable from '../../components/packagingtables/beefPackagingTable';
import PeraPackagingTable from '../../components/packagingtables/peraPackagingTable';
import CorazondebueyPackagingTable from '../../components/packagingtables/corazondebueyPackagingTable';
import MelangePackagingTable from '../../components/packagingtables/melangePackagingTable';


function TomatesTradicionalComoditysDetalle() {
    let { nombreCard } = useParams();

    // Define un objeto de imágenes
    const cardImages = {
        beef: beef,
        pera: pera,
        corazon_de_buey: corazonbuey,
        melange: melange,
    };

    const cardDescriptions = {
        beef: `
            <strong>El sabor de antaño</strong>
            <p>El Beef es un tomate ancestral de pared 
            gruesa, de cuerpo carnoso y consistente.</p>
            <p>Un gran aliado para el día a día.</p>
            <p>El clásico de toda la vida que conserva 
            en nuestros hogares lo mejor de antaño.</p>

        `,
        pera: `
            <strong>El alma culinaria
            </strong> 
            <p>Tomate aromático con relleno carnoso, su forma 
            alargada es similar a la de una pera. Este tomate 
            de fina piel roja intensa, dulce y sabroso es el 
            alma de cualquier cocina.</p>
            <strong>Nueva variedad: ¡Tipo Intenso!
            </strong>
            <p>Descubre su inigualable textura crujiente 
            y su sabor único.</p>

        `,
        corazon_de_buey: `
        <strong>El sabor por excelencia</strong>
        <p>El tomate Corazón de Buey tiene 
        una piel muy fina que alberga una 
        fruta muy carnosa y con muy pocas 
        semillas en sus cámaras. </p>
        <p>Su sabor es delicioso muy jugoso, 
        ideal para disfrutarlo con un poco 
        de sal y aceite de oliva virgen extra.</p>
        <p>Es precisamente este tomate el que 
        muchas veces se utiliza para hacer 
        la ensalada Caprese italiana.</p>
        <p>El color del tomate Corazón de 
        Buey es rojo intenso y brillante.</p>
    `,

        melange: `
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

            <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6">
                <h1 className="sm:text-3xl text-center text-2xl mb-5">Calendario de producción</h1>
                <div className="flex justify-center max-w-screen-md mx-auto"> {/* Contenedor que centra los elementos */}
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">1</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">2</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">3</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">4</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">5</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">6</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">7</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">8</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">9</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">10</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">11</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">12</div>
                </div>
            </div>


            <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6">
            </div>
            {nombreCard === 'beef' && <BeefPackagingTable />} {/* Render Beef Packaging Table */}
            {nombreCard === 'pera' && <PeraPackagingTable />} {/* Render Pera Packaging Table */}
            {nombreCard === 'corazon_de_buey' && <CorazondebueyPackagingTable />} {/* Render Corazon de Buey Packaging Table */}
            {nombreCard === 'melange' && <MelangePackagingTable />} {/* Render Melange Packaging Table */}


        </div>
    );
}

export default TomatesTradicionalComoditysDetalle;
