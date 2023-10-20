import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import bacon from '../../assets/aguacates/bacon/bacon.jpg';
import hass from '../../assets/aguacates/hass/hass.jpg';
import fuerte from '../../assets/aguacates/fuerte/fuerte.jpg';
import pinkerton from '../../assets/aguacates/pinkerton/pinkerton.jpg';
import AguacatePackagingTable from '../../components/packagingtables/aguacatePackagingTable';


function AguacateDetalle() {
    let { nombreCard } = useParams();

    // Define un objeto de imágenes
    const cardImages = {
        bacon: bacon,
        hass: hass,
        fuerte: fuerte,
        pinkerton: pinkerton,
    };

    const cardDescriptions = {
        bacon: `
            <strong>Cremosidad y sabor
            </strong>
            <p>Su delicioso interior de sabor suave y 
            textura cremosa conquista con su color 
            amarillo verdoso, protegido por una piel 
            lisa, suave y delicada de color verde 
            oscuro con ligeras motas.</p>
            <p>De forma ovalada y fácil de pelar, 
            destaca por sus propiedades 
            cardiosaludables en la cantidad y 
            calidad de sus grasas nutritivas, siendo 
            un remedio natural para el colesterol. 
            Sobresale también sobre otras frutas 
            por su contenido en vitaminas, potasio y 
            magnesio.</p>
            <p>Deleita tu paladar con esta exquisita 
            fruta tropical.</p>
        `,
        hass: `
            <strong>Una delicia tropical
            </strong> 
            <p>Fruto de sabor suave que recuerda a 
            la avellana. La piel verde oscura del 
            aguacate envuelve un delicioso interior 
            de color verde tierno y cremoso al 
            paladar,escondiendo en su interior una 
            gran semilla marrón. </p>
            <p>Un sabor exquisito y delicado lleno de 
            magníficas propiedades.</p>
            <p>Rico en magnesio, fibra y vitaminas, 
            regula los niveles de colesterol y azúcar.</p>
            <p>El aguacate es un todoterreno, combina 
            con casi cualquier alimento.: canapés, 
            entrantes o primeros platos, postres, 
            como acompañamiento...</p>
            <p>¿Quién puede decir que no a un alimento 
            tan completo?</p>

        `,
        fuerte: `
        <strong>Triple dulzor
        </strong> 
        <p>Tribelli® es mucho más que un pimiento, 
        es la concentración del placer intenso. 
        El resultado de un intenso proceso de 
        mejora donde el sabor y el dulzor son la 
        prioridad. </p>
        <p>Nuestros triminipimientos son el snack 
        más divertido, delicioso además de 
        saludable. Perfecto para dar un toque 
        diferente a tus creaciones.</p>
        <p>Se pueden servir en crudo, salteados, 
        cocidos, a la parrilla o al horno.</p>

    `,
        pinkerton: `
        <strong>Exótico manjar
        </strong> 
        <p>Su particular forma aperada marcada 
        por un largo cuello lo diferencia 
        del aguacate rugoso tradicional, 
        manteniendo una piel ligeramente 
        pedregosa verde oscura con un cremoso 
        interior verde pálido con un buen 
        contenido en aceite.</p>
        <p>Una deliciosa y sana fruta fácil de 
        pelar que nos aporta un refuerzo de 
        nutrientes.</p>
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
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">4</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">5</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">6</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">7</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">8</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">9</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">10</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">11</div>
                    <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">12</div>
                </div>
            </div>


            <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6">
            </div>
            <AguacatePackagingTable />
        </div>
    );
}

export default AguacateDetalle;
