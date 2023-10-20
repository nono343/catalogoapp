import React, { useState } from 'react';
import amela1 from '../../assets/tomatedulce/amela/amela1.jpg';


function CherryPackagingTable() {
    const [products, setProducts] = useState([
        {
          Packaging: 'Bucket with lid',
          Presentation: '9',
          'Presentation Weight (g)': '300',
          'Net Weight (kg)': '2.7',
          'Box size': '40*30*12',
          '80x120': '144',
          'Net Weight 80x120 (Kg)': '388.8',
          '100x120': '180',
          'Net Weight 100x120 (Kg)': '486',
          Image: amela1,
        },
        {
          Packaging: 'Bucket with lid',
          Presentation: '6',
          'Presentation Weight (g)': '500',
          'Net Weight (kg)': '3',
          'Box size': '40*30*14',
          '80x120': '128',
          'Net Weight 80x120 (Kg)': '384',
          '100x120': '150',
          'Net Weight 100x120 (Kg)': '450',
          Image: amela1,
        },
        {
          Packaging: 'Bucket with lid',
          Presentation: '14',
          'Presentation Weight (g)': '500',
          'Net Weight (kg)': '7',
          'Box size': '60*40*15',
          '80x120': '60',
          'Net Weight 80x120 (Kg)': '420',
          '100x120': '75',
          'Net Weight 100x120 (Kg)': '525',
          Image: amela1,
        },
        {
          Packaging: 'Cardboard with flowpack',
          Presentation: '9',
          'Presentation Weight (g)': '200',
          'Net Weight (kg)': '1.8',
          'Box size': '40*30*9.5',
          '80x120': '176',
          'Net Weight 80x120 (Kg)': '316.8',
          '100x120': '220',
          'Net Weight 100x120 (Kg)': '396',
          Image: amela1,
        },
        {
          Packaging: 'Cardboard with flowpack',
          Presentation: '9',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '2.25',
          'Box size': '40*30*8',
          '80x120': '208',
          'Net Weight 80x120 (Kg)': '468',
          '100x120': '260',
          'Net Weight 100x120 (Kg)': '585',
          Image: amela1,
        },
        {
          Packaging: 'Cardboard with flowpack',
          Presentation: '10',
          'Presentation Weight (g)': '350',
          'Net Weight (kg)': '3.5',
          'Box size': '60*40*7',
          '80x120': '124',
          'Net Weight 80x120 (Kg)': '434',
          '100x120': '155',
          'Net Weight 100x120 (Kg)': '542.5',
          Image: amela1,
        },
        {
          Packaging: 'Cardboard with flowpack',
          Presentation: '10',
          'Presentation Weight (g)': '500',
          'Net Weight (kg)': '5',
          'Box size': '60*40*8',
          '80x120': '104',
          'Net Weight 80x120 (Kg)': '520',
          '100x120': '130',
          'Net Weight 100x120 (Kg)': '650',
          Image: amela1,
        },
        {
          Packaging: 'Cardboard with lid',
          Presentation: '9',
          'Presentation Weight (g)': '200',
          'Net Weight (kg)': '1.8',
          'Box size': '40*30*9.5',
          '80x120': '176',
          'Net Weight 80x120 (Kg)': '316.8',
          '100x120': '220',
          'Net Weight 100x120 (Kg)': '396',
          Image: amela1,
        },
        {
          Packaging: 'Cellulose pulp top seal punnet',
          Presentation: '6',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '1.5',
          'Box size': '40*30*7',
          '80x120': '248',
          'Net Weight 80x120 (Kg)': '372',
          '100x120': '310',
          'Net Weight 100x120 (Kg)': '465',
          Image: amela1,
        },
        {
          Packaging: 'Cellulose pulp top seal punnet',
          Presentation: '12',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '3',
          'Box size': '40*30*12',
          '80x120': '144',
          'Net Weight 80x120 (Kg)': '432',
          '100x120': '180',
          'Net Weight 100x120 (Kg)': '540',
          Image: amela1,
        },
        {
          Packaging: 'Cellulose pulp top seal punnet',
          Presentation: '12',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '3',
          'Box size': '60*40*6.2',
          '80x120': '144',
          'Net Weight 80x120 (Kg)': '432',
          '100x120': '180',
          'Net Weight 100x120 (Kg)': '540',
          Image: amela1,
        },
        {
          Packaging: 'Cellulose pulp top seal punnet',
          Presentation: '10',
          'Presentation Weight (g)': '300',
          'Net Weight (kg)': '3',
          'Box size': '60*40*7',
          '80x120': '124',
          'Net Weight 80x120 (Kg)': '372',
          '100x120': '155',
          'Net Weight 100x120 (Kg)': '465',
          Image: amela1,
        },
        {
          Packaging: 'Cellulose pulp top seal punnet',
          Presentation: '10',
          'Presentation Weight (g)': '400',
          'Net Weight (kg)': '4',
          'Box size': '60*40*9.7',
          '80x120': '92',
          'Net Weight 80x120 (Kg)': '368',
          '100x120': '115',
          'Net Weight 100x120 (Kg)': '460',
          Image: amela1,
        },
        {
          Packaging: 'Flowpack bag',
          Presentation: '12',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '3',
          'Box size': '40*30*9.5',
          '80x120': '176',
          'Net Weight 80x120 (Kg)': '528',
          '100x120': '220',
          'Net Weight 100x120 (Kg)': '660',
          Image: amela1,
        },
        {
          Packaging: 'Flowpack Snack Bag',
          Presentation: '25',
          'Presentation Weight (g)': '100',
          'Net Weight (kg)': '2.5',
          'Box size': '40*30*9.5',
          '80x120': '176',
          'Net Weight 80x120 (Kg)': '440',
          '100x120': '220',
          'Net Weight 100x120 (Kg)': '550',
          Image: amela1,
        },
        {
          Packaging: 'Loose',
          Presentation: '1',
          'Presentation Weight (g)': '1000',
          'Net Weight (kg)': '1',
          'Box size': '30*20*6',
          '80x120': '576',
          'Net Weight 80x120 (Kg)': '720',
          '100x120': '720',
          'Net Weight 100x120 (Kg)': '720',
          Image: amela1,
        },
        {
          Packaging: 'Loose',
          Presentation: '1',
          'Presentation Weight (g)': '2500',
          'Net Weight (kg)': '2.5',
          'Box size': '30*20*11.5',
          '80x120': '276',
          'Net Weight 80x120 (Kg)': '690',
          '100x120': '340',
          'Net Weight 100x120 (Kg)': '850',
          Image: amela1,
        },
        {
          Packaging: 'Loose',
          Presentation: '1',
          'Presentation Weight (g)': '3000',
          'Net Weight (kg)': '3',
          'Box size': '40*30*8',
          '80x120': '208',
          'Net Weight 80x120 (Kg)': '624',
          '100x120': '260',
          'Net Weight 100x120 (Kg)': '780',
          Image: amela1,
        },
        {
          Packaging: 'Loose',
          Presentation: '1',
          'Presentation Weight (g)': '4000',
          'Net Weight (kg)': '4',
          'Box size': '40*30*9.5',
          '80x120': '176',
          'Net Weight 80x120 (Kg)': '704',
          '100x120': '220',
          'Net Weight 100x120 (Kg)': '880',
          Image: amela1,
        },
        {
          Packaging: 'Loose',
          Presentation: '1',
          'Presentation Weight (g)': '12000',
          'Net Weight (kg)': '12',
          'Box size': '60*40*16',
          '80x120': '52',
          'Net Weight 80x120 (Kg)': '624',
          '100x120': '65',
          'Net Weight 100x120 (Kg)': '780',
          Image: amela1,
        },
        {
          Packaging: 'Punned with lid',
          Presentation: '5',
          'Presentation Weight (g)': '300',
          'Net Weight (kg)': '1.5',
          'Box size': '40*30*7',
          '80x120': '248',
          'Net Weight 80x120 (Kg)': '372',
          '100x120': '310',
          'Net Weight 100x120 (Kg)': '465',
          Image: amela1,
        },
        {
          Packaging: 'Punned with lid',
          Presentation: '10',
          'Presentation Weight (g)': '300',
          'Net Weight (kg)': '3',
          'Box size': '60*40*7',
          '80x120': '124',
          'Net Weight 80x120 (Kg)': '372',
          '100x120': '155',
          'Net Weight 100x120 (Kg)': '465',
          Image: amela1,
        },
        {
          Packaging: 'Punnet with flowpack',
          Presentation: '6',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '1.5',
          'Box size': '40*30*8',
          '80x120': '224',
          'Net Weight 80x120 (Kg)': '336',
          '100x120': '280',
          'Net Weight 100x120 (Kg)': '420',
          Image: amela1,
        },
        {
          Packaging: 'Punnet with flowpack',
          Presentation: '12',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '3',
          'Box size': '40*30*12',
          '80x120': '144',
          'Net Weight 80x120 (Kg)': '432',
          '100x120': '180',
          'Net Weight 100x120 (Kg)': '540',
          Image: amela1,
        },
        {
          Packaging: 'Punnet with flowpack',
          Presentation: '12',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '3',
          'Box size': '60*40*6.2',
          '80x120': '144',
          'Net Weight 80x120 (Kg)': '432',
          '100x120': '180',
          'Net Weight 100x120 (Kg)': '540',
          Image: amela1,
        },
        {
          Packaging: 'Punnet with flowpack',
          Presentation: '5',
          'Presentation Weight (g)': '300',
          'Net Weight (kg)': '1.5',
          'Box size': '40*30*7',
          '80x120': '248',
          'Net Weight 80x120 (Kg)': '372',
          '100x120': '155',
          'Net Weight 100x120 (Kg)': '232.5',
          Image: amela1,
        },
        {
          Packaging: 'Punnet with flowpack',
          Presentation: '10',
          'Presentation Weight (g)': '300',
          'Net Weight (kg)': '3',
          'Box size': '60*40*7',
          '80x120': '124',
          'Net Weight 80x120 (Kg)': '372',
          '100x120': '310',
          'Net Weight 100x120 (Kg)': '930',
          Image: amela1,
        },
        {
          Packaging: 'Punnet with flowpack',
          Presentation: '10',
          'Presentation Weight (g)': '400',
          'Net Weight (kg)': '4',
          'Box size': '60*40*8',
          '80x120': '104',
          'Net Weight 80x120 (Kg)': '520',
          '100x120': '130',
          'Net Weight 100x120 (Kg)': '650',
          Image: amela1,
        },
        {
          Packaging: 'Punnet with flowpack',
          Presentation: '10',
          'Presentation Weight (g)': '500',
          'Net Weight (kg)': '5',
          'Box size': '60*40*8',
          '80x120': '104',
          'Net Weight 80x120 (Kg)': '520',
          '100x120': '130',
          'Net Weight 100x120 (Kg)': '650',
          Image: amela1,
        },
        {
          Packaging: 'Punnet with lid',
          Presentation: '5',
          'Presentation Weight (g)': '300',
          'Net Weight (kg)': '1.5',
          'Box size': '40*30*7',
          '80x120': '248',
          'Net Weight 80x120 (Kg)': '372',
          '100x120': '310',
          'Net Weight 100x120 (Kg)': '465',
          Image: amela1,
        },
        {
          Packaging: 'Punnet with lid',
          Presentation: '10',
          'Presentation Weight (g)': '300',
          'Net Weight (kg)': '3',
          'Box size': '60*40*7',
          '80x120': '124',
          'Net Weight 80x120 (Kg)': '372',
          '100x120': '155',
          'Net Weight 100x120 (Kg)': '465',
          Image: amela1,
        },
        {
          Packaging: 'Shaker with lid',
          Presentation: '12',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '3',
          'Box size': '40*30*15.2',
          '80x120': '112',
          'Net Weight 80x120 (Kg)': '336',
          '100x120': '140',
          'Net Weight 100x120 (Kg)': '420',
          Image: amela1,
        },
        {
          Packaging: 'Shaker with lid',
          Presentation: '5',
          'Presentation Weight (g)': '300',
          'Net Weight (kg)': '1.5',
          'Box size': '40*30*7',
          '80x120': '248',
          'Net Weight 80x120 (Kg)': '372',
          '100x120': '310',
          'Net Weight 100x120 (Kg)': '465',
          Image: amela1,
        },
        {
          Packaging: 'Shaker with lid',
          Presentation: '10',
          'Presentation Weight (g)': '300',
          'Net Weight (kg)': '3',
          'Box size': '60*40*7',
          '80x120': '124',
          'Net Weight 80x120 (Kg)': '372',
          '100x120': '155',
          'Net Weight 100x120 (Kg)': '465',
          Image: amela1,
        },
        {
          Packaging: 'Stockable clamshell shaker',
          Presentation: '12',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '3',
          'Box size': '40*30*12',
          '80x120': '144',
          'Net Weight 80x120 (Kg)': '432',
          '100x120': '180',
          'Net Weight 100x120 (Kg)': '540',
          Image: amela1,
        },
        {
          Packaging: 'Top seal punnet',
          Presentation: '9',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '2.25',
          'Box size': '40*30*8',
          '80x120': '224',
          'Net Weight 80x120 (Kg)': '504',
          '100x120': '280',
          'Net Weight 100x120 (Kg)': '630',
          Image: amela1,
        },
        {
          Packaging: 'Top seal punnet',
          Presentation: '6',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '1.5',
          'Box size': '40*30*7',
          '80x120': '248',
          'Net Weight 80x120 (Kg)': '372',
          '100x120': '310',
          'Net Weight 100x120 (Kg)': '465',
          Image: amela1,
        },
        {
          Packaging: 'Top seal punnet',
          Presentation: '12',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '3',
          'Box size': '40*30*12',
          '80x120': '144',
          'Net Weight 80x120 (Kg)': '432',
          '100x120': '180',
          'Net Weight 100x120 (Kg)': '540',
          Image: amela1,
        },
        {
          Packaging: 'Top seal punnet',
          Presentation: '12',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '3',
          'Box size': '60*40*6.2',
          '80x120': '144',
          'Net Weight 80x120 (Kg)': '432',
          '100x120': '180',
          'Net Weight 100x120 (Kg)': '540',
          Image: amela1,
        },
        {
          Packaging: 'Top seal punnet',
          Presentation: '10',
          'Presentation Weight (g)': '300',
          'Net Weight (kg)': '3',
          'Box size': '60*40*7',
          '80x120': '124',
          'Net Weight 80x120 (Kg)': '372',
          '100x120': '155',
          'Net Weight 100x120 (Kg)': '465',
          Image: amela1,
        },
        {
          Packaging: 'Top seal punnet',
          Presentation: '10',
          'Presentation Weight (g)': '500',
          'Net Weight (kg)': '5',
          'Box size': '60*40*9.7',
          '80x120': '92',
          'Net Weight 80x120 (Kg)': '460',
          '100x120': '115',
          'Net Weight 100x120 (Kg)': '575',
          Image: amela1,
        },
        {
          Packaging: 'Top seal punnet',
          Presentation: '6',
          'Presentation Weight (g)': '500',
          'Net Weight (kg)': '3',
          'Box size': '60*40*6.2',
          '80x120': '144',
          'Net Weight 80x120 (Kg)': '432',
          '100x120': '180',
          'Net Weight 100x120 (Kg)': '540',
          Image: amela1,
        },
        {
          Packaging: 'Top seal punnet with bad',
          Presentation: '6',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '1.5',
          'Box size': '40*30*7',
          '80x120': '248',
          'Net Weight 80x120 (Kg)': '372',
          '100x120': '310',
          'Net Weight 100x120 (Kg)': '465',
          Image: amela1,
        },
        {
          Packaging: 'Top seal punnet with bad',
          Presentation: '12',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '3',
          'Box size': '40*30*12',
          '80x120': '144',
          'Net Weight 80x120 (Kg)': '432',
          '100x120': '180',
          'Net Weight 100x120 (Kg)': '540',
          Image: amela1,
        },
        {
          Packaging: 'Top seal punnet with bad',
          Presentation: '12',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '3',
          'Box size': '60*40*6.2',
          '80x120': '144',
          'Net Weight 80x120 (Kg)': '432',
          '100x120': '180',
          'Net Weight 100x120 (Kg)': '540',
          Image: amela1,
        },
        {
          Packaging: 'Triangular clamshell',
          Presentation: '12',
          'Presentation Weight (g)': '250',
          'Net Weight (kg)': '3',
          'Box size': '40*30*12',
          '80x120': '124',
          'Net Weight 80x120 (Kg)': '372',
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

    return (
        <section className=" body-font  mb-5 max-w-screen-2xl mx-auto">
            <h1 className="sm:text-3xl text-center text-2xl mb-5">Formatos de venta</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    {/* <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Our products
                        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                    </caption> */}
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
                            <th scope="col" className="px-4 sm:px-6 py-3" onClick={() => handleSort('Net Weight 80x120 (Kg)')}>
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
                            className="w-full h-full max-w-screen-md sm:max-w-screen-lg object-contain cursor-pointer"
                            onClick={closeLargeImage}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

export default CherryPackagingTable;
