import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Carousel, IconButton } from "@material-tailwind/react";
import { dataMinivegetalesDetalle } from '../detailCards/dataMinivegetalesDetalle';
import MycubiesPackagingTable from '../../components/packagingtables/mycubiesPackagingTable';
import TribelliPackagingTable from '../../components/packagingtables/tribelliPackagingTable';
import MinivegetalesparrillaPackagingTable from '../../components/packagingtables/minivegetalesparrillaPackagingTable';

function MinivegetalesDetalle({ isSpanish }) {
    const { nombreCard } = useParams();
    const card = dataMinivegetalesDetalle[nombreCard];
    const { name, description, image, image1, productionSchedule } = card;
    const cardName = name[isSpanish ? 'es' : 'en'];
    const descripcion = description[isSpanish ? 'es' : 'en'];
    const location = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 animate-fade-right">
                        <Carousel
                            className="rounded-xl"
                            navigation={({ setActiveIndex, activeIndex, length }) => (
                                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                    {new Array(length).fill("").map((_, i) => (
                                        <span
                                            key={i}
                                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i
                                                ? "w-8 bg-green-500"
                                                : "w-4 bg-green-500/50"
                                                }`}
                                            onClick={() => setActiveIndex(i)}
                                        />
                                    ))}
                                </div>
                            )}
                            prevArrow={({ handlePrev }) => (
                                <IconButton
                                    variant="text"
                                    color="green"
                                    size="lg"
                                    onClick={handlePrev}
                                    className="!absolute top-2/4 left-4 -translate-y-2/4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                        />
                                    </svg>
                                </IconButton>
                            )}
                            nextArrow={({ handleNext }) => (
                                <IconButton
                                    variant="text"
                                    color="green"
                                    size="lg"
                                    onClick={handleNext}
                                    className="!absolute top-2/4 !right-4 -translate-y-2/4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                </IconButton>
                            )}


                        >
                            <img
                                src={image}
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src={image1}
                                alt="image 2"
                                className="h-full w-full object-cover"
                            />
                        </Carousel>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center animate-fade-left">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            {cardName}
                        </h1>
                        <p className="mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: descripcion }}></p>
                    </div>
                </div>
            </section>

            {productionSchedule && productionSchedule.length > 0 && (
                <div className="border-t mx-auto border-gray-200 bg-white px-10 py-10 sm:px-6 animate-fade-up">
                    <h1 className="sm:text-3xl text-center text-2xl mb-5">
                        {isSpanish ? 'Calendario de producción' : 'Production Schedule'}
                    </h1>
                    <div className="flex justify-center max-w-screen-md mx-auto">
                        {productionSchedule.map((item, index) => (
                            <a
                                key={index}
                                className={`relative inline-flex w-1/12 sm:w-1/12 mr-1 h-16 ${item.isRed ? 'bg-red-600' : 'bg-gray-200'} mb-2 flex items-center justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transform hover:scale-110 transition-transform`} /* Agrega las clases de hover y transform aquí */
                            >
                                {index + 1}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            <div className="border-t mx-auto border-gray-200 bg-white px-4 py-3 sm:px-6">
            </div>
            {nombreCard === 'pepino_cocktail_mycubies' || nombreCard === 'cucumber_snack_mycubies' ? <MycubiesPackagingTable isSpanish={isSpanish} /> : null}
            {nombreCard === 'minipimientos_tribelli' || nombreCard === 'sweet_baby_peppers_tribelli' ? <TribelliPackagingTable isSpanish={isSpanish} /> : null}
            {nombreCard === 'minivegetales_a_la_parrilla__bbq' || nombreCard === 'miniveggies_oven_roastand_bbq' ? <MinivegetalesparrillaPackagingTable isSpanish={isSpanish} /> : null}

        </div>
    );
}

export default MinivegetalesDetalle;
