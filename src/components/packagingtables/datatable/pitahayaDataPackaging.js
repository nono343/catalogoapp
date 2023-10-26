import amelaImage from '../../../assets/tomatedulce/amela/amela1.jpg';

const PitahayaDataPackaging = (isSpanish) => {
    return {
        Packaging: [
            {
                Packaging: isSpanish ? 'TARRINA DE CARTÓN CON FLOWPACK' : 'CARDBOARD WITH FLOWPACK',
                Presentation: '9',
                'Presentation Weight (g)': '200',
                'Net Weight (kg)': '1.8',
                'Box size': isSpanish ? '40X30X9,5' : '40x30x9.5',
                '80x120': '144',
                'Net Weight 80x120 (Kg)': '259',
                '100x120': '180',
                'Net Weight 100x120 (Kg)': '324',
                Image: amelaImage,
            },
            {
                Packaging: isSpanish ? 'GRANEL' : 'LOOSE',
                Presentation: '1',
                'Presentation Weight (g)': '3000',
                'Net Weight (kg)': '3',
                'Box size': isSpanish ? '40X30X12' : '40x30x12',
                '80x120': '144',
                'Net Weight 80x120 (Kg)': '432',
                '100x120': '180',
                'Net Weight 100x120 (Kg)': '540',
                Image: amelaImage,
            },
        ],
    };
};

export default PitahayaDataPackaging;
