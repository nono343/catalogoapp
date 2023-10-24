import React, { useState } from 'react';
import { Input } from '@material-tailwind/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import amela1 from '../../assets/tomatedulce/amela/amela1.jpg';


function TribelliPackagingTable() {
    const [products, setProducts] = useState([
        {
          Packaging: 'Shaker with lid',
          Presentation: '12',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '3',
          'Box size': '40*30*15.5',
          '80x120': '112',
          'Net Weight 80x120 (Kg)': '336',
          '100x120': '140',
          'Net Weight 100x120 (Kg)': '420',
          Image: amela1,
        },
        {
          Packaging: 'Stockable clamshell shaker',
          Presentation: '12',
          'Presentation Weight (g)': '150',
          'Net Weight (kg)': '1.8',
          'Box size': '40*30*12',
          '80x120': '144',
          'Net Weight 80x120 (Kg)': '259',
          '100x120': '180',
          'Net Weight 100x120 (Kg)': '324',
          Image: amela1,
        },
        {
          Packaging: 'Punnet with flowpack',
          Presentation: '12',
          'Presentation Weight (g)': '150',
          'Net Weight (kg)': '1.8',
          'Box size': '40*30*12',
          '80x120': '144',
          'Net Weight 80x120 (Kg)': '259',
          '100x120': '180',
          'Net Weight 100x120 (Kg)': '324',
          Image: amela1,
        },
        {
          Packaging: 'Punnet with flowpack',
          Presentation: '12',
          'Presentation Weight (g)': '150',
          'Net Weight (kg)': '1.8',
          'Box size': '60*40*7',
          '80x120': '124',
          'Net Weight 80x120 (Kg)': '223',
          '100x120': '155',
          'Net Weight 100x120 (Kg)': '279',
          Image: amela1,
        },
        {
          Packaging: 'Top seal punnet',
          Presentation: '6',
          'Presentation Weight (g)': '150',
          'Net Weight (kg)': '0.9',
          'Box size': '40*30*7',
          '80x120': '248',
          'Net Weight 80x120 (Kg)': '223',
          '100x120': '310',
          'Net Weight 100x120 (Kg)': '279',
          Image: amela1,
        },
        {
          Packaging: 'Top seal punnet',
          Presentation: '12',
          'Presentation Weight (g)': '150',
          'Net Weight (kg)': '1.8',
          'Box size': '40*30*12',
          '80x120': '144',
          'Net Weight 80x120 (Kg)': '259',
          '100x120': '180',
          'Net Weight 100x120 (Kg)': '324',
          Image: amela1,
        },
        {
          Packaging: 'Top seal punnet',
          Presentation: '12',
          'Presentation Weight (g)': '150',
          'Net Weight (kg)': '1.8',
          'Box size': '60*40*6.2',
          '80x120': '144',
          'Net Weight 80x120 (Kg)': '259',
          '100x120': '180',
          'Net Weight 100x120 (Kg)': '324',
          Image: amela1,
        },
        {
          Packaging: 'Punnet with flowpack',
          Presentation: '8',
          'Presentation Weight (g)': '200',
          'Net Weight (kg)': '1.6',
          'Box size': '40*30*9.5',
          '80x120': '176',
          'Net Weight 80x120 (Kg)': '282',
          '100x120': '220',
          'Net Weight 100x120 (Kg)': '352',
          Image: amela1,
        },
        {
          Packaging: 'Punnet with flowpack',
          Presentation: '12',
          'Presentation Weight (g)': '200',
          'Net Weight (kg)': '2.4',
          'Box size': '40*30*12',
          '80x120': '144',
          'Net Weight 80x120 (Kg)': '346',
          '100x120': '180',
          'Net Weight 100x120 (Kg)': '432',
          Image: amela1,
        },
        {
          Packaging: 'Top seal punnet',
          Presentation: '10',
          'Presentation Weight (g)': '200',
          'Net Weight (kg)': '2',
          'Box size': '60*40*7',
          '80x120': '124',
          'Net Weight 80x120 (Kg)': '248',
          '100x120': '155',
          'Net Weight 100x120 (Kg)': '310',
          Image: amela1,
        },
        {
          Packaging: 'Cellulose pulp top seal punnet',
          Presentation: '10',
          'Presentation Weight (g)': '200',
          'Net Weight (kg)': '2',
          'Box size': '60*40*7',
          '80x120': '124',
          'Net Weight 80x120 (Kg)': '248',
          '100x120': '155',
          'Net Weight 100x120 (Kg)': '310',
          Image: amela1,
        },
        {
          Packaging: 'Flowpack bag',
          Presentation: '6',
          'Presentation Weight (g)': '200',
          'Net Weight (kg)': '1.2',
          'Box size': '40*30*8',
          '80x120': '248',
          'Net Weight 80x120 (Kg)': '298',
          '100x120': '310',
          'Net Weight 100x120 (Kg)': '372',
          Image: amela1,
        },
        {
          Packaging: 'Flowpack bag',
          Presentation: '10',
          'Presentation Weight (g)': '200',
          'Net Weight (kg)': '2',
          'Box size': '40*30*9.5',
          '80x120': '176',
          'Net Weight 80x120 (Kg)': '352',
          '100x120': '220',
          'Net Weight 100x120 (Kg)': '440',
          Image: amela1,
        },
        {
          Packaging: 'Top seal punnet',
          Presentation: '10',
          'Presentation Weight (g)': '300',
          'Net Weight (kg)': '3',
          'Box size': '60*40*9.7',
          '80x120': '92',
          'Net Weight 80x120 (Kg)': '276',
          '100x120': '115',
          'Net Weight 100x120 (Kg)': '345',
          Image: amela1,
        },
        {
          Packaging: 'Bucket with lid',
          Presentation: '14',
          'Presentation Weight (g)': '300',
          'Net Weight (kg)': '4.2',
          'Box size': '60*40*15',
          '80x120': '56',
          'Net Weight 80x120 (Kg)': '235',
          '100x120': '70',
          'Net Weight 100x120 (Kg)': '294',
          Image: amela1,
        },
        {
          Packaging: 'Loose',
          Presentation: '1',
          'Presentation Weight (g)': '1000',
          'Net Weight (kg)': '1',
          'Box size': '30*20*8',
          '80x120': '240',
          'Net Weight 80x120 (Kg)': '240',
          '100x120': '395',
          'Net Weight 100x120 (Kg)': '395',
          Image: amela1,
        },
        {
          Packaging: 'Loose',
          Presentation: '1',
          'Presentation Weight (g)': '1500',
          'Net Weight (kg)': '1.5',
          'Box size': '30*20*11.5',
          '80x120': '270',
          'Net Weight 80x120 (Kg)': '405',
          '100x120': '324',
          'Net Weight 100x120 (Kg)': '486',
          Image: amela1,
        },
        {
          Packaging: 'Loose',
          Presentation: '1',
          'Presentation Weight (g)': '3000',
          'Net Weight (kg)': '3',
          'Box size': '40*30*12',
          '80x120': '144',
          'Net Weight 80x120 (Kg)': '432',
          '100x120': '180',
          'Net Weight 100x120 (Kg)': '540',
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


export default TribelliPackagingTable;
