import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import bacon from '../../assets/aguacates/bacon/bacon.jpg';
import hass from '../../assets/aguacates/hass/hass.jpg';
import fuerte from '../../assets/aguacates/fuerte/fuerte.jpg';
import pinkerton from '../../assets/aguacates/pinkerton/pinkerton.jpg';
import mango_osteen from '../../assets/mangos/osteen/osteen.jpg';
import mango_irwin from '../../assets/mangos/irwin/irwin.jpg';
import mango_keitt from '../../assets/mangos/keitt/keitt.jpg';
import mango_miniirwin from '../../assets/mangos/miniirwin/miniirwin.jpg';
import pitahaya_púrpura from '../../assets/pitahayas/purpura/purpura.jpg';
import pitahaya_rosa from '../../assets/pitahayas/rosa/rosa.jpg';
import pitahaya_blanca from '../../assets/pitahayas/blanca/blanca.jpg';
import chirimoya_fino_de_jete from '../../assets/otrasvariedades/chirimoya/chirimoya.jpg';
import caviar_cítrico from '../../assets/otrasvariedades/caviarcitrico/caviarcitrico.jpg';
import nispora from '../../assets/otrasvariedades/nispora/nispora.jpg';
import ChirimoyaPackagingTable from '../../components/packagingtables/chirimoyaPackagingTable';
import CaviarCitricoPackagingTable from '../../components/packagingtables/caviarCitricoPackagingTable';
import PitahayaPackagingTable from '../../components/packagingtables/pitahayaPackagingTable';
import MangoPackagingTable from '../../components/packagingtables/mangoPackagingTable';
import AguacatePackagingTable from '../../components/packagingtables/aguacatePackagingTable';


function TropicalesDetalle() {
    let { nombreCard } = useParams();

    // Define un objeto de imágenes
    const cardImages = {
        aguacate_bacon: bacon,
        aguacate_hass: hass,
        aguacate_fuerte: fuerte,
        aguacate_pinkerton: pinkerton,
        mango_osteen: mango_osteen,
        mango_irwin: mango_irwin,
        mango_keitt: mango_keitt,
        mango_miniirwin: mango_miniirwin,
        pitahaya_púrpura: pitahaya_púrpura,
        pitahaya_rosa: pitahaya_rosa,
        pitahaya_blanca: pitahaya_blanca,
        chirimoya_fino_de_jete: chirimoya_fino_de_jete,
        caviar_cítrico: caviar_cítrico,
        níspora: nispora,
    };

    const cardDescriptions = {
        aguacate_bacon: `
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
        aguacate_hass: `
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
        aguacate_fuerte: `
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
        aguacate_pinkerton: `
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
        mango_osteen: `
        <strong>La fruta tropical 
        por excelencia
        </strong>
        <p>Milenaria fruta procedente de la India, 
        que tiene el rango de Rey de los frutos 
        tropicales.</p>
        <p>Una maravillosa gama de color 
        caracteriza la piel del mango en estado 
        maduro. Tonos verdes, amarillos, 
        naranjas y rojos, envuelven una pulpa 
        jugosa de intenso color amarillo, es por 
        ello que obtenemos un sabor peculiar y 
        exquisitamente dulce.</p>
        <p>Es una fruta dulce muy refrescante, rica 
        en vitaminas A, B y C, baja en grasas y 
        rica en fibra. </p>
        <p>Ideal para ensaladas, postres y zumos. 
        </p>
        <p>Un aliado perfecto para deportistas.
        </p>
`,
        mango_irwin: `
        <strong>La fruta tropical 
        por excelencia
        </strong>
        <p>Milenaria fruta procedente de la India, 
        que tiene el rango de Rey de los frutos 
        tropicales.</p>
        <p>Una maravillosa gama de color 
        caracteriza la piel del mango en estado 
        maduro. Tonos verdes, amarillos, 
        naranjas y rojos, envuelven una pulpa 
        jugosa de intenso color amarillo, es por 
        ello que obtenemos un sabor peculiar y 
        exquisitamente dulce.</p>
        <p>Es una fruta dulce muy refrescante, rica 
        en vitaminas A, B y C, baja en grasas y 
        rica en fibra. </p>
        <p>Ideal para ensaladas, postres y zumos. 
        </p>
        <p>Un aliado perfecto para deportistas.
        </p>
`,
        mango_keitt: `
        <strong>La fruta tropical 
        por excelencia
        </strong>
        <p>Milenaria fruta procedente de la India, 
        que tiene el rango de Rey de los frutos 
        tropicales.</p>
        <p>Una maravillosa gama de color 
        caracteriza la piel del mango en estado 
        maduro. Tonos verdes, amarillos, 
        naranjas y rojos, envuelven una pulpa 
        jugosa de intenso color amarillo, es por 
        ello que obtenemos un sabor peculiar y 
        exquisitamente dulce.</p>
        <p>Es una fruta dulce muy refrescante, rica 
        en vitaminas A, B y C, baja en grasas y 
        rica en fibra. </p>
        <p>Ideal para ensaladas, postres y zumos. 
        </p>
        <p>Un aliado perfecto para deportistas.
        </p>
        `,
        mango_miniirwin: `
<strong>La fruta tropical 
por excelencia
</strong>
<p>Milenaria fruta procedente de la India, 
que tiene el rango de Rey de los frutos 
tropicales.</p>
<p>Una maravillosa gama de color 
caracteriza la piel del mango en estado 
maduro. Tonos verdes, amarillos, 
naranjas y rojos, envuelven una pulpa 
jugosa de intenso color amarillo, es por 
ello que obtenemos un sabor peculiar y 
exquisitamente dulce.</p>
<p>Es una fruta dulce muy refrescante, rica 
en vitaminas A, B y C, baja en grasas y 
rica en fibra. </p>
<p>Ideal para ensaladas, postres y zumos. 
</p>
<p>Un aliado perfecto para deportistas.
</p>
`,
        pitahaya_púrpura: `
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
        pitahaya_rosa: `
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
        pitahaya_blanca: `
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
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 animate-fade-right">
                        <img
                            src={cardImages[nombreCard]}
                            alt={nombreCard}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center animate-fade-left">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            {nombreCard.split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </h1>
                        <p className="mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: descripcion }}></p>
                    </div>
                </div>
            </section>
            {(nombreCard === 'aguacate_bacon' || nombreCard === 'aguacate_hass' || nombreCard === 'aguacate_fuerte' || nombreCard === 'aguacate_pinkerton') && (

                <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6 animate-fade-down">
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
            )}

            {(nombreCard === 'mango_osteen' || nombreCard === 'mango_irwin' || nombreCard === 'mango_keitt' || nombreCard === 'mango_kent' || nombreCard === 'mango_miniirwin') && (

                <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6 animate-fade-down">
                    <h1 className="sm:text-3xl text-center text-2xl mb-5">Calendario de producción</h1>
                    <div className="flex justify-center max-w-screen-md mx-auto"> {/* Contenedor que centra los elementos */}
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">1</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">2</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">3</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">4</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">5</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">6</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">7</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">8</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">9</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">10</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">11</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">12</div>
                    </div>
                </div>
            )}

            {(nombreCard === 'pitahaya_púrpura' || nombreCard === 'pitahaya_rosa' || nombreCard === 'pitahaya_blanca') && (

                <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6 animate-fade-down">
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


            {(nombreCard === 'chirimoya_fino_de_jete' || nombreCard === 'níspora') && (
                <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6 animate-fade-down">
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
                <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6 animate-fade-down">
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

            <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6">
            </div>
            {(nombreCard === 'aguacate_bacon' || nombreCard === 'aguacate_hass' || nombreCard === 'aguacate_fuerte' || nombreCard === 'aguacate_pinkerton') && (<AguacatePackagingTable />)}
            {(nombreCard === 'mango_osteen' || nombreCard === 'mango_irwin' || nombreCard === 'mango_keitt' || nombreCard === 'mango_kent' || nombreCard === 'mango_miniirwin') && (<MangoPackagingTable />)}
            {(nombreCard === 'pitahaya_púrpura' || nombreCard === 'pitahaya_rosa' || nombreCard === 'pitahaya_blanca') && (<PitahayaPackagingTable />)}
            {(nombreCard === 'chirimoya_fino_de_jete') && (<ChirimoyaPackagingTable />)}
            {(nombreCard === 'níspora') && (<CaviarCitricoPackagingTable />)}
            {(nombreCard === 'caviar_cítrico') && (<CaviarCitricoPackagingTable />)}
        </div>
    );
}

export default TropicalesDetalle;
