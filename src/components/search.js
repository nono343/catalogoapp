import React, { useState, useEffect } from 'react';
import { Input } from "@material-tailwind/react";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import { IconButton } from "@material-tailwind/react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";



const Search = ({ searchHandler, isSpanish }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);


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

  useEffect(() => {
    // Función para manejar el evento de desplazamiento
    const handleScroll = () => {
      if (window.scrollY > 65) { // Puedes ajustar el valor 100 según tus necesidades
        setShowSearch(true);
      } else {
        setShowSearch(false);
      }
    };
    // Agregar el evento de desplazamiento
    window.addEventListener('scroll', handleScroll);

    // Retirar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
      {showSearch ? (

        <div className=" z-50 fixed bottom-0 sm:left-10  mb-5 animate-fade-right">
          <Popover placement="right">
            <PopoverHandler>
              <IconButton className="rounded-full" color="green">
                <MagnifyingGlassCircleIcon className="w-10 h-10" />
              </IconButton>
            </PopoverHandler>
            <PopoverContent>
              <div className="relative">
                <Input
                  color="red"
                  label={isSpanish ? "Buscar productos.." : "Search products..."}
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

            </PopoverContent>
          </Popover>


        </div>
      ) : (
        <div className='container max-w-screen-sm relative m-auto text-center px-6 text-gray-500 md:px-12 mb-5 animate-fade-right'>
          <div className="relative">
            <Input
              color="red"
              label={isSpanish ? "Buscar productos.." : "Search products..."}
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
      )}
    </div>
  );
};

export default Search;
