import amelaImage from '../../../assets/tomatedulce/amela/amela1.jpg';

const CalabacinalargadoDataPackaging = (isSpanish) => {
    return {
        Packaging: [
            {
                Packaging: isSpanish ? 'GRANEL' : 'LOOSE',
                Presentation: '1',
                'Presentation Weight (g)': '5000',
                'Net Weight (kg)': '5',
                'Box size': isSpanish ? '40X30X14' : '40x30x14',
                '80x120': '128',
                'Net Weight 80x120 (Kg)': '640',
                '100x120': '150',
                'Net Weight 100x120 (Kg)': '750',
                Image: amelaImage,
              },
        ],
    };
};

export default CalabacinalargadoDataPackaging;
