import amelaImage from '../../../assets/tomatedulce/amela/amela1.jpg';

const ChocmatoDataPackaging = (isSpanish) => {
    return {
        Packaging: [
            {
                Packaging: isSpanish ? 'TARRINA DE CARTÓN CON FLOWPACK' : 'CARDBOARD WITH FLOWPACK',
                Presentation: '6',
                'Presentation Weight (g)': '400',
                'Net Weight (kg)': '2.4',
                'Box size': '40*30*8',
                '80x120': '208',
                'Net Weight 80x120 (Kg)': '499',
                '100x120': '260',
                'Net Weight 100x120 (Kg)': '624',
                Image: amelaImage,
            },
            {
                Packaging: isSpanish ? 'GRANEL' : 'LOOSE',
                Presentation: '1',
                'Presentation Weight (g)': '3000',
                'Net Weight (kg)': '3',
                'Box size': '40X30X7',
                '80x120': '208',
                'Net Weight 80x120 (Kg)': '624',
                '100x120': '260',
                'Net Weight 100x120 (Kg)': '780',
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
                'Box size': '40X30X9.7',
                '80x120': '92',
                'Net Weight 80x120 (Kg)': '552',
                '100x120': '115',
                'Net Weight 100x120 (Kg)': '690',
                Image: amelaImage,
            },
        ],
    };
};

export default ChocmatoDataPackaging;
