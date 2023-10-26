import amelaImage from '../../../assets/tomatedulce/amela/amela1.jpg';

const MelangeDataPackaging = (isSpanish) => {
    return {
        Packaging: [
            {
                Packaging: isSpanish ? 'TARRINA DE CARTÓN CON FLOWPACK' : 'CARDBOARD WITH FLOWPACK',
                Presentation: '6',
                'Presentation Weight (g)': '750',
                'Net Weight (kg)': '4.5',
                'Box size': '60X40X8',
                '80x120': '104',
                'Net Weight 80x120 (Kg)': '468',
                '100x120': '130',
                'Net Weight 100x120 (Kg)': '585',
                Image: amelaImage,
              },
              {
                Packaging: isSpanish ? 'GRANEL' : 'LOOSE',
                Presentation: '1',
                'Presentation Weight (g)': '1000',
                'Net Weight (kg)': '1',
                'Box size': '30X20X8',
                '80x120': '384',
                'Net Weight 80x120 (Kg)': '384',
                '100x120': '480',
                'Net Weight 100x120 (Kg)': '480',
              },
              {
                Packaging: isSpanish ? 'GRANEL CAJA DE MADERA' : 'LOOSE WOODEN BOX',
                Presentation: '1',
                'Presentation Weight (g)': '3400',
                'Net Weight (kg)': '3.4',
                'Box size': '40X30X9',
                '80x120': '176',
                'Net Weight 80x120 (Kg)': '598.4',
                '100x120': '220',
                'Net Weight 100x120 (Kg)': '748',
              },
                    
        ],
    };
};

export default MelangeDataPackaging;
