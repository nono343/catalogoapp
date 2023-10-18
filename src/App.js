// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import ScrollToTop from './components/scrollToTop';
import Hero from './pages/hero';
import Catalogo from './catalogo';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/catalogo/*" element={<Catalogo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
