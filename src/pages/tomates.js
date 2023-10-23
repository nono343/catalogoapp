import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom/dist';
import { Link } from 'react-router-dom/dist';
import amela from '../assets/tomatedulce/amela/amela2.jpg';
import dulcextra from '../assets/tomatedulce/dulcextra/dulcextra1.jpg';
import adora from '../assets/tradicional/adora/adora2.jpg';
import primora from '../assets/tradicional/primora/primora2.jpg';
import chocmato from '../assets/tradicional/chocmato/chocmato2.jpg';
import antociano from '../assets/tradicional/antociano/antociano2.jpg';
import monterosa from '../assets/tradicional/monterosa/monterosa2.jpg';
import beef from '../assets/tradicional/beef/beef2.jpg';
import pera from '../assets/tradicional/pera/pera2.jpg';
import peranaranja from '../assets/tradicional/peranaranja/peranaranja.jpg';

import corazonbuey from '../assets/tradicional/corazonbuey/corazonbuey2.jpg';
import melange from '../assets/tradicional/melange/melange2.jpg';


function Tomates({ isSpanish }) {
  const cards = [
    {
      nombre: {
        es: 'Amela',
        en: 'Amela',
      },

      imagen: amela,
    },
    {
      nombre: {
        es: 'Dulcextra',
        en: 'Dulcextra',
      },

      imagen: dulcextra,
    },
    {
      nombre: {
        es: 'Adora',
        en: 'Adora',
      },

      imagen: adora,
    },
    {
      nombre: {
        es: 'Primora',
        en: 'Primora',
      },

      imagen: primora,
    },

    {
      nombre: {
        es: 'Chocmato',
        en: 'Chocmato',
      },

      imagen: chocmato,
    },

    {
      nombre: {
        es: 'Murice',
        en: 'Murice',
      },

      imagen: antociano,
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
        es: 'Corazón De Buey',
        en: 'Oxheart',
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const translations = {
    es: cards.map((card) => card.nombre.es),
    en: cards.map((card) => card.nombre.en),
  };

  return (
    <div className="relative text-center py-16 animate-fade-down">
      <div className="container relative m-auto px-6 text-gray-500 md:px-12">
        <h2 className="mb-5 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Tomates
        </h2>
        <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
          {cards.map((card, index) => (
            <Link
              key={isSpanish ? translations.es[index] : translations.en[index]}
              to={`/tomates/${translations.es[index].toLowerCase().replace(/ /g, '_')}`}
              className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:transform hover:scale-105 duration-500 ease-in-out hover:shadow-2xl hover:border-red-400"
            >
              <img className="mx-auto w-120" src={card.imagen} alt="illustration" loading="lazy" />
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                {isSpanish ? card.nombre.es : card.nombre.en}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tomates;

