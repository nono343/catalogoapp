import React, { useState } from 'react';

const Search = ({ searchHandler }) => {
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
    <div className='container max-w-screen-md relative m-auto text-center px-6 text-gray-500 md:px-12 mb-5'>
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-100 dark:border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute top-0 right-0 m-2 text-gray-500 hover:text-red-500"
          >
            Borrar
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
