import React from 'react';
import { Carousel } from "@material-tailwind/react";
import trimix1 from "/workspaces/codespaces-react/src/assets/cherryredondo/trimix/trimix1.PNG";
import trimix2 from "/workspaces/codespaces-react/src/assets/cherryredondo/trimix/trimix2.PNG";
import trimix3 from "/workspaces/codespaces-react/src/assets/cherryredondo/trimix/trimix3.PNG";
import trimix4 from "/workspaces/codespaces-react/src/assets/cherryredondo/trimix/trimix4.PNG";
import minidelicias from "/workspaces/codespaces-react/src/assets/minidelicias/minidelicias.jpg";

function Amela() {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Carousel className="rounded-xl">
                            <img
                                src={minidelicias}
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                            {/* <img
                                src={fiesta}
                                alt="image 2"
                                className="h-full w-full object-cover"
                            /> */}
                        </Carousel>
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Trimix
                        </h1>
                        <p class="mb-8 leading-relaxed">Exquisita selección de
                            tomates cherry
                            Una mezcla de las excelentes cualidades
                            de nuestros tomates cherry. <br></br>
                            Forma, sabor, aroma y color fusionadas
                            en una propuesta llamativa y llena de
                            vida. Una auténtica experiencia para los
                            sentidos.
                            Un mix que hará de tus ensaladas una
                            auténtica experiencia para los sentidos.<br></br>
                            Ideal para salsas, acompañamientos,
                            decoración de platos o entrantes.
                            Imprescindibles en nuestra cocina.</p>
                        {/* <div class="flex justify-center">
                            <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div> */}
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

            <section className="text-gray-600 body-font border-t border-gray-200">
                <div className="container px-5 mx-auto mt-5">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Packaging</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">Descubre todos los envases disponibles.</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                            <img
                                src={trimix1}
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">140g Clamshell</h2>
                                <p className="leading-relaxed text-base">140g Tarrina con visagra</p>
                                {/* <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a> */}
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                            <img
                                src={trimix2}
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">300g Punnet with flowpack</h2>
                                <p className="leading-relaxed text-base">300g Tarrina con flowpac</p>
                                {/* <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a> */}
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                            <img
                                src={trimix3}
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">300g Top seal punnet</h2>
                                <p className="leading-relaxed text-base">300g Tarrina termosellada</p>
                                {/* <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a> */}
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                            <img
                                src={trimix4}
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">300g Top seal punnet</h2>
                                <p className="leading-relaxed text-base">300g Tarrina termosellada</p>
                                {/* <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a> */}
                            </div>
                        </div>
                    </div>
                    {/* <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button> */}
                </div>
            </section>
        </>
    );
}

export default Amela;
