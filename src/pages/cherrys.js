import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom/dist';

import redondoamarillo from '../assets/cherryredondo/amarillo/cherryamarillo1.jpg';
import redondorojo from '../assets/cherryredondo/rojo/cherryrojo1.jpg';
import peraamarillo from '../assets/cherrypera/amarillo/amarillo1.jpg';
import peraangelle from '../assets/cherrypera/angelle/angelle1.jpg';
import perachocolate from '../assets/cherrypera/chocolate/chocolate.jpg';
import perafresa from '../assets/cherrypera/fresa/fresa.jpg';
import peranaranja from '../assets/cherrypera/naranja/naranja.jpg';
import perapeppermato from '../assets/cherrypera/peppermato/peppermato.jpg';
import perarama from '../assets/cherrypera/rama/rama.jpg';


function Cherrys() {
  const cards = [
    {
      nombre: 'Redondo_Amarillo',
      imagen: redondoamarillo,
    },
    {
      nombre: 'Redondo_Rojo',
      imagen: redondorojo,
    },

    {
      nombre: 'Pera_Amarillo',
      imagen: peraamarillo,
    },
    {
      nombre: 'Pera_Angelle',
      imagen: peraangelle,
    },
    {
      nombre: 'Pera_Chocolate',
      imagen: perachocolate,
    },
    {
      nombre: 'Pera_Fresa',
      imagen: perafresa,
    },
    {
      nombre: 'Pera_Naranja',
      imagen: peranaranja,
    },
    {
      nombre: 'Pera_Peppermato',
      imagen: perapeppermato,
    },
    {
      nombre: 'Pera_Rama',
      imagen: perarama,
    },


  ];

  const location = useLocation();

  // Utiliza useEffect para detectar cambios en la ubicación y desplazar hacia arriba
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar hacia arriba al principio del componente
  }, [location.pathname]); // Detectar cambios en la ubicación

  return (
    <div className="relative py-16">
      <div className="container relative text-center m-auto px-6 text-gray-500 md:px-12">
      <h2 className="mb-5 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                    Cherrys
                </h2>

        <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-4">
          {cards.map((card) => (
            <Link
              key={card.nombre}
              to={`/cherrys/${card.nombre.toLowerCase().replace(/ /g, '_')}`}

              className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105"
            >
              <img className="mx-auto w-120" src={card.imagen} alt="illustration" loading="lazy" />
              <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">
              {card.nombre.split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}

                </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cherrys;
