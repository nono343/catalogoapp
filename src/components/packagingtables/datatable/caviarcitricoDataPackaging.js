import amelaImage from '../../../assets/tomatedulce/amela/amela1.jpg';

const CaviarcitricoDataPackaging = (isSpanish) => {
    return {
        Packaging: [

            {
                Packaging: isSpanish ? 'TARRINA CON TAPA' : 'PUNNET WITH LID',
                Presentation: '6',
                'Presentation Weight (g)': '200',
                'Net Weight (kg)': '1.2',
                'Box size': isSpanish ? '40X30X7' : '40x30x7',
                '80x120': '248',
                'Net Weight 80x120 (Kg)': '298',
                '100x120': '310',
                'Net Weight 100x120 (Kg)': '372',
                Image: amelaImage,
              },
              {
                Packaging: isSpanish ? 'VASO APILABLE CON BISAGRA' : 'STOCKABLE CLAMSHELL SHAKER',
                Presentation: '12',
                'Presentation Weight (g)': '100',
                'Net Weight (kg)': '1.2',
                'Box size': isSpanish ? '40X30X7' : '40x30x7',
                '80x120': '248',
                'Net Weight 80x120 (Kg)': '298',
                '100x120': '310',
                'Net Weight 100x120 (Kg)': '372',
                Image: amelaImage,
              },
              {
                Packaging: isSpanish ? 'TARRINA DE CARTÓN' : 'CARDBOARD PUNNET',
                Presentation: '6',
                'Presentation Weight (g)': '100',
                'Net Weight (kg)': '0.6',
                'Box size': isSpanish ? '40X30X7' : '40x30x7',
                '80x120': '248',
                'Net Weight 80x120 (Kg)': '149',
                '100x120': '310',
                'Net Weight 100x120 (Kg)': '186',
                Image: amelaImage,
              },
              {
                Packaging: isSpanish ? 'TARRINA DE CARTÓN' : 'CARDBOARD PUNNET',
                Presentation: '12',
                'Presentation Weight (g)': '350',
                'Net Weight (kg)': '4.2',
                'Box size': isSpanish ? '40X30X7' : '40x30x7',
                '80x120': '176',
                'Net Weight 80x120 (Kg)': '739',
                '100x120': '220',
                'Net Weight 100x120 (Kg)': '924',
                Image: amelaImage,
              },
                    ],
    };
};

export default CaviarcitricoDataPackaging;


