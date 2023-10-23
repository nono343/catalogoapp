import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom/dist';
import { Link } from 'react-router-dom';
import bacon from '../assets/aguacates/bacon/bacon.jpg';
import fuerte from '../assets/aguacates/fuerte/fuerte.jpg';
import pinkerton from '../assets/aguacates/pinkerton/pinkerton.jpg';
import hass from '../assets/aguacates/hass/hass.jpg';
import osteen from '../assets/mangos/osteen/osteen.jpg';
import irwin from '../assets/mangos/irwin/irwin.jpg';
import keitt from '../assets/mangos/keitt/keitt.jpg';
import purpura from '../assets/pitahayas/purpura/purpura.jpg';
import rosa from '../assets/pitahayas/rosa/rosa.jpg';
import blanca from '../assets/pitahayas/blanca/blanca.jpg';
import miniirwin from '../assets/mangos/miniirwin/miniirwin.jpg';
import chirimoya from '../assets/otrasvariedades/chirimoya/chirimoya.jpg';
import caviarcitrico from '../assets/otrasvariedades/caviarcitrico/caviarcitrico.jpg';
import nispora from '../assets/otrasvariedades/nispora/nispora.jpg';


function Tropicales() {
  const cards = [
    {
      nombre: 'Aguacate Bacon',
      imagen: bacon,
    },
    {
      nombre: 'Aguacate Hass',
      imagen: hass,
    },
    {
      nombre: 'Aguacate Fuerte',
      imagen: fuerte,
    },
    {
      nombre: 'Aguacate Pinkerton',
      imagen: pinkerton,
    },
    {
      nombre: 'Mango Osteen',
      imagen: osteen,
    },
    {
      nombre: 'Mango Irwin',
      imagen: irwin,
    },
    {
      nombre: 'Mango Keitt',
      imagen: keitt,
    },
    {
      nombre: 'Mango Miniirwin',
      imagen: miniirwin,
    },
    {
      nombre: 'Pitahaya Púrpura',
      imagen: purpura,
  },
  {
      nombre: 'Pitahaya Rosa',
      imagen: rosa,
  },
  {
      nombre: 'Pitahaya Blanca',
      imagen: blanca,
  },

    {
      nombre: 'Chirimoya Fino de Jete',
      imagen: chirimoya,
    },
    {
      nombre: 'Caviar Cítrico',
      imagen: caviarcitrico,
    },
    {
      nombre: 'Níspora',
      imagen: nispora,
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
        <h2 className="mb-5 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Tropicales
        </h2>
        <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.nombre}
              to={`/tropicales/${card.nombre.toLowerCase().replace(/ /g, '_')}`}
              className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105 duration-500 ease-in-out hover:shadow-2xl hover:border-red-400"
            >
              <img className="mx-auto w-120" src={card.imagen} alt="illustration" loading="lazy" />
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                {card.nombre.split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tropicales;
