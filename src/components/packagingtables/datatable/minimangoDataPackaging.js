import amelaImage from '../../../assets/tomatedulce/amela/amela1.jpg';

const MinimangoDataPackaging = (isSpanish) => {
    return {
        Packaging: [
            {
                Packaging: isSpanish ? 'GRANEL' : 'LOOSE',
                Presentation: '1',
                'Presentation Weight (g)': '6000',
                'Net Weight (kg)': '6',
                'Box size': '40X30X9.7',
                '80x120': '88',
                'Net Weight 80x120 (Kg)': '528',
                '100x120': '110',
                'Net Weight 100x120 (Kg)': '660',
                Image: amelaImage,
            },
        ],
    };
};

export default MinimangoDataPackaging;
