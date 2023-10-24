<<<<<<< HEAD
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import ScrollToTop from './components/scrollToTop';

// Importa tus páginas aquí
=======
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Search from './components/search';
import ScrollToTop from './components/scrollToTop';
>>>>>>> codespace-stunning-xylophone-j6vwgwpjqgphq9qv
import Hero from './pages/hero';
import Tomates from './pages/tomates';
import Cherrys from './pages/cherrys';
import Minivegetales from './pages/minivegetales';
import Tradicionales from './pages/tradicionales';
import Tropicales from './pages/tropicales';
import VGama from './pages/vGama';
<<<<<<< HEAD
import Amela from './components/amela';
import Trimix from './components/trimix';
=======
import CherryDetalle from './pages/detailPages/cherryDetalle';
import TomatesDetalle from './pages/detailPages/tomatesDetalle';
import MinivegetalesDetalle from './pages/detailPages/minivegetalesDetalle';
import VerduraTradicionalDetalle from './pages/detailPages/verduraTradicionalDetalle';
import TropicalesDetalle from './pages/detailPages/tropicalesDetalle';
import { imageMappings, routes } from './components/routesSearch';
>>>>>>> codespace-stunning-xylophone-j6vwgwpjqgphq9qv

function App() {
  // Estado para controlar el idioma de la aplicación
  const [isSpanish, setIsSpanish] = useState(true);

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  // Definir rutas en español e inglés
  const spanishRoutes = useMemo(() => routes.spanish, []);
  const englishRoutes = useMemo(() => routes.english, []);

  // Combinar las rutas basadas en el idioma seleccionado
  const allRoutes = useMemo(() => (isSpanish ? spanishRoutes : englishRoutes), [
    isSpanish,
    spanishRoutes,
    englishRoutes,
  ]);

  // Estado para el resultado de la búsqueda
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);

  // Manejador de clics en el documento para cerrar el componente de búsqueda
  const handleDocumentClick = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchQuery('');
    }
  };

  // Agregar y retirar el manejador de clics al documento
  useEffect(() => {
    // Agregar el manejador de clics al documento cuando el componente se monta
    document.addEventListener('click', handleDocumentClick);
  
    // Retirar el manejador de clics cuando el componente se desmonta
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []); // Dependencia vacía para que el efecto se ejecute solo una vez al montar el componente
  
  // Manejador de búsqueda
  const handleSearch = (query) => {
    setSearchQuery(query);
    const matchingRoutes = allRoutes.filter((route) =>
      route.label.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(matchingRoutes);
  };

  // Cuando el componente se monta, inicializa la lista de rutas
  useEffect(() => {
    setSearchResults(allRoutes);
  }, [allRoutes]);

  return (
    <Router>
<<<<<<< HEAD
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Página Hero será la ruta raíz */}
          <Route path="/catalogo/*" element={<Catalogo />} /> {/* Todas las rutas de /catalogo se manejarán en el componente Catalogo */}
        </Routes>
      </div>
    </Router>
  );
}

// Componente para rutas anidadas de "catalogo"
function Catalogo() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} /> {/* Página Hero será /catalogo */}
      <Route path="tomates/*" element={<Tomates />} /> {/* Todas las rutas de /catalogo/tomates */}
      <Route path="cherrys/*" element={<Cherrys />} />
      <Route path="minivegetales" element={<Minivegetales />} />
      <Route path="tradicionales" element={<Tradicionales />} />
      <Route path="tropicales" element={<Tropicales />} />
      <Route path="vgama" element={<VGama />} />
      <Route path="tomates/amela" element={<Amela />} />
      <Route path="cherrys/trimix" element={<Trimix />} />
    </Routes>
=======
      <div className="App max-w-screen-2xl mx-auto">
        <Navbar isSpanish={isSpanish} toggleLanguage={toggleLanguage} />
        <div ref={searchRef}>
          <Search
            isSpanish={isSpanish}
            searchHandler={handleSearch}
            allRoutes={allRoutes}
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />

          {searchQuery && (
            <div className="container mt-5 relative m-auto px-6 text-gray-500 md:px-12">
              <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3 animate-fade-down">
                {searchResults.map((route) => (
                  <div
                    key={route.path}
                    onClick={() => setSearchQuery('')}
                    className="group space-y-1 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none transition-transform transform hover:scale-105"
                  >
                    <Link to={route.path}>
                      {imageMappings[route.path] && (
                        <img
                          className="mx-auto w-120"
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
            <Route path="/" element={<Hero isSpanish={isSpanish} />} />
            <Route path="/tomates/*" element={<Tomates isSpanish={isSpanish} />} />
            <Route path="/cherrys/*" element={<Cherrys isSpanish={isSpanish} />} />
            <Route path="/minivegetales/*" element={<Minivegetales isSpanish={isSpanish} />} />
            <Route path="/tradicionales/*" element={<Tradicionales isSpanish={isSpanish} />} />
            <Route path="/tropicales/*" element={<Tropicales isSpanish={isSpanish} />} />
            <Route path="/vgama" element={<VGama isSpanish={isSpanish} />} />
            <Route path="/tomates/:nombreCard" element={<TomatesDetalle isSpanish={isSpanish} />} />
            <Route path="/minivegetales/:nombreCard" element={<MinivegetalesDetalle isSpanish={isSpanish} />} />
            <Route path="/cherrys/:nombreCard" element={<CherryDetalle isSpanish={isSpanish} />} />
            <Route path="/tradicionales/:nombreCard" element={<VerduraTradicionalDetalle isSpanish={isSpanish} />} />
            <Route path="/tropicales/:nombreCard" element={<TropicalesDetalle isSpanish={isSpanish} />} />
          </Routes>
        )}
      </div>
    </Router>
>>>>>>> codespace-stunning-xylophone-j6vwgwpjqgphq9qv
  );
}

export default App;
