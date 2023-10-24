import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import appCards from '../components/appCards';




function Tropicales({ isSpanish }) {

  const location = useLocation();

  const selectedTropicalesCards = appCards.slice(30, 44); // Esto mostrará las primeras nueve tarjetas

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);



  return (
    <div className="relative text-center py-16 animate-fade-down">
      <div className="container m-auto px-6 text-gray-500 md:px-12">
        <h2 className="mb-5 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          {isSpanish ? 'Tropicales' : 'Tropical Fruits'}
        </h2>

        <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
          {selectedTropicalesCards.map((card, index) => (
            <Link
              key={card.nombre + index} // Usar una combinación de card.nombre y el índice para crear claves únicas
              to={`/tropicales/${card.nombre.es.toLowerCase().replace(/ /g, '_')}`} 
              className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105 duration-500 ease-in-out hover:shadow-2xl hover:border-red-400"
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

export default Tropicales;
