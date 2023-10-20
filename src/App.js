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
import AmelaDetalle from './pages/detailPages/amelaDetalle';
import DulcextraDetalle from './pages/detailPages/dulcextraDetalle';
import TomatesTradicionalMarcasDetalle from './pages/detailPages/tomatesTradicionalMarcasDetalle';
import TomatesTradicionalComoditysDetalle from './pages/detailPages/tomatesTradicionalComoditysDetalle';
import MinivegetalesDetalle from './pages/detailPages/minivegetalesDetalle';
import VerduraTradicionalDetalle from './pages/detailPages/verduraTradicionalDetalle';
import AguacateDetalle from './pages/detailPages/aguacateDetalle';
import MangoDetalle from './pages/detailPages/mangoDetalle';
import PitahayaDetalle from './pages/detailPages/pitahayaDetalle';
import OtrasVariedadesDetalle from './pages/detailPages/otrasVariedadesDetalle';


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

const imageMappings = {
  '/catalogo/tomates/nuevastendencias/amela': amela,
  '/catalogo/tomates/nuevastendencias/dulcextra': dulcextra,
  '/catalogo/tomates/tradicionales/marcas/adora': adora,
  '/catalogo/tomates/tradicionales/marcas/primora': primora,
  '/catalogo/tomates/tradicionales/marcas/chocmato': chocmato,
  '/catalogo/tomates/tradicionales/marcas/monterosa': monterosa,
  '/catalogo/tomates/tradicionales/marcas/murice': murice,
  '/catalogo/tomates/tradicionales/comoditys/beef': beef,
  '/catalogo/tomates/tradicionales/comoditys/pera': pera,
  '/catalogo/tomates/tradicionales/comoditys/corazon_de_buey': corazonbuey,
  '/catalogo/tomates/tradicionales/comoditys/melange': melange,
  '/catalogo/cherrys/redondo/amarillo': redondoamarillo,
  '/catalogo/cherrys/redondo/rojo': redondorojo,

  '/catalogo/cherrys/pera/amarillo': peraamarillo,
  '/catalogo/cherrys/pera/angelle': peraangelle,
  '/catalogo/cherrys/pera/chocolate': perachocolate,
  '/catalogo/cherrys/pera/fresa': perafresa,
  '/catalogo/cherrys/pera/naranja': peranaranja,
  '/catalogo/cherrys/pera/peppermato': perapeppermato,

  '/catalogo/minivegetales/pepino_cocktail_mycubies': mycubies,
  '/catalogo/minivegetales/minipimientos_tribelli': tribelli,

  '/catalogo/tradicionales/berenjena_japonesa': berenjena,
  '/catalogo/tradicionales/pimiento_sweet_palermo': pimientossweetpalermo,
  '/catalogo/minivegetales/pimiento_lamuyo': pimientolamuyo,
  '/catalogo/minivegetales/pimiento_padron': pimientopadron,
  '/catalogo/minivegetales/pimientos_picantes': pimientospicantes,
  '/catalogo/minivegetales/calabacin_redondo': calabacinredondo,
  '/catalogo/minivegetales/calabacin_alargado': calabacinalargado,

  '/catalogo/tropicales/aguacate/bacon': bacon,
  '/catalogo/tropicales/aguacate/hass': hass,
  '/catalogo/tropicales/aguacate/fuerte': fuerte,
  '/catalogo/tropicales/aguacate/pinkerton': pinkerton,


  '/catalogo/tropicales/mango/osteen': osteen,
  '/catalogo/tropicales/mango/irwin': irwin,
  '/catalogo/tropicales/mango/keitt': keitt,
  '/catalogo/tropicales/mango/miniirwin': miniirwin,

  '/catalogo/tropicales/pitahaya/purpura': purpura,
  '/catalogo/tropicales/pitahaya/rosa': rosa,
  '/catalogo/tropicales/pitahaya/blanca': blanca,

  '/catalogo/tropicales/otrasvariedades/chirimoya_fino_de_jete': chirimoya,
  '/catalogo/tropicales/otrasvariedades/caviar_cítrico': caviarcitrico,
  '/catalogo/tropicales/otrasvariedades/nispora': nispora,
  // Agrega más rutas e imágenes según tus necesidades
};

function App() {

  const allRoutes = useMemo(() => [
    { label: 'Tomate Amela', path: '/catalogo/tomates/nuevastendencias/amela' },
    { label: 'Tomate Dulcextra', path: '/catalogo/tomates/nuevastendencias/dulcextra' },
    { label: 'Tomate Adora', path: '/catalogo/tomates/tradicionales/marcas/adora' },
    { label: 'Tomate Primora', path: '/catalogo/tomates/tradicionales/marcas/primora' },
    { label: 'Tomate Chocmato', path: '/catalogo/tomates/tradicionales/marcas/chocmato' },
    { label: 'Tomate Monterosa', path: '/catalogo/tomates/tradicionales/marcas/monterosa' },
    { label: 'Tomate Murice', path: '/catalogo/tomates/tradicionales/marcas/murice' },
    { label: 'Tomate Beef', path: '/catalogo/tomates/tradicionales/comoditys/beef' },
    { label: 'Tomate Pera', path: '/catalogo/tomates/tradicionales/comoditys/pera' },
    { label: 'Tomate Corazon De Buey', path: '/catalogo/tomates/tradicionales/comoditys/corazon_de_buey' },
    { label: 'Tomate Melange', path: '/catalogo/tomates/tradicionales/comoditys/melange' },

    { label: 'Cherry Redondo Amarillo', path: '/catalogo/cherrys/redondo/amarillo' },
    { label: 'Cherry Redondo Rojo', path: '/catalogo/cherrys/redondo/rojo' },

    { label: 'Cherry Pera Amarillo', path: '/catalogo/cherrys/pera/amarillo' },
    { label: 'Cherry Pera Angelle', path: '/catalogo/cherrys/pera/angelle' },
    { label: 'Cherry Pera Chocolate', path: '/catalogo/cherrys/pera/chocolate' },
    { label: 'Cherry Pera Fresa', path: '/catalogo/cherrys/pera/fresa' },
    { label: 'Cherry Pera Naranja', path: '/catalogo/cherrys/pera/naranja' },
    { label: 'Cherry Pera Peppermato', path: '/catalogo/cherrys/pera/peppermato' },

    { label: 'Pepino Cocktail Mycubies', path: '/catalogo/minivegetales/pepino_cocktail_mycubies' },
    { label: 'Minipimientos Tribelli', path: '/catalogo/minivegetales/minipimientos_tribelli' },

    { label: 'Berenjena Japonesa', path: '/catalogo/tradicionales/berenjena_japonesa' },
    { label: 'Pimiento Sweet Palermo', path: '/catalogo/tradicionales/pimiento_sweet_palermo' },
    { label: 'Pimiento Lamuyo', path: '/catalogo/minivegetales/pimiento_lamuyo' },
    { label: 'Pimiento Padrón', path: '/catalogo/minivegetales/pimiento_padron' },
    { label: 'Pimientos Picantes', path: '/catalogo/minivegetales/pimientos_picantes' },
    { label: 'Calabacín Redondo', path: '/catalogo/minivegetales/calabacin_redondo' },
    { label: 'Calabacín Alargado', path: '/catalogo/minivegetales/calabacin_alargado' },

    { label: 'Aguacate Bacon', path: '/catalogo/tropicales/aguacate/bacon' },
    { label: 'Aguacate Hass', path: '/catalogo/tropicales/aguacate/hass' },
    { label: 'Aguacate Fuerte', path: '/catalogo/tropicales/aguacate/fuerte' },
    { label: 'Aguacate Pinkerton', path: '/catalogo/tropicales/aguacate/pinkerton' },


    { label: 'Mango Osteen', path: '/catalogo/tropicales/mango/osteen' },
    { label: 'Mango Irwin', path: '/catalogo/tropicales/mango/irwin' },
    { label: 'Mango Keitt', path: '/catalogo/tropicales/mango/keitt' },
    { label: 'Mango Miniirwin', path: '/catalogo/tropicales/mango/miniirwin' },

    { label: 'Pitahaya Púrpura', path: '/catalogo/tropicales/pitahaya/purpura' },
    { label: 'Pitahaya Rosa', path: '/catalogo/tropicales/pitahaya/rosa' },
    { label: 'Pitahaya Blanca', path: '/catalogo/tropicales/pitahaya/blanca' },

    { label: 'Chirimoya Fino De Jete', path: '/catalogo/tropicales/otrasvariedades/chirimoya_fino_de_jete' },
    { label: 'Caviar Cítrico', path: '/catalogo/tropicales/otrasvariedades/caviar_cítrico' },
    { label: 'Níspora', path: '/catalogo/tropicales/otrasvariedades/nispora' },
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



  return (
    <Router>
      <ScrollToTop />
      <div className="App max-w-screen-2xl mx-auto">
        <Navbar />
        <div ref={searchRef}>
          <Search
            searchHandler={handleSearch}
            allRoutes={allRoutes}
            value={searchQuery} // Asigna el valor del input a searchQuery
            onChange={(event) => setSearchQuery(event.target.value)} // Actualiza searchQuery cuando se escribe en el input
          />

          {searchQuery && (
            <div className="container mt-5 relative m-auto px-6 text-gray-500 md:px-12">
              <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-4">
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
                          className="mx-auto w-120" // Ajusta el ancho según tus necesidades
                          src={imageMappings[route.path]}
                          alt="illustration"
                          loading="lazy"
                        />
                      )}
                      <h3 className="text-4xl font-semibold text-gray-800 dark:text-white">{route.label}</h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {!searchQuery && (
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/tomates/*" element={<Tomates />} />
            <Route path="/cherrys/*" element={<Cherrys />} />
            <Route path="/minivegetales/*" element={<Minivegetales />} />
            <Route path="/tradicionales/*" element={<Tradicionales />} />
            <Route path="/tropicales/*" element={<Tropicales />} />
            <Route path="/vgama" element={<VGama />} />
            <Route path="/tomates/nuevastendencias/amela" element={<AmelaDetalle />} />
            <Route path="/tomates/nuevastendencias/dulcextra" element={<DulcextraDetalle />} />
            <Route path="/tomates/tradicionales/marcas/:nombreCard" element={<TomatesTradicionalMarcasDetalle />} />
            <Route path="/tomates/tradicionales/comoditys/:nombreCard" element={<TomatesTradicionalComoditysDetalle />} />
            <Route path="/minivegetales/:nombreCard" element={<MinivegetalesDetalle />} />
            <Route path="/cherrys/:nombreCard" element={<CherryDetalle />} />
            <Route path="/tradicionales/:nombreCard" element={<VerduraTradicionalDetalle />} />
            <Route path="/tropicales/aguacate/:nombreCard" element={<AguacateDetalle />} />
            <Route path="/tropicales/mango/:nombreCard" element={<MangoDetalle />} />
            <Route path="/tropicales/pitahaya/:nombreCard" element={<PitahayaDetalle />} />
            <Route path="/tropicales/otrasvariedades/:nombreCard" element={<OtrasVariedadesDetalle />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
