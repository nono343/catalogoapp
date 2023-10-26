import amelaImage from '../../../assets/tomatedulce/amela/amela1.jpg';

const PeraDataPackaging = (isSpanish) => {
    return {
        Packaging: [
            {
                Packaging: isSpanish ? 'TARRINA CON FLOWPACK' : 'PUNNET WITH FLOWPACK',
                Presentation: '10',
                'Presentation Weight (g)': '500',
                'Net Weight (kg)': '5',
                'Box size': '60X40X9.7',
                '80x120': '92',
                'Net Weight 80x120 (Kg)': '460',
                '100x120': '115',
                'Net Weight 100x120 (Kg)': '575',
                Image: amelaImage,
              },
              {
                Packaging: isSpanish ? 'GRANEL' : 'LOOSE',
                Presentation: '1',
                'Presentation Weight (g)': '6000',
                'Net Weight (kg)': '6',
                'Box size': '40X30X14',
                '80x120': '128',
                'Net Weight 80x120 (Kg)': '768',
                '100x120': '150',
                'Net Weight 100x120 (Kg)': '900',
                Image: amelaImage,
              },
              {
                Packaging: isSpanish ? 'GRANEL' : 'LOOSE',
                Presentation: '1',
                'Presentation Weight (g)': '6000',
                'Net Weight (kg)': '6',
                'Box size': '60X40X9.7',
                '80x120': '92',
                'Net Weight 80x120 (Kg)': '552',
                '100x120': '115',
                'Net Weight 100x120 (Kg)': '690',
                Image: amelaImage,
              },
            
        ],
    };
};

export default PeraDataPackaging;
