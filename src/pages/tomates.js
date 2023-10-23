import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom/dist';
import { Link } from 'react-router-dom/dist';
import amela2 from '../assets/tomatedulce/amela/amela2.jpg';
import dulcextra2 from '../assets/tomatedulce/dulcextra/dulcextra1.jpg';
import adora2 from '../assets/tradicional/adora/adora2.jpg';
import primora2 from '../assets/tradicional/primora/primora2.jpg';
import chocmato1 from '../assets/tradicional/chocmato/chocmato2.jpg';
import antociano1 from '../assets/tradicional/antociano/antociano2.jpg';
import monterosa from '../assets/tradicional/monterosa/monterosa2.jpg';
import beef from '../assets/tradicional/beef/beef2.jpg';
import pera from '../assets/tradicional/pera/pera2.jpg';
import peranaranja from '../assets/tradicional/peranaranja/peranaranja.jpg';

import corazonbuey from '../assets/tradicional/corazonbuey/corazonbuey2.jpg';
import melange from '../assets/tradicional/melange/melange2.jpg';


function Tomates({isSpanish}) {
  const cards = [
    {
      nombre: {
        es: 'Amela',
        en: 'Amela',
    },
      imagen: amela2,
    },
    {
      nombre: {
        es: 'Dulcextra',
        en: 'Dulcextra',
    },

      imagen: dulcextra2,
    },
    {
      nombre: {
        es: 'Adora',
        en: 'Adora',
    },

      imagen: adora2,
    },
    {
      nombre: {
        es: 'Primora',
        en: 'Primora',
    },

      imagen: primora2,
    },
    {
      nombre: {
        es: 'Chocmato',
        en: 'Chocmato',
    }
,
      imagen: chocmato1,
    },
    {
      nombre: {
        es: 'Monterosa',
        en: 'Monterosa',
    },

      imagen: monterosa,
    },

    {
      nombre: {
        es: 'Murice',
        en: 'Murice',
    },
      imagen: antociano1,
    },
    {
      nombre: {
        es: 'Beef',
        en: 'Beef',
    },
      imagen: beef,
    },
    {
      nombre: {
        es: 'Pera Rojo',
        en: 'Red Plum',
    },

      imagen: pera,
    },
    {
      nombre: {
        es: 'Pera Naranja',
        en: 'Orange Plum',
    },
      imagen: peranaranja,
    },

    {
      nombre: {
        es: 'Corazón de buey',
        en: 'Corazón de buey',
    },
      imagen: corazonbuey,
    },
    {
      nombre: {
        es: 'Melange',
        en: 'Melange',
    },
      imagen: melange,
    },


  ];





  
  const location = useLocation();

  // Utiliza useEffect para detectar cambios en la ubicación y desplazar hacia arriba
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar hacia arriba al principio del componente
  }, [location.pathname]); // Detectar cambios en la ubicación


  return (


    <div className="relative text-center py-16 animate-fade-down">
      <div className="container relative m-auto px-6 text-gray-500 md:px-12">
        <h2 className="mb-5 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">Tomates</h2>
        <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
          {cards.map((cards) => (
            <Link
              key={cards.nombre.es}
              to={`/tomates/${cards.nombre.es.toLowerCase().replace(/ /g, '_')}`}
              className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:transform hover:scale-105 duration-500 ease-in-out hover:shadow-2xl hover:border-red-400"
            >
              <img className="mx-auto w-120" src={cards.imagen} alt="illustration" loading="lazy" />
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
              {isSpanish ? cards.nombre.es.split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : cards.nombre.en.split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tomates;



// <>
// <TomatesNuevasTendencias/>
// <TomatesTradicionalMarcas/>
// <TomatesTradicional/>
// </>

