import amelaImage from '../../../assets/tomatedulce/amela/amela1.jpg';

const PrimoraDataPackaging = (isSpanish) => {
    return {
        Packaging: [
            {
                Packaging: isSpanish ? 'TARRINA DE CARTÓN' : 'CARDBOARD',
                Presentation: '8',
                'Presentation Weight (g)': '300',
                'Net Weight (kg)': '2.4',
                'Box size': '40*30*7',
                '80x120': '248',
                'Net Weight 80x120 (Kg)': '595',
                '100x120': '310',
                'Net Weight 100x120 (Kg)': '744',
                Image: amelaImage,
              },
              {
                Packaging: isSpanish ? 'TARRINA DE CARTÓN CON FLOWPACK' : 'CARDBOARD WITH FLOWPACK',
                Presentation: '8',
                'Presentation Weight (g)': '300',
                'Net Weight (kg)': '2.4',
                'Box size': '40*30*7',
                '80x120': '248',
                'Net Weight 80x120 (Kg)': '595',
                '100x120': '310',
                'Net Weight 100x120 (Kg)': '744',
                Image: amelaImage,
              },
              {
                Packaging: isSpanish ? 'GRANEL' : 'LOOSE',
                Presentation: '1',
                'Presentation Weight (g)': '3000',
                'Net Weight (kg)': '3',
                'Box size': '40X30X7',
                '80x120': '248',
                'Net Weight 80x120 (Kg)': '744',
                '100x120': '310',
                'Net Weight 100x120 (Kg)': '930',
                Image: amelaImage,
              },
                    ],
    };
};

export default PrimoraDataPackaging;
