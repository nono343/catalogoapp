import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import amela from '../../assets/tomatedulce/amela/amela1.jpg';
import dulcextra from '../../assets/tomatedulce/dulcextra/dulcextra1.jpg';

import adora from '../../assets/tradicional/adora/adora2.jpg';
import primora from '../../assets/tradicional/primora/primora2.jpg';
import chocmato from '../../assets/tradicional/chocmato/chocmato2.jpg';
import monterosa from '../../assets/tradicional/monterosa/monterosa1.jpg';
import murice from '../../assets/tradicional/antociano/antociano2.jpg';
import beef from '../../assets/tradicional/beef/beef1.jpg';
import pera from '../../assets/tradicional/pera/pera1.jpg';
import corazonbuey from '../../assets/tradicional/corazonbuey/corazonbuey1.jpg';
import melange from '../../assets/tradicional/melange/melange1.jpg';


import AdoraPackagingTable from '../../components/packagingtables/adoraPackagingTable';
import PrimoraPackagingTable from '../../components/packagingtables/primoraPackagingTable';
import ChocmatoPackagingTable from '../../components/packagingtables/chocmatoPackagingTable';
import AntocianoPackagingTable from '../../components/packagingtables/antocianoPackagingTable';
import MonterosaPackagingTable from '../../components/packagingtables/monterosaPackagingTable';
import AmelaPackagingTable from '../../components/packagingtables/amelaPackagingTable';
import DulceextraPackagingTable from '../../components/packagingtables/dulceextraPackagingTable';
import BeefPackagingTable from '../../components/packagingtables/beefPackagingTable';
import PeraPackagingTable from '../../components/packagingtables/peraPackagingTable';
import CorazondebueyPackagingTable from '../../components/packagingtables/corazondebueyPackagingTable';
import MelangePackagingTable from '../../components/packagingtables/melangePackagingTable';




function TomatesDetalle({ isSpanish }) {
    let { nombreCard } = useParams();
    console.log('nombreCard:', nombreCard);

    const cardNames = {
        amela: {
            es: "Amela",
            en: "Amela",
        },

        dulcextra: {
            es: "Dulcextra",
            en: "Dulcextra",
        },

        adora: {
            es: "Adora",
            en: "Adora",
        },

        primora: {
            es: "Primora",
            en: "Primora",
        },

        chocmato: {
            es: "Chocmato",
            en: "Chocmato",
        },

        murice: {
            es: "Murice",
            en: "Murice",
        },

        monterosa: {
            es: "Monterosa",
            en: "Monterosa",
        },

        beef: {
            es: "Beef",
            en: "Beef",
        },

        pera_rojo: {
            es: 'Pera Rojo',
            en: 'Red Plum',
        },
        red_plum: {
            es: 'Pera Rojo',
            en: 'Red Plum',
        },

        pera_naranja: {
            es: 'Pera Rojo',
            en: 'Orange Plum',
        },
        orange_plum: {
            es: 'Pera Naranja',
            en: 'Oranje Plum',
        },

        corazón_de_buey: {
            es: 'Corazón De Buey',
            en: 'Oxheart',
        },
        oxheart: {
            es: 'Corazón De Buey',
            en: 'Oxheart',
        },

        melange: {
            es: 'Melange',
            en: 'Melange',
        },



        // Agrega otros nombres de tarjetas aquí
    };

    const cardName = cardNames[nombreCard][isSpanish ? 'es' : 'en'];

    const cardImages = {
        amela: amela,
        dulcextra: dulcextra,
        adora: adora,
        primora: primora,
        chocmato: chocmato,
        murice: murice,
        monterosa: monterosa,
        beef: beef,
        pera_rojo: pera,
        red_plum: pera,
        pera_naranja: pera,
        orange_plum: pera,
        corazón_de_buey: corazonbuey,
        oxheart: corazonbuey,
        melange: melange,

    };

    const cardDescriptions = {
        amela: {
            es: `
        <strong>¿Es realmente Amela® un tomate?</strong>
        <p>Quizá sea debido a su rico, dulce e intenso sabor por lo que a menudo los clientes
        piensan que Amela® es una fruta.</p>
        <p>Este tomate trae consigo un toque oriental que lo hace único e inigualable.</p>
        <p>Nuestro objetivo no es sólo hacer un buen tomate, sino también tocar tu corazón.</p>
        en
                `,
            en: `
      <strong>Is Amela® really a tomato?</strong>
      <p>Perhaps it's due to its rich, sweet, and intense flavor that customers often think Amela® is a fruit.</p>
      <p>This tomato brings with it an oriental touch that makes it unique and incomparable.</p>
      <p>Our goal is not only to make a good tomato but also to touch your heart.</p>
        `},
        dulcextra: {
            es: `
            <strong>Descubre el tomate dulce</strong>
            <p>Un tomate con un exquisito equilibrio
            entre dulzura y acidez que cautiva al
            consumidor con un sabor personal.</p>
            <p>Disfruta compartiendo su dulce, rico e intenso sabor
            con familia o amigos.</p>
            `,
            en: `
            <strong>Discover the Sweet Tomato</strong>
            <p>A tomato with an exquisite balance
            of sweetness and acidity that captivates
            the consumer with a personal taste.</p>
            <p>Enjoy sharing its sweet, rich, and intense flavor
            with family or friends.</p>`,
        },

        adora: {
            es: `
            <strong>Passion for Flavor</strong>
            <p>A tomato that stimulates all the senses.</p>
            <p>Adora® is a unique and strong-willed tomato marked by its striking dark brown color and intense green shoulders.</p>
            <p>Its flavor is a perfect balance between sweetness and acidity, the result of the fusion of tradition and innovation.</p>
            `,
            en: `
            <strong>Passion for Flavor</strong>
            <p>A tomato that stimulates all the senses.</p>
            <p>Adora® is a unique and strong-willed tomato marked by its striking dark brown color and intense green shoulders.</p>
            <p>Its flavor is a perfect balance between sweetness and acidity, the result of the fusion of tradition and innovation.</p>
            `,
        },

        primora: {
            es: `
            <strong>The Aromatic Marmande Tomato</strong>
            <p>A Marmande-type tomato variety characterized by its distinctive ribbed shape and attractive dark brown color with intense green shoulders.</p>
            <p>Irresistible character and flavor, thanks to the perfect balance of sweetness and acidity, as well as a high concentration of vitamins.</p>
            <p>Discover its unparalleled crunchy texture and unique flavor.</p>
            `,
            en: `
            <strong>The Aromatic Marmande Tomato</strong>
            <p>A Marmande-type tomato variety characterized by its distinctive ribbed shape and attractive dark brown color with intense green shoulders.</p>
            <p>Irresistible character and flavor, thanks to the perfect balance of sweetness and acidity, as well as a high concentration of vitamins.</p>
            <p>Discover its unparalleled crunchy texture and unique flavor.</p>
            `,
        },

        chocmato: {
            es: `
            <strong>A Surprising Delight</strong>
            <p>Let yourself be seduced by the intense and exotic chocolate color of this pear cherry tomato.</p>
            <p>An exquisite tomato that sets itself apart with a unique texture and ripening process that enhance its characteristics.</p>
            <p>The Minichocmato® tomatoes are very juicy, with a firm texture. Despite their unusual appearance, this tomato family has an intensely unique and incredibly pleasant flavor.</p>
            <p>They have a higher sweetness than traditional tomatoes, balanced by slightly acidic notes.</p>
            `,
            en: `
            <strong>A Surprising Delight</strong>
            <p>Let yourself be seduced by the intense and exotic chocolate color of this pear cherry tomato.</p>
            <p>An exquisite tomato that sets itself apart with a unique texture and ripening process that enhance its characteristics.</p>
            <p>The Minichocmato® tomatoes are very juicy, with a firm texture. Despite their unusual appearance, this tomato family has an intensely unique and incredibly pleasant flavor.</p>
            <p>They have a higher sweetness than traditional tomatoes, balanced by slightly acidic notes.</p>
            `,
        },

        monterosa: {
            es: `
            <strong>Fall in Love Again with Tomatoes!</strong>
            <p>The Monterosa tomato is incomparable. This new tomato brand is here to stay. Its asymmetrical, flattened, and deeply ribbed shape gives it a delicate and distinctive appearance. The pink color of its ripeness and its intense herbal aroma make it simply irresistible.</p>
            <p>Juicy and flavorful, the Monterosa Tomato is the perfect combination of taste, texture, shape, and color.</p>
            `,
            en: `
            <strong>Fall in Love Again with Tomatoes!</strong>
            <p>The Monterosa tomato is incomparable. This new tomato brand is here to stay. Its asymmetrical, flattened, and deeply ribbed shape gives it a delicate and distinctive appearance. The pink color of its ripeness and its intense herbal aroma make it simply irresistible.</p>
            <p>Juicy and flavorful, the Monterosa Tomato is the perfect combination of taste, texture, shape, and color.</p>
            `,
        },

        murice: {
            es: `
            <strong>Seductive, Vibrant, with Character</strong>
            <p>The Murex sea snail is a mollusk that hides a unique secret. Inside, it holds a substance that dyes what it touches a royal purple color. Cleopatra used it to dye the sails of her ship to flatter Caesar.</p>
            <p>This beautiful story inspired the Murice Tomato, which stands out for its attractive and beautiful purple color obtained thanks to its high concentration of anthocyanins, which provide great health benefits.</p>
            <p>Although Murice departs from the traditional tomato, it's perfect to consume in salads, as a side dish, or as an appetizer. Intense in its form and background, it hides magical secrets inside.</p>
            `,
            en: `
            <strong>Seductive, Vibrant, with Character</strong>
            <p>The Murex sea snail is a mollusk that hides a unique secret. Inside, it holds a substance that dyes what it touches a royal purple color. Cleopatra used it to dye the sails of her ship to flatter Caesar.</p>
            <p>This beautiful story inspired the Murice Tomato, which stands out for its attractive and beautiful purple color obtained thanks to its high concentration of anthocyanins, which provide great health benefits.</p>
            <p>Although Murice departs from the traditional tomato, it's perfect to consume in salads, as a side dish, or as an appetizer. Intense in its form and background, it hides magical secrets inside.</p>
            `,
        },

        beef: {
            es: `
            <strong>The Taste of Yesteryears</strong>
            <p>The Beef tomato is an ancestral tomato with thick walls, a fleshy and consistent body.</p>
            <p>A great ally for everyday life.</p>
            <p>The classic of all time that preserves the best of yesteryears in our homes.</p>
            `,
            en: `
            <strong>The Taste of Yesteryears</strong>
            <p>The Beef tomato is an ancestral tomato with thick walls, a fleshy and consistent body.</p>
            <p>A great ally for everyday life.</p>
            <p>The classic of all time that preserves the best of yesteryears in our homes.</p>
            `,
        },


        pera_rojo: {
            es: `
          <strong>¿Es realmente Amela® un tomate?</strong>
          <p>Quizá sea debido a su rico, dulce e intenso sabor por lo que a menudo los clientes
          piensan que Amela® es una fruta.</p>
          <p>Este tomate trae consigo un toque oriental que lo hace único e inigualable.</p>
          <p>Nuestro objetivo no es sólo hacer un buen tomate, sino también tocar tu corazón.</p>
          en
        `,
            en: `
        <strong>Is Amela® really a tomato?</strong>
        <p>Perhaps it's due to its rich, sweet, and intense flavor that customers often think Amela® is a fruit.</p>
        <p>This tomato brings with it an oriental touch that makes it unique and incomparable.</p>
        <p>Our goal is not only to make a good tomato but also to touch your heart.</p>
      `},
        red_plum: {
            es: `
          <strong>¿Es realmente Amela® un tomate?</strong>
          <p>Quizá sea debido a su rico, dulce e intenso sabor por lo que a menudo los clientes
          piensan que Amela® es una fruta.</p>
          <p>Este tomate trae consigo un toque oriental que lo hace único e inigualable.</p>
          <p>Nuestro objetivo no es sólo hacer un buen tomate, sino también tocar tu corazón.</p>
          en
        `,
            en: `
          <strong>Is Amela® really a tomato?</strong>
          <p>Perhaps it's due to its rich, sweet, and intense flavor that customers often think Amela® is a fruit.</p>
          <p>This tomato brings with it an oriental touch that makes it unique and incomparable.</p>
          <p>Our goal is not only to make a good tomato but also to touch your heart.</p>
        `},

        corazón_de_buey: {
            es: `
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
            en: `
            <strong>The Quintessential Flavor</strong>
            <p>The Oxheart Tomato has very thin skin that houses a very fleshy fruit with very few seeds in its chambers.</p>
            <p>Its flavor is delicious, very juicy, perfect for enjoying with a little salt and extra virgin olive oil.</p>
            <p>It is precisely this tomato that is often used to make the Italian Caprese salad.</p>
            <p>The color of the Oxheart Tomato is intense and bright red.</p>
            `,
        },
        oxheart: {
            es: `
            <strong>The Quintessential Flavor</strong>
            <p>The Oxheart Tomato has very thin skin that houses a very fleshy fruit with very few seeds in its chambers.</p>
            <p>Its flavor is delicious, very juicy, perfect for enjoying with a little salt and extra virgin olive oil.</p>
            <p>It is precisely this tomato that is often used to make the Italian Caprese salad.</p>
            <p>The color of the Oxheart Tomato is intense and bright red.</p>
            `,
            en: `
            <strong>The Quintessential Flavor</strong>
            <p>The Oxheart Tomato has very thin skin that houses a very fleshy fruit with very few seeds in its chambers.</p>
            <p>Its flavor is delicious, very juicy, perfect for enjoying with a little salt and extra virgin olive oil.</p>
            <p>It is precisely this tomato that is often used to make the Italian Caprese salad.</p>
            <p>The color of the Oxheart Tomato is intense and bright red.</p>
            `,
        },

        melange: {
            es: `
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
            en: `
            <strong>A Very Fruitful Gathering</strong>
            <p>A selection of our best ancestral tomatoes: Marmande, brown ribbed tomato, anthocyanin ribbed tomato, beef tomato, and pear tomato, in their three color varieties.</p>
            <p>Traditional garden delights with which to experience a universe of flavors, textures, and colors.</p>
            `,
        },

        // Agrega descripciones para otros nombres de tarjetas aquí
    };

    // Obtén la descripción correspondiente al nombre del card
    const descripcion = cardDescriptions[nombreCard][isSpanish ? 'es' : 'en'];
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
                            {cardName}
                        </h1>
                        <p className="mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: descripcion }}></p>
                    </div>
                </div>
            </section>


            {(nombreCard === 'amela' || nombreCard === 'dulcextra' || nombreCard === 'beef' || nombreCard === 'pera_rojo' || nombreCard === 'red_plum' || nombreCard === 'orange_plum' || nombreCard === 'pera_naranja' || nombreCard === 'corazón_de_buey' || nombreCard === 'oxheart') && (
                <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6 animate-fade-down">
                    <h1 className="sm:text-3xl text-center text-2xl mb-5">                        {isSpanish ? 'Calendario de producción' : 'Production Schedule'}</h1>
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



            {(nombreCard === 'adora' || nombreCard === 'primora' || nombreCard === 'chocmato') && (
                <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6 animate-fade-down">
                    <h1 className="sm:text-3xl text-center text-2xl mb-5">
                        {isSpanish ? 'Calendario de producción' : 'Production Schedule'}</h1>
                    <div className="flex justify-center max-w-screen-md mx-auto"> {/* Contenedor que centra los elementos */}
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">1</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">2</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">3</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">4</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">5</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">6</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">7</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">8</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">9</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-gray-200 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">10</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">11</div>
                        <div className="relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 bg-red-600 mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">12</div>
                    </div>
                </div>
            )}

            {(nombreCard === 'monterosa' || nombreCard === 'murice') && (
                <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6 animate-fade-down">
                    <h1 className="sm:text-3xl text-center text-2xl mb-5">
                        {isSpanish ? 'Calendario de producción' : 'Production Schedule'}</h1>

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
            )}


            <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6">
            </div>
            {nombreCard === 'amela' && <AmelaPackagingTable />} {/* Render Adora Packaging Table */}
            {nombreCard === 'dulcextra' && <DulceextraPackagingTable />} {/* Render Adora Packaging Table */}
            {nombreCard === 'adora' && <AdoraPackagingTable />} {/* Render Adora Packaging Table */}
            {nombreCard === 'primora' && <PrimoraPackagingTable />} {/* Render Primora Packaging Table */}
            {nombreCard === 'chocmato' && <ChocmatoPackagingTable />} {/* Render Chocmato Packaging Table */}
            {nombreCard === 'monterosa' && <MonterosaPackagingTable />} {/* Render Murice Packaging Table */}
            {nombreCard === 'murice' && <AntocianoPackagingTable />} {/* Render Murice Packaging Table */}
            {nombreCard === 'beef' && <BeefPackagingTable />} {/* Render Beef Packaging Table */}
            {nombreCard === 'pera_rojo' || nombreCard === 'red_plum' ? <PeraPackagingTable /> : null}
            {nombreCard === 'pera_naranja' || nombreCard === 'orange_plum' ? <PeraPackagingTable /> : null}

            {nombreCard === 'corazón_de_buey' || nombreCard === 'oxheart' ? <CorazondebueyPackagingTable /> : null} {/* Render Corazon de Buey Packaging Table */}
            {nombreCard === 'melange' && <MelangePackagingTable />} {/* Render Melange Packaging Table */}

        </div>
    );
}

export default TomatesDetalle;
