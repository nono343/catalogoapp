import React, {useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import adora from '../../assets/tradicional/adora/adora2.jpg';
import primora from '../../assets/tradicional/primora/primora2.jpg';
import chocmato from '../../assets/tradicional/chocmato/chocmato2.jpg';
import monterosa from '../../assets/tradicional/monterosa/monterosa1.jpg';
import murice from '../../assets/tradicional/antociano/antociano2.jpg';
import AdoraPackagingTable from '../../components/packagingtables/adoraPackagingTable';
import PrimoraPackagingTable from '../../components/packagingtables/primoraPackagingTable';
import ChocmatoPackagingTable from '../../components/packagingtables/chocmatoPackagingTable';
import AntocianoPackagingTable from '../../components/packagingtables/antocianoPackagingTable';
import MonterosaPackagingTable from '../../components/packagingtables/monterosaPackagingTable';


function TomatesTradicionalMarcasDetalle() {
    let { nombreCard } = useParams();

    // Define un objeto de imágenes
    const cardImages = {
        adora: adora,
        primora: primora,
        chocmato: chocmato,
        monterosa: monterosa,
        murice: murice,
    };

    const cardDescriptions = {
        adora: `
            <strong>Pasión por el sabor</strong>
            <p>Un tomate que estimula todos los sentidos. </p>
            <p>Adora® es un tomate único y de gran personalidad que viene marcado por su llamativo color marrón oscuro y sus hombros verde intenso.  </p>
            <p>Su sabor es un equilibrio perfecto entre 
            dulzura y acidez, y el resultado de la 
            fusión entre tradición e innovación  </p>

        `,
        primora: `
            <strong>El aromático tomate 
            Marmande</strong> 
            <p>Una variedad de tomate tipo marmande 
            caracterizada por su particular forma 
            acostillada de un atractivo color marrón 
            con hombros verde intenso. </p>
            <p>Carácter y sabor irresistible , gracias al 
            equilibrio perfecto de dulzura y acidez, 
            así como una alta concentración de 
            vitaminas.</p>
            <p>Descubre su inigualable textura crujiente 
            y su sabor único.</p>

        `,
        // chocmato: `
        //     <strong>Un bombón sorprendente</strong>
        //     <p>Déjate seducir por el intenso y exótico color chocolate de este tomate cherry pera.</p>
        //     <p>Un exquisito tomate que marca la diferencia con una textura y maduración únicas, que realzan sus características.</p>
        //     <p>Los tomates Minichocmato® son muy jugosos, con una textura firme. A pesar de su apariencia inusual, esta familia de tomates tiene un intenso sabor único e increíblemente agradable.</p>
        //     <p>Tienen una dulzura más alta que los tomates tradicionales, y se contrarrestan con notas ligeramente ácidas.</p>
        // `,
        monterosa: `
        <strong>¡Reenamórate 
        del tomate!</strong>
        <p>El tomate Monterosa no tiene igual. 
        Esta nueva marca de tomate ha llegado 
        para quedarse. Su forma asimétrica, 
        achatada y muy acostillada le otorga 
        un aspecto delicado y peculiar. El color 
        rosado de su madurez y su intenso 
        aroma herbáceo lo hacen simplemente 
        irresistible. </p>
        <p>Jugoso y sabroso, el Tomate Monterosa 
        es la combinación perfecta de sabor, 
        textura, forma y color</p>
    `,

        murice: `
            <strong>Seductor, vivo, con 
            carácter</strong>
            <p>El caracol de mar Múrice es un molusco que 
            esconde un secreto único. En su interior 
            guarda una substancia que tiñe lo que roza 
            de un color púrpura imperial. Cleopatra lo 
            utilizó para teñir las velas del barco con el 
            propósito de halagar al César</p>
            <p>En esta hermosa historia se inspira el 
            Tomate Murice, que destaca por su 
            atractivo y bello color púrpura obtenido 
            gracias a su alta concentración de 
            antocianinas, las cuáles aportan grades 
            beneficios para la salud</p>
            <p>Aunque Murice se aleja del tomate 
            tradicional, es perfecto para consumir en 
            ensaladas, guarnición o como aperitivo. 
            Intenso en su forma y en su fondo, su 
            interior esconde secretos mágicos.</p>
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
                            {nombreCard.charAt(0).toUpperCase() + nombreCard.slice(1)}
                        </h1>
                        <p className="mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: descripcion }}></p>
                    </div>
                </div>
            </section>

            {(nombreCard === 'adora' || nombreCard === 'primora' || nombreCard === 'chocmato') && (
                <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6">
                    <h1 className="sm:text-3xl text-center text-2xl mb-5">Calendario de producción</h1>
                    <div className="flex justify-center max-w-screen-md mx-auto"> {/* Contenedor que centra los elementos */}
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">1</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">2</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">3</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">4</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">5</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">6</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">7</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">8</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">9</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">10</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">11</a>
                        <a className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">12</a>
                    </div>
                </div>
            )}

            {(nombreCard === 'monterosa' || nombreCard === 'murice') && (
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


            <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6">
            </div>
            {nombreCard === 'adora' && <AdoraPackagingTable />} {/* Render Adora Packaging Table */}
            {nombreCard === 'primora' && <PrimoraPackagingTable />} {/* Render Primora Packaging Table */}
            {nombreCard === 'chocmato' && <ChocmatoPackagingTable />} {/* Render Chocmato Packaging Table */}
            {nombreCard === 'monterosa' && <MonterosaPackagingTable />} {/* Render Murice Packaging Table */}
            {nombreCard === 'murice' && <AntocianoPackagingTable />} {/* Render Murice Packaging Table */}


        </div>
    );
}

export default TomatesTradicionalMarcasDetalle;
