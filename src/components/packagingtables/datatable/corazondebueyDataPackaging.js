import amelaImage from '../../../assets/tomatedulce/amela/amela1.jpg';

const CorazondebueyDataPackaging = (isSpanish) => {
    return {
        Packaging: [
            {
                Packaging: isSpanish ? 'GRANEL' : 'LOOSE',
                Presentation: '1',
                'Presentation Weight (g)': '6500',
                'Net Weight (kg)': '6.5',
                'Box size': '60X40X9.7',
                '80x120': '92',
                'Net Weight 80x120 (Kg)': '598',
                '100x120': '115',
                'Net Weight 100x120 (Kg)': '747.5',
                Image: amelaImage,
              },            
        
        ],
    };
};

export default CorazondebueyDataPackaging;
