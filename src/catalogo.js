// catalogo.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from './pages/hero'; // Importa la página Hero aquí
import Tomates from './pages/tomates';
import Cherrys from './pages/cherrys';
import Minivegetales from './pages/minivegetales';
import Tradicionales from './pages/tradicionales';
import Tropicales from './pages/tropicales';
import VGama from './pages/vGama';
import Amela from './components/amela';



function Catalogo() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} /> {/* Página Hero será /catalogo */}
      <Route path="tomates/*" element={<Tomates />} /> {/* Todas las rutas de /catalogo/tomates */}
      <Route path="cherrys" element={<Cherrys />} />
      <Route path="minivegetales" element={<Minivegetales />} />
      <Route path="tradicionales" element={<Tradicionales />} />
      <Route path="tropicales" element={<Tropicales />} />
      <Route path="vgama" element={<VGama />} />
      <Route path="tomates/amela" element={<Amela />} />
    </Routes>
  );
}

export default Catalogo;
