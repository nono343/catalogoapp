import React, { useState, useEffect, useMemo, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Search from './components/search';
import ScrollToTop from './components/scrollToTop';
import Hero from './pages/hero';
import Tomates from './pages/tomates';
import Cherrys from './pages/cherrys';
import Minivegetales from './pages/minivegetales';
import Tradicionales from './pages/tradicionales';
import Tropicales from './pages/tropicales';
import VGama from './pages/vGama';
import CherryDetalle from './pages/detailPages/cherryDetalle';
import TomatesDetalle from './pages/detailPages/tomatesDetalle';
import MinivegetalesDetalle from './pages/detailPages/minivegetalesDetalle';
import VerduraTradicionalDetalle from './pages/detailPages/verduraTradicionalDetalle';


import amela from './assets/tomatedulce/amela/amela2.jpg';
import dulcextra from './assets/tomatedulce/dulcextra/dulcextra2.jpg';
import adora from './assets/tradicional/adora/adora1.jpg';
import primora from './assets/tradicional/primora/primora1.jpg';
import chocmato from './assets/tradicional/chocmato/chocmato1.jpg';
import monterosa from './assets/tradicional/monterosa/monterosa1.jpg';
import murice from './assets/tradicional/antociano/antociano1.jpg';
import beef from './assets/tradicional/beef/beef2.jpg';
import pera from './assets/tradicional/pera/pera2.jpg';
import corazonbuey from './assets/tradicional/corazonbuey/corazonbuey2.jpg';
import melange from './assets/tradicional/melange/melange2.jpg';

import redondoamarillo from './assets/cherryredondo/amarillo/cherryamarillo1.jpg';
import redondorojo from './assets/cherryredondo/rojo/cherryrojo1.jpg';


import peraamarillo from './assets/cherrypera/amarillo/amarillo1.jpg';
import peraangelle from './assets/cherrypera/angelle/angelle1.jpg';
import perachocolate from './assets/cherrypera/chocolate/chocolate.jpg';
import perafresa from './assets/cherrypera/fresa/fresa.jpg';
import peranaranja from './assets/cherrypera/naranja/naranja.jpg';
import perapeppermato from './assets/cherrypera/peppermato/peppermato.jpg';
import rama from './assets/cherrypera/rama/rama.jpg';

import mycubies from './assets/minivegetales/mycubies/mycubies.jpg';
import tribelli from './assets/minivegetales/tribelli/tribelli.jpg';

import berenjena from './assets/tradicionales/berenjena/berenjena.jpg';
import pimientolamuyo from './assets/tradicionales/pimientolamuyo/pimientolamuyo.jpg';
import pimientopadron from './assets/tradicionales/pimientopadron/pimientopadron.jpg';
import pimientospicantes from './assets/tradicionales/pimientospicantes/pimientospicantes.jpg';
import pimientossweetpalermo from './assets/tradicionales/pimientosweetpalermo/pimientosweetpalermo.jpg';
import calabacinredondo from './assets/tradicionales/calabacinredondo/calabacinredondo.jpg';
import calabacinalargado from './assets/tradicionales/calabacinalargado/calabacinalargado.jpg';

import bacon from './assets/aguacates/bacon/bacon.jpg';
import fuerte from './assets/aguacates/fuerte/fuerte.jpg';
import pinkerton from './assets/aguacates/pinkerton/pinkerton.jpg';
import hass from './assets/aguacates/hass/hass.jpg';

import osteen from './assets/mangos/osteen/osteen.jpg';
import irwin from './assets/mangos/irwin/irwin.jpg';
import keitt from './assets/mangos/keitt/keitt.jpg';
import miniirwin from './assets/mangos/miniirwin/miniirwin.jpg';

import purpura from './assets/pitahayas/purpura/purpura.jpg';
import rosa from './assets/pitahayas/rosa/rosa.jpg';
import blanca from './assets/pitahayas/blanca/blanca.jpg';

import chirimoya from './assets/otrasvariedades/chirimoya/chirimoya.jpg';
import caviarcitrico from './assets/otrasvariedades/caviarcitrico/caviarcitrico.jpg';
import nispora from './assets/otrasvariedades/nispora/nispora.jpg';
import TropicalesDetalle from './pages/detailPages/tropicalesDetalle';

const imageMappings = {
  '/tomates/amela': amela,
  '/tomates/dulcextra': dulcextra,
  '/tomates/adora': adora,
  '/tomates/primora': primora,
  '/tomates/chocmato': chocmato,
  '/tomates/monterosa': monterosa,
  '/tomates/murice': murice,
  '/tomates/beef': beef,
  '/tomates/pera': pera,
  '/tomates/corazon_de_buey': corazonbuey,
  '/tomates/melange': melange,

  '/cherrys/redondo_amarillo': redondoamarillo,
  '/cherrys/redondo_rojo': redondorojo,

  '/cherrys/pera_amarillo': peraamarillo,
  '/cherrys/pera_angelle': peraangelle,
  '/cherrys/pera_chocolate': perachocolate,
  '/cherrys/pera_fresa': perafresa,
  '/cherrys/pera_naranja': peranaranja,
  '/cherrys/pera_peppermato': perapeppermato,

  '/minivegetales/pepino_cocktail_mycubies': mycubies,
  '/minivegetales/minipimientos_tribelli': tribelli,

  '/tradicionales/berenjena_japonesa': berenjena,
  '/tradicionales/pimiento_sweet_palermo': pimientossweetpalermo,
  '/minivegetales/pimiento_lamuyo': pimientolamuyo,
  '/minivegetales/pimiento_padron': pimientopadron,
  '/minivegetales/pimientos_picantes': pimientospicantes,
  '/minivegetales/calabacin_redondo': calabacinredondo,
  '/minivegetales/calabacin_alargado': calabacinalargado,

  '/tropicales/aguacate_bacon': bacon,
  '/tropicales/aguacate_hass': hass,
  '/tropicales/aguacate_fuerte': fuerte,
  '/tropicales/aguacate_pinkerton': pinkerton,


  '/tropicales/mango_osteen': osteen,
  '/tropicales/mango_irwin': irwin,
  '/tropicales/mango_keitt': keitt,
  '/tropicales/mango_miniirwin': miniirwin,

  '/tropicales/pitahaya_purpura': purpura,
  '/tropicales/pitahaya_rosa': rosa,
  '/tropicales/pitahaya_blanca': blanca,

  '/tropicales/chirimoya_fino_de_jete': chirimoya,
  '/tropicales/caviar_cítrico': caviarcitrico,
  '/tropicales/nispora': nispora,
  // Agrega más rutas e imágenes según tus necesidades
};

function App() {

  const allRoutes = useMemo(() => [
    { label: 'Tomate Amela', path: '/tomates/amela' },
    { label: 'Tomate Dulcextra', path: '/tomates/dulcextra' },
    { label: 'Tomate Adora', path: '/tomates/adora' },
    { label: 'Tomate Primora', path: '/tomates/primora' },
    { label: 'Tomate Chocmato', path: '/tomates/chocmato' },
    { label: 'Tomate Monterosa', path: '/tomates/monterosa' },
    { label: 'Tomate Murice', path: '/tomates/murice' },
    { label: 'Tomate Beef', path: '/tomates/beef' },
    { label: 'Tomate Pera', path: '/tomates/pera' },
    { label: 'Tomate Corazon De Buey', path: '/tomates/corazon_de_buey' },
    { label: 'Tomate Melange', path: '/tomates/melange' },

    { label: 'Cherry Redondo Amarillo', path: '/cherrys/redondo_amarillo' },
    { label: 'Cherry Redondo Rojo', path: '/cherrys/redondo_rojo' },

    { label: 'Cherry Pera Amarillo', path: '/cherrys/pera_amarillo' },
    { label: 'Cherry Pera Angelle', path: '/cherrys/pera_angelle' },
    { label: 'Cherry Pera Chocolate', path: '/cherrys/pera_chocolate' },
    { label: 'Cherry Pera Fresa', path: '/cherrys/pera_fresa' },
    { label: 'Cherry Pera Naranja', path: '/cherrys/pera_naranja' },
    { label: 'Cherry Pera Peppermato', path: '/cherrys/pera_peppermato' },

    { label: 'Pepino Cocktail Mycubies', path: '/minivegetales/pepino_cocktail_mycubies' },
    { label: 'Minipimientos Tribelli', path: '/minivegetales/minipimientos_tribelli' },

    { label: 'Berenjena Japonesa', path: '/tradicionales/berenjena_japonesa' },
    { label: 'Pimiento Sweet Palermo', path: '/tradicionales/pimiento_sweet_palermo' },
    { label: 'Pimiento Lamuyo', path: '/minivegetales/pimiento_lamuyo' },
    { label: 'Pimiento Padrón', path: '/minivegetales/pimiento_padron' },
    { label: 'Pimientos Picantes', path: '/minivegetales/pimientos_picantes' },
    { label: 'Calabacín Redondo', path: '/minivegetales/calabacin_redondo' },
    { label: 'Calabacín Alargado', path: '/minivegetales/calabacin_alargado' },

    { label: 'Aguacate Bacon', path: '/tropicales/aguacate_bacon' },
    { label: 'Aguacate Hass', path: '/tropicales/aguacate_hass' },
    { label: 'Aguacate Fuerte', path: '/tropicales/aguacate_fuerte' },
    { label: 'Aguacate Pinkerton', path: '/tropicales/aguacate_pinkerton' },


    { label: 'Mango Osteen', path: '/tropicales/mango_osteen' },
    { label: 'Mango Irwin', path: '/tropicales/mango_irwin' },
    { label: 'Mango Keitt', path: '/tropicales/mango_keitt' },
    { label: 'Mango Miniirwin', path: '/tropicales/mango_miniirwin' },

    { label: 'Pitahaya Púrpura', path: '/tropicales/pitahaya_purpura' },
    { label: 'Pitahaya Rosa', path: '/tropicales/pitahaya_rosa' },
    { label: 'Pitahaya Blanca', path: '/tropicales/pitahaya_blanca' },

    { label: 'Chirimoya Fino De Jete', path: '/tropicales/chirimoya_fino_de_jete' },
    { label: 'Caviar Cítrico', path: '/tropicales/caviar_cítrico' },
    { label: 'Níspora', path: '/tropicales/nispora' },
    // Agrega más rutas aquí
  ], []);

  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);
  // Agregar una referencia al "card" del buscador
  const cardRef = useRef(null);

  // Manajador de clics para el "card" del buscador
  const handleCardClick = () => {
    // Cuando se hace clic en un "card", limpia la consulta de búsqueda y el input del buscador
    setSearchQuery('');
  };

  const handleDocumentClick = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      // El clic se realizó fuera del componente de búsqueda
      setSearchQuery(''); // Esto limpia la consulta de búsqueda
    }
  };

  useEffect(() => {
    // Agregar el manejador de clics al documento cuando el componente se monta
    document.addEventListener('click', handleDocumentClick);

    // Retirar el manejador de clics cuando el componente se desmonta
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    // Cuando el componente se monta, inicializa la lista de rutas
    setSearchResults(allRoutes);
  }, [allRoutes]);

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Filtra las rutas que incluyen la palabra clave de búsqueda
    const matchingRoutes = allRoutes.filter((route) =>
      route.label.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(matchingRoutes);
  };

  useEffect(() => {
    // Agregar el manejador de clics al documento cuando el componente se monta
    document.addEventListener('click', handleDocumentClick);

    // Retirar el manejador de clics cuando el componente se desmonta
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const [isSpanish, setIsSpanish] = useState(true);

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  };


  return (
    <Router>
      {/* <ScrollToTop /> */}
      <div className="App max-w-screen-2xl mx-auto">
        <Navbar isSpanish={isSpanish} toggleLanguage={toggleLanguage} />
        <div ref={searchRef}>
          <Search
          isSpanish={isSpanish}
            searchHandler={handleSearch}
            allRoutes={allRoutes}
            value={searchQuery} // Asigna el valor del input a searchQuery
            onChange={(event) => setSearchQuery(event.target.value)} // Actualiza searchQuery cuando se escribe en el input
          />

          {searchQuery && (
            <div className="container mt-5 relative m-auto px-6 text-gray-500 md:px-12">
              <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3 animate-fade-down">
                {searchResults.map((route) => (
                  <div
                    key={route.path}
                    onClick={handleCardClick} // Asignar el manejador de clics al "card" del buscador
                    className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105"
                    ref={cardRef} // Agregar la referencia al "card" del buscador
                  >
                    <Link to={route.path}>
                      {imageMappings[route.path] && (
                        <img
                          className="mx-auto w-120 " // Ajusta el ancho según tus necesidades
                          src={imageMappings[route.path]}
                          alt="illustration"
                          loading="lazy"
                        />
                      )}
                      <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">{route.label}</h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {!searchQuery && (
          <Routes>
            <Route path="/" element={<Hero isSpanish={isSpanish} toggleLanguage={toggleLanguage} />} />
            <Route path="/tomates/*" element={<Tomates isSpanish={isSpanish} />} />
            <Route path="/cherrys/*" element={<Cherrys isSpanish={isSpanish}/>} />
            <Route path="/minivegetales/*" element={<Minivegetales isSpanish={isSpanish}/>} />
            <Route path="/tradicionales/*" element={<Tradicionales isSpanish={isSpanish}/>} />
            <Route path="/tropicales/*" element={<Tropicales isSpanish={isSpanish} />} />
            <Route path="/vgama" element={<VGama isSpanish={isSpanish} />} />
            <Route path="/tomates/:nombreCard" element={<TomatesDetalle isSpanish={isSpanish}/>} />
            {/* <Route path="/tomates/:nombreCard" element={<TomatesTradicionalComoditysDetalle />} /> */}
            <Route path="/minivegetales/:nombreCard" element={<MinivegetalesDetalle isSpanish={isSpanish} />} />
            <Route path="/cherrys/:nombreCard" element={<CherryDetalle isSpanish={isSpanish}/>} />
            <Route path="/tradicionales/:nombreCard" element={<VerduraTradicionalDetalle isSpanish={isSpanish}/>} />
            <Route path="/tropicales/:nombreCard" element={<TropicalesDetalle isSpanish={isSpanish}/>} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
