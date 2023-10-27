import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Input } from "@material-tailwind/react";
import MinimangoDataPackaging from './datatable/minimangoDataPackaging';


function MiniMangoPackagingTable({ isSpanish }) {
    const [products, setProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [minimangoData, setMinimangoData] = useState(null);
    const [filter, setFilter] = useState(''); // Estado para el filtro
    const [selectedFilter, setSelectedFilter] = useState(""); // Estado para el filtro seleccionado
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    useEffect(() => {
        // Este efecto solo debe ejecutarse una vez cuando se monta el componente
        // Obtén los datos del producto "amela" desde productData y configúralos en el estado
        const minimangoProductData = MinimangoDataPackaging(isSpanish).Packaging;
        setMinimangoData(minimangoProductData);
    }, [isSpanish]);
    
    useEffect(() => {
        // Este efecto actualiza la lista de productos cuando cambia minimangoData o isSpanish
        if (minimangoData && typeof minimangoData === 'object') {
            const dataArray = Object.keys(minimangoData).map(key => ({
                key: key,
                value: minimangoData[key]
            }));
            setProducts(dataArray);
        }
    }, [minimangoData, isSpanish]);
    
    const handleSort = (column) => {
        const sortOrderToggle = sortOrder === 'asc' ? 'desc' : 'asc';

        const sortedProducts = [...products].sort((a, b) => {
            const numA = parseFloat(a.value[column].replace(',', '.').trim());
            const numB = parseFloat(b.value[column].replace(',', '.').trim());

            if (sortOrderToggle === 'asc') {
                return numA - numB;
            } else {
                return numB - numA;
            }
        });

        setSortOrder(sortOrderToggle);
        setProducts(sortedProducts);
    };

    const filteredProducts = products.filter((product) => {
        const packagingName = product.value.Packaging.toLowerCase();
        if (filter === 'granel') {
            return packagingName.includes('granel');
        } else if (filter === 'madera') {
            return packagingName.includes('madera');
        } else {
            return packagingName.includes(searchTerm.toLowerCase());
        }
    });

    const handleFilterChange = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    const clearSearch = () => {
        setSearchTerm(''); // Establece searchTerm en una cadena vacía para borrar la búsqueda
    };

    const openImageModal = (index) => {
        setSelectedImageIndex(index);
        setIsImageEnlarged(true);
    };

    const closeImageModal = () => {
        setIsImageEnlarged(false);
    };

    return (
        <section className="body-font mb-5 px-12 max-w-screen-2xl mx-auto">
            <h1 className="sm:text-3xl text-center text-2xl mb-5 animate-fade-up">{isSpanish ? 'Formatos de venta' : 'Selling Formats'}</h1>
            <div className='container max-w-screen-sm relative m-auto text-center px-6 text-gray-500 md:px-12 mb-5 animate-fade-up'>
                <div className="relative">
                    <Input
                        color="red"
                        type="text"
                        label={isSpanish ? 'Buscar por nombre de packaging' : 'Search by packaging name'}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <button
                            onClick={clearSearch}
                            className="absolute top-0 right-0 m-2 text-gray-500 hover:text-red-500"
                        >
                            <XMarkIcon className="w-5 h-5" />
                        </button>
                    )}
                </div>
                {/* <div className="mb-4">
                <select
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white  shadow-sm focus:ring focus:ring-opacity-50"
                    value={filter}
                    onChange={(e) => handleFilterChange(e.target.value)}
                >
                    <option value="">{isSpanish ? 'Filtrar por:' : 'Filter by:'}</option>
                    <option value="granel">{isSpanish ? 'Granel' : 'Bulk'}</option>
                    <option value="madera">{isSpanish ? 'Madera' : 'Wood'}</option>
                </select>
            </div> */}
            </div>
            <div className="relative overflow-x-auto shadow-md rounded-lg max-h-80 animate-fade-up">
                <table className="w-full text-sm text-left text-gray-500 divide-y divide-gray-200">
                    <thead className="text-xs cursor-pointer text-white uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="sticky left-0 top-0 z-10 w-1/20 px-4 sm:px-6 py-3 bg-red-600" onClick={() => handleSort('Packaging')}>
                                {isSpanish ? "Embalaje" : "Packaging"}
                            </th>
                            <th scope="col" className="sticky top-0 z-10 px-4 sm:px-6 py-3 bg-red-600" onClick={() => handleSort('Presentation')}>
                                {isSpanish ? "Formato" : "Presentation"}
                            </th>
                            <th scope="col" className="sticky top-0 z-10 px-4 sm:px-6 py-3 bg-red-600" onClick={() => handleSort('Presentation Weight (g)')}>
                                {isSpanish ? "Peso del formato" : "Presentation Weight (g)"}
                            </th>
                            <th scope="col" className="sticky top-0 z-10 px-4 sm:px-6 py-3 bg-red-600" onClick={() => handleSort('Net Weight (kg)')}>
                                {isSpanish ? "Peso neto (kg)" : "Net Weight (kg)"}
                            </th>
                            <th scope="col" className="sticky top-0 z-10 px-4 sm:px-6 py-3 bg-red-600" onClick={() => handleSort('Box size')}>
                                {isSpanish ? "Medidas caja" : "Box size"}
                            </th>
                            <th scope="col" className="sticky top-0 z-10 px-4 sm:px-6 py-3 bg-red-600" onClick={() => handleSort('80x120')}>
                                {isSpanish ? "80x120 Cajas/Palet" : "80x120 Boxes/Palet"}
                            </th>
                            <th scope="col" className="sticky top-0 z-10 px-4 sm:px-6 py-3 bg-red-600" onClick={() => handleSort('Net Weight 80x120 (Kg)')}>
                                {isSpanish ? "Peso del palet (Kg)" : "Palet net weight (Kg)"}
                            </th>
                            <th scope="col" className="sticky top-0 z-10 px-4 sm:px-6 py-3 bg-red-600" onClick={() => handleSort('100x120')}>
                                {isSpanish ? "100x120 Cajas/Palet" : "100x120 Boxes/Palet"}
                            </th>
                            <th scope="col" className="sticky top-0 z-10 px-4 sm:px-6 py-3 bg-red-600" onClick={() => handleSort('Net Weight 100x120 (Kg)')}>
                                {isSpanish ? "Peso del palet (Kg)" : "Palet net weight (Kg)"}
                            </th>
                            <th scope="col" className="sticky top-0 z-10 px-4 sm:px-6 py-3 bg-red-600">
                                {isSpanish ? "Imagen" : "Image"}
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {filteredProducts.map((product, index) => (
                            <tr className="bg-white" key={product.key}>
                                <td className="w-1/20 text-white px-4 sm:px-6 sticky left-0 py-3 bg-red-600">
                                    {product.value.Packaging}
                                </td>
                                <td className="px-4 sm:px-6 py-3">
                                    {product.value.Presentation}
                                </td>
                                <td className="px-4 sm:px-6 py-3">
                                    {product.value['Presentation Weight (g)']}
                                </td>
                                <td className="px-4 sm:px-6 py-3">
                                    {product.value['Net Weight (kg)']}
                                </td>
                                <td className="px-4 sm:px-6 py-3">
                                    {product.value['Box size']}
                                </td>
                                <td className="px-4 sm:px-6 py-3">
                                    {product.value['80x120']}
                                </td>
                                <td className="px-4 sm:px-6 py-3">
                                    {product.value['Net Weight 80x120 (Kg)']}
                                </td>
                                <td className="px-4 sm:px-6 py-3">
                                    {product.value['100x120']}
                                </td>
                                <td className="px-4 sm:px-6 py-3">
                                    {product.value['Net Weight 100x120 (Kg)']}
                                </td>
                                <td className="px-4 sm:px-6 py-3">
                                    <img
                                        src={product.value.Image}
                                        alt="Product"
                                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full cursor-pointer"
                                        onClick={() => openImageModal(index)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        {isImageEnlarged && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                <div className="relative z-10">
                    <img
                        src={filteredProducts[selectedImageIndex].value.Image}
                        alt="Large Product"
                        className="w-full h-full max-w-screen-md sm:max-w-screen-lg object-contain cursor-pointer animate-fade"
                        onClick={closeImageModal} />
                    <div className="absolute top-4 right-4">
                        <XMarkIcon
                            className="text-red-900 w-6 h-6 cursor-pointer"
                            onClick={closeImageModal} />
                    </div>
                </div>
            </div>
        )}
    </section>

    );
}

export default MiniMangoPackagingTable
