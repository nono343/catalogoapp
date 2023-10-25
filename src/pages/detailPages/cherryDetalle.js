import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { dataCherryDetalle } from '../detailCards/dataCherrysDetalle';
import CherryPackagingTable from '../../components/packagingtables/cherryPackagingTable';


function CherryDetalle({ isSpanish }) {
    const { nombreCard } = useParams();
    const card = dataCherryDetalle[nombreCard];
    const { name, description, image, productionSchedule } = card;
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
                        <img
                            src={image}
                            alt={nombreCard}
                            className="h-full w-full object-cover"
                        />
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
        <div className="border-t mx-auto border-gray-200 bg-white px-10 py-10 sm:px-6">
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
            <CherryPackagingTable />
        </div>
    );
}

export default CherryDetalle;
