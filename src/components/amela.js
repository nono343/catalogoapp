import React, { useState } from 'react';
import { Carousel } from "@material-tailwind/react";
import amela1 from '../assets/tomatedulce/amela/amela1.jpg';
import amela2 from '../assets/tomatedulce/amela/amela2.jpg';


function Amela() {
    const [products, setProducts] = useState([
        {
            Packaging: 'Flowpack Snack Bag',
            Presentation: '25',
            'Presentation Weight (g)': '100',
            'Net Weight (kg)': '2.5',
            'Box size': '40*30*9.5',
            '80x120': '176',
            'Net Weight (Kg)': '440',
            '100x120': '220',
            'Net Weight (Kg)': '550',
            Image: amela1, // Agrega la ruta de la imagen de ejemplo
        },
        {
            Packaging: 'Cardboard with lid',
            Presentation: '8',
            'Presentation Weight (g)': '200',
            'Net Weight (kg)': '1.6',
            'Box size': '40*30*7',
            '80x120': '248',
            'Net Weight (Kg)': '396.8',
            '100x120': '310',
            'Net Weight (Kg)': '496'
        },
        {
            Packaging: 'Cardboard with flowpack',
            Presentation: '9',
            'Presentation Weight (g)': '250',
            'Net Weight (kg)': '2.25',
            'Box size': '40*30*7',
            '80x120': '248',
            'Net Weight (Kg)': '558',
            '100x120': '310',
            'Net Weight (Kg)': '697.5'
        },
        // Agrega el resto de tus productos aquí
    ]);

    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = (column) => {
        if (sortOrder === 'asc') {
            setSortOrder('desc');
            products.sort((a, b) => parseFloat(b[column].replace(',', '.').trim()) - parseFloat(a[column].replace(',', '.').trim()));
        } else {
            setSortOrder('asc');
            products.sort((a, b) => parseFloat(a[column].replace(',', '.').trim()) - parseFloat(b[column].replace(',', '.').trim()));
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
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Carousel className="rounded-xl">
                            <img
                                src={amela1}
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src={amela2}
                                alt="image 2"
                                className="h-full w-full object-cover"
                            />
                        </Carousel>
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Amela
                        </h1>
                        <p class="mb-8 leading-relaxed">¿Es realmente Amela®
                            un tomate?
                            Quizá sea debido a su rico, dulce e intenso
                            sabor por lo que a menudo los clientes
                            piensan que Amela® es una fruta.
                            Este tomate trae consigo un toque oriental
                            que lo hace único e inigualable.
                            Nuestro objetivo no es sólo hacer un buen
                            tomate, sino también tocar tu corazón.</p>
                    </div>
                </div>
            </section>
            <div class="border-t mx-auto border-gray-200  bg-white px-4 py-3 sm:px-6">
                <h1 className='sm:text-3xl text-2xl mb-5 '>Calendario de producción</h1>
                <div class="mx-auto sm:flex-1 sm:items-center mb-5 max-w-screen-md">
                    {/* <!-- Fila de arriba: números del 1 al 6 --> */}
                    <a class="relative inline-flex w-1/6 sm:w-1/12 h-16 bg-indigo-600 flex items-center justify-center text-sm font-semibold text-white rounded-full focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                    <a class="relative inline-flex w-1/6 sm:w-1/12 h-16 bg-indigo-600 flex items-center justify-center text-sm font-semibold text-white rounded-full focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">2</a>
                    <a class="relative inline-flex w-1/6 sm:w-1/12 h-16 bg-indigo-600 flex items-center justify-center text-sm font-semibold text-white rounded-full focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">3</a>
                    <a class="relative inline-flex w-1/6 sm:w-1/12 h-16 bg-indigo-600 flex items-center justify-center text-sm font-semibold text-white rounded-full focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">4</a>
                    <a class="relative inline-flex w-1/6 sm:w-1/12 h-16 bg-indigo-600 flex items-center justify-center text-sm font-semibold text-white rounded-full focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">5</a>
                    <a class="relative inline-flex w-1/6 sm:w-1/12 h-16 bg-indigo-600 flex items-center justify-center text-sm font-semibold text-white rounded-full focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">6</a>

                    {/* <!-- Fila de abajo: números del 7 al 12 --> */}
                    <a class="relative inline-flex w-1/6 sm:w-1/12 h-16 bg-indigo-600 flex items-center justify-center text-sm font-semibold text-white rounded-full focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">7</a>
                    <a class="relative inline-flex w-1/6 sm:w-1/12 h-16 bg-indigo-600 flex items-center justify-center text-sm font-semibold text-white rounded-full focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">8</a>
                    <a class="relative inline-flex w-1/6 sm:w-1/12 h-16 bg-indigo-600 flex items-center justify-center text-sm font-semibold text-white rounded-full focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">9</a>
                    <a class="relative inline-flex w-1/6 sm:w-1/12 h-16 bg-indigo-600 flex items-center justify-center text-sm font-semibold text-white rounded-full focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">10</a>
                    <a class="relative inline-flex w-1/6 sm:w-1/12 h-16 bg-indigo-600 flex items-center justify-center text-sm font-semibold text-white rounded-full focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">11</a>
                    <a class="relative inline-flex w-1/6 sm:w-1/12 h-16 bg-indigo-600 flex items-center justify-center text-sm font-semibold text-white rounded-full focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">12</a>
                </div>
            </div>

            {/* packaging */}

            <section className="text-gray-600 body-font border-t border-gray-200 mb-5 max-w-screen-xl mx-auto">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                            Our products
                            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                        </caption>
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
                                <th scope="col" className="px-4 sm:px-6 py-3" onClick={() => handleSort('Net Weight (Kg)')}>
                                    Net Weight (Kg)
                                </th>
                                <th scope="col" className="px-4 sm:px-6 py-3" onClick={() => handleSort('100x120')}>
                                    100x120
                                </th>
                                <th scope="col" className="px-4 sm:px-6 py-3" onClick={() => handleSort('100x120')}>
                                    Net Weight (Kg)
                                </th>
                                <th scope="col" className="px-4 sm:px-6 py-3">
                                    Image
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
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
                                        {product['100x120']}
                                    </td>
                                    <td className="px-4 sm:px-6 py-4">
                                        {product['Net Weight (Kg)']}
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
            </section>

            {showLargeImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="relative z-10">
                        <img
                            src={selectedImage}
                            alt="Large Product"
                            className="w-full h-full max-w-screen-md sm:max-w-screen-lg object-contain cursor-pointer"
                            onClick={closeLargeImage}
                        />
                    </div>
                </div>
            )}
            s        </>
    );
}

export default Amela;
