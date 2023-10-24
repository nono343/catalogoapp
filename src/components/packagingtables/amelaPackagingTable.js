import React, { useState } from 'react';
import amela1 from '../../assets/tomatedulce/amela/amela1.jpg';
import { Card, Typography } from "@material-tailwind/react";
import { Input } from '@material-tailwind/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function AmelaPackagingTable({ isSpanish }) {
    const TABLE_HEAD = isSpanish
        ? ["Embalaje", "Presentación (unidades/caja)", "Peso de Presentación (g)", "Peso Neto (kg)", "80x120 (cajas/palet)", "Peso Neto de 80x120 (kg)", "100x120 (cajas/palet)", "Imagen"]
        : ["Packaging", "Presentation (units/box)", "Presentation Weight (g)", "Net Weight (kg)", "80x120 (boxes/palet)", "80x120 Net Weight (kg)", "100x120 (boxes/palet)", "Image"];

    const TABLE_ROWS = [
        {
            packaging: isSpanish ? "Embalaje" : "Packaging",
            presentation: isSpanish ? "Presentación (unidades/caja)" : "Presentation (units/box)",
            presentationWeight: isSpanish ? "Peso de Presentación (g)" : "Presentation Weight (g)",
            netWeight: isSpanish ? "Peso Neto (kg)" : "Net Weight (kg)",
            size80120: isSpanish ? "80x120 (cajas/palet)" : "80x120 (boxes/palet)",
            weight80120: isSpanish ? "Peso Neto de 80x120 (kg)" : "80x120 Net Weight (kg)",
            size100120: isSpanish ? "100x120 (cajas/palet)" : "100x120 (boxes/palet)",
            imageSmall: amela1, // Imagen pequeña en la tabla
            imageLarge: amela1, // URL de la imagen grande
            isEnlarged: false, // Estado de ampliación inicialmente en falso
        },
        {
            packaging: isSpanish ? "Antonio" : "Pepe",
            presentation: isSpanish ? "Presentación (unidades/caja)" : "Presentation (units/box)",
            presentationWeight: isSpanish ? "Peso de Presentación (g)" : "Presentation Weight (g)",
            netWeight: isSpanish ? "Peso Neto (kg)" : "Net Weight (kg)",
            size80120: isSpanish ? "80x120 (cajas/palet)" : "80x120 (boxes/palet)",
            weight80120: isSpanish ? "Peso Neto de 80x120 (kg)" : "80x120 Net Weight (kg)",
            size100120: isSpanish ? "100x120 (cajas/palet)" : "100x120 (boxes/palet)",
            imageSmall: amela1, // Imagen pequeña en la tabla
            imageLarge: amela1, // URL de la imagen grande
            isEnlarged: false, // Estado de ampliación inicialmente en falso
        },
        // Agrega más filas según sea necesario
    ];

    const [showLargeImage, setShowLargeImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleImageClick = (imageLarge) => {
        setSelectedImage(imageLarge);
        setShowLargeImage(true);
    };

    const closeLargeImage = () => {
        setSelectedImage(null);
        setShowLargeImage(false);
    };

    const clearSearch = () => {
        setSearchTerm('');
    };

    const filteredRows = TABLE_ROWS.filter((row) => {
        // Realiza el filtrado por término de búsqueda en la propiedad "packaging".
        return row.packaging.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <section className="body-font mb-5 max-w-screen-2xl mx-auto">
            <h1 className="sm:text-3xl text-center text-2xl mb-5">
                {isSpanish ? "Formatos de venta" : "Selling Formats"}
            </h1>

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

            <div className='container max-w-screen-sm relative m-auto text-center px-6 text-gray-500 md:px-12 mb-5 animate-fade-up'>
                <div className="relative">
                    <Input
                        color="red"
                        label={isSpanish ? "Buscar formatos de venta..." : "Search selling formats..."}
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <button
                            onClick={clearSearch}
                            className="absolute top-0 right-0 m-2 text-gray-500 hover-text-red-500"
                        >
                            <XMarkIcon className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <Card className="h-full w-full">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRows.map(({ packaging, imageSmall, imageLarge, isEnlarged, presentation, presentationWeight, netWeight, size80120, weight80120, size100120 }, index) => {
                                const isLast = index === filteredRows.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={packaging}>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {packaging}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {presentation}
                                            </Typography>
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50`}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {presentationWeight}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {netWeight}
                                            </Typography>
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50`}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {size80120}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {weight80120}
                                            </Typography>
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50`}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {size100120}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            {<img
                                                src={imageSmall}
                                                alt={packaging}
                                                className="w-20 h-20 mx-auto cursor-pointer"
                                                onClick={() => handleImageClick(imageLarge)}
                                            />}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Card>
            </div>
        </section>
    );
}

export default AmelaPackagingTable;
