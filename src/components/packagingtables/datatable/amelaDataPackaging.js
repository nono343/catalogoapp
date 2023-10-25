import amelaImage from '../../../assets/tomatedulce/amela/amela1.jpg';

const AmelaDataPackaging = (isSpanish) => {
    return {
        Packaging: [
            {
                Packaging: isSpanish ? 'TARRINA DE CARTÓN CON FLOWPACK' : 'CARDBOARD WITH FLOWPAC',
                Presentation: '1',
                'Presentation Weight (g)': '160',
                'Net Weight (kg)': '1.92',
                'Box size': '40*30*7',
                '80x120': '248',
                'Net Weight 80x120 (Kg)': '476',
                '100x120': '310',
                'Net Weight 100x120 (Kg)': '595',
                Image: amelaImage,
            },
            {
                Packaging: isSpanish ? 'TARRINA TERMOSELLADA' : 'TOP SEAL PUNNER',
                Presentation: '1',
                'Presentation Weight (g)': '280',
                'Net Weight (kg)': '1.68',
                'Box size': '40*30*7',
                '80x120': '248',
                'Net Weight 80x120 (Kg)': '417',
                '100x120': '310',
                'Net Weight 100x120 (Kg)': '521',
                Image: amelaImage,
            },
            {
                Packaging: isSpanish ? 'TARRINA DE CARTÓN' : 'CARDBOARD PUNNET',
                Presentation: '1',
                'Presentation Weight (g)': '350',
                'Net Weight (kg)': '2.1',
                'Box size': '40*30*7',
                '80x120': '248',
                'Net Weight 80x120 (Kg)': '521',
                '100x120': '310',
                'Net Weight 100x120 (Kg)': '651',
                Image: amelaImage,
            },
            {
                Packaging: isSpanish ? 'GRANEL' : 'LOOSE',
                Presentation: '1',
                'Presentation Weight (g)': '1000',
                'Net Weight (kg)': '1',
                'Box size': '24*18*6',
                '80x120': '0',
                'Net Weight 80x120 (Kg)': '0',
                '100x120': '0',
                'Net Weight 100x120 (Kg)': '0',
                Image: amelaImage,
            },
        ],
    };
};

export default AmelaDataPackaging;
