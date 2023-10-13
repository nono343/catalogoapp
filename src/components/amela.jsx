import React from 'react';
import { Carousel } from "@material-tailwind/react";
import amela1 from "/workspaces/codespaces-react/src/assets/tomatedulce/amela/amela1.jpg";
import amela2 from "/workspaces/codespaces-react/src/assets/tomatedulce/amela/amela2.jpg";

function Amela() {
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
                        {/* <div class="flex justify-center">
                            <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div> */}
                    </div>
                </div>
            </section>
{/* 
            <section className="text-gray-600 body-font overflow-hidden">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 text-center">Amela</h1>
                <div className="container px-5 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
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
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <p className="leading-relaxed">
                                <b>¿Es realmente Amela® un tomate?</b>
                                <br />
                                Quizá sea debido a su rico, dulce e intenso sabor por lo que a menudo los clientes piensan que Amela® es una fruta.
                                <br /><br />
                                Este tomate trae consigo un toque oriental que lo hace único e inigualable.
                                <br /><br />
                                Nuestro objetivo no es sólo hacer un buen tomate, sino también tocar tu corazón
                            </p>
                        </div>
                    </div>
                </div>
            </section>
 */}
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

            {/* <section className="text-gray-600 body-font border-t border-gray-200">
                <div className="container px-5 mx-auto mt-5">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Packaging</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                                <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                                <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                                <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
                </div>
            </section> */}
        </>
    );
}

export default Amela;
