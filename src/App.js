import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import ScrollToTop from './components/scrollToTop';

// Importa tus páginas aquí
import Hero from './pages/hero';
import Tomates from './pages/tomates';
import Cherrys from './pages/cherrys';
import Minivegetales from './pages/minivegetales';
import Tradicionales from './pages/tradicionales';
import Tropicales from './pages/tropicales';
import VGama from './pages/vGama';
import Amela from './components/amela';
import Trimix from './components/trimix';

function App() {
  return (
    <Router>
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
  );
}

export default App;
