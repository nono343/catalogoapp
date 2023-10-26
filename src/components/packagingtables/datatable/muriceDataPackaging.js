import amelaImage from '../../../assets/tomatedulce/amela/amela1.jpg';

const MuriceDataPackaging = (isSpanish) => {
    return {
        Packaging: [
            {
                Packaging: isSpanish ? 'TARRINA DE CARTÓN CON FLOWPACK' : 'CARDBOARD WITH FLOWPACK',
                Presentation: '8',
                'Presentation Weight (g)': '300',
                'Net Weight (kg)': '2.4',
                'Box size': isSpanish ? '40*30*8' : '40x30x8',
                '80x120': '208',
                'Net Weight 80x120 (Kg)': '499',
                '100x120': '260',
                'Net Weight 100x120 (Kg)': '624',
                Image: amelaImage,
            },
            {
                Packaging: isSpanish ? 'TARRINA DE CARTÓN CON FLOWPACK' : 'CARDBOARD WITH FLOWPACK',
                Presentation: '6',
                'Presentation Weight (g)': '400',
                'Net Weight (kg)': '2.4',
                'Box size': isSpanish ? '40*30*8' : '40x30x8',
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
                'Box size': isSpanish ? '40x30x8' : '40x30x8',
                '80x120': '208',
                'Net Weight 80x120 (Kg)': '624',
                '100x120': '260',
                'Net Weight 100x120 (Kg)': '780',
                Image: amelaImage,
            },
            {
                Packaging: isSpanish ? 'GRANEL CAJA DE MADERA' : 'LOOSE WOODEN BOX',
                Presentation: '1',
                'Presentation Weight (g)': '3000',
                'Net Weight (kg)': '3',
                'Box size': isSpanish ? '40X30X9' : '40x30x9',
                '80x120': '176',
                'Net Weight 80x120 (Kg)': '528',
                '100x120': '220',
                'Net Weight 100x120 (Kg)': '660',
                Image: amelaImage,
            },
        ],
    };
};

export default MuriceDataPackaging;
