import React, { useState } from 'react';
import { Input } from '@material-tailwind/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import amela1 from '../../assets/tomatedulce/amela/amela1.jpg';


function AguacatePackagingTable() {
    const [products, setProducts] = useState([
        {
            Packaging: 'Loose',
            Presentation: '1',
            'Pieces': '8/10/12/14/16/18/20/22/24',
            'Presentation Weight (g)': '4000',
            'Net Weight (kg)': '4',
            'Box size': '40*30*10',
            '80x120': '168',
            'Net Weight 80x120 (Kg)': '672',
            '100x120': '210',
            'Net Weight 100x120 (Kg)': '840',
            Image: amela1,
        },
        {
            Packaging: 'Loose',
            Presentation: '1',
            'Pieces': '26/28',
            'Presentation Weight (g)': '6000',
            'Net Weight (kg)': '6',
            'Box size': '40*30*14',
            '80x120': '128',
            'Net Weight 80x120 (Kg)': '768',
            '100x120': '160',
            'Net Weight 100x120 (Kg)': '960',
            Image: amela1,
        },

    ]);
    
    
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = (column) => {
        if (sortOrder === 'asc') {
            setSortOrder('desc');
            products.sort((a, b) => {
                const numA = parseFloat(a[column].replace(',', '.').trim());
                const numB = parseFloat(b[column].replace(',', '.').trim());
                return numB - numA;
            });
        } else {
            setSortOrder('asc');
            products.sort((a, b) => {
                const numA = parseFloat(a[column].replace(',', '.').trim());
                const numB = parseFloat(b[column].replace(',', '.').trim());
                return numA - numB;
            });
        }
        setProducts([...products]);
    };

    const [showLargeImage, setShowLargeImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowLargeImage(true);
    };

    const closeLargeImage = () => {
        setSelectedImage(null);
        setShowLargeImage(false);
    };

    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter((product) =>
        product.Packaging.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const clearSearch = () => {
        setSearchTerm(''); // Establece searchTerm en una cadena vacía para borrar la búsqueda
    };


    return (
        <section className="body-font mb-5 max-w-screen-2xl mx-auto">
        <h1 className="sm:text-3xl text-center text-2xl mb-5 animate-fade-up">Formatos de venta</h1>
        <div className='container max-w-screen-sm relative m-auto text-center px-6 text-gray-500 md:px-12 mb-5 animate-fade-up'>
            <div className="relative">
                <Input
                    color="red"
                    label="Buscar formatos de venta..."
                    type="text"
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
        </div>


        <div className="relative overflow-x-auto shadow-md rounded-lg animate-fade-up">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 sm:px-6 py-3" onClick={() => handleSort('Packaging')}>
                            Packaging
                        </th>
                        <th scope="col" className="px-4 sm:px-6 py-3" onClick={() => handleSort('Presentation')}>
                            Presentation
                        </th>
                        <th scope="col" className="px-4 sm:px-6 py-3" onClick={() => handleSort('Presentation Weight (g)')}>
                            Presentation Weight (g)
                        </th>
                        <th scope="col" className="px-4 sm:px-6 py-3" onClick={() => handleSort('Net Weight (kg)')}>
                            Net Weight (kg)
                        </th>
                        <th scope="col" className="px-4 sm:px-6 py-3" onClick={() => handleSort('Box size')}>
                            Box size
                        </th>
                        <th scope="col" className="px-4 sm:px-6 py-3" onClick={() => handleSort('80x120')}>
                            80x120
                        </th>
                        <th scope="col" className="px-4 sm:px-6 py-3" onClick={() => handleSort('Net Weight 80x120 (Kg)')}>
                            Net Weight (Kg)
                        </th>
                        <th scope="col" className="px-4 sm:px-6 py-3" onClick={() => handleSort('100x120')}>
                            100x120
                        </th>
                        <th scope="col" className="px-4 sm:px-6 py-3" onClick={() => handleSort('Net Weight 100x120 (Kg)')}>
                            Net Weight (Kg)
                        </th>
                        <th scope="col" className="px-4 sm:px-6 py-3">
                            Image
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product, index) => (
                        <tr key={index} className={`bg-white border-b ${index % 2 === 0 ? 'dark:bg-gray-800' : 'dark:border-gray-700'}`}>
                            <th scope="row" className="px-4 sm:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {product.Packaging}
                            </th>
                            <td className="px-4 sm:px-6 py-4">
                                {product.Presentation}
                            </td>
                            <td className="px-4 sm:px-6 py-4">
                                {product['Presentation Weight (g)']}
                            </td>
                            <td className="px-4 sm:px-6 py-4">
                                {product['Net Weight (kg)']}
                            </td>
                            <td className="px-4 sm:px-6 py-4">
                                {product['Box size']}
                            </td>
                            <td className="px-4 sm:px-6 py-4">
                                {product['80x120']}
                            </td>
                            <td className="px-4 sm:px-6 py-4">
                                {product['Net Weight 80x120 (Kg)']}
                            </td>
                            <td className="px-4 sm:px-6 py-4">
                                {product['100x120']}
                            </td>
                            <td className="px-4 sm:px-6 py-4">
                                {product['Net Weight 100x120 (Kg)']}
                            </td>
                            <td className="px-4 sm:px-6 py-4">
                                <img
                                    src={product.Image}
                                    alt="Product"
                                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full cursor-pointer"
                                    onClick={() => handleImageClick(product.Image)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {showLargeImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                <div className="relative z-10">
                    <img
                        src={selectedImage}
                        alt="Large Product"
                        className="w-full h-full max-w-screen-md sm:max-w-screen-lg object-contain cursor-pointer animate-fade"
                        onClick={closeLargeImage}
                    />
                    <div className="absolute top-4 right-4">
                        <XMarkIcon
                            className="text-red-900 w-6 h-6 cursor-pointer"
                            onClick={closeLargeImage}
                        />
                    </div>

                </div>
            </div>
        )}
    </section>
);}  


export default AguacatePackagingTable;
