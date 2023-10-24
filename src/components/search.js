import React, { useState } from 'react';
import { Input } from "@material-tailwind/react";
import { XMarkIcon } from '@heroicons/react/24/outline';

const Search = ({ searchHandler, isSpanish }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Maneja la búsqueda en tiempo real
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    searchHandler(query); // Llama a la función de búsqueda con cada cambio
  };

  // Función para borrar la búsqueda
  const clearSearch = () => {
    setSearchQuery('');
    searchHandler(''); // Llama a la función de búsqueda con una cadena vacía para borrar la búsqueda
  };

  return (
    <div className='container max-w-screen-sm relative m-auto text-center px-6 text-gray-500 md:px-12 mb-5 animate-fade-right'>
      <div className="relative">
        <Input
          color="red" 
          label= {isSpanish ? "Buscar productos.." : "Search products..."}

          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {searchQuery && (
          <button
          onClick={clearSearch}
          className="absolute top-0 right-0 m-2 text-gray-500 hover:text-red-500"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      )}
      </div>
    </div>
  );
};

export default Search;
