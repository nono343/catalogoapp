import mycubies from '../../assets/minivegetales/mycubies/mycubies.jpg'; 
import tribelli from '../../assets/minivegetales/tribelli/tribelli.jpg'; 

export const dataMinivegetalesDetalle = {
    pepino_cocktail_mycubies: {
        name: {
            es: 'Pepino Cocktail Mycubies',
            en: 'Cucumber Snack Mycubies',
              },
              description: {
                es: `
                <strong>Pequeño pero versátil</strong>
                <p>Este pequeño hará las delicias de cualquier profesional o aficionado a la cocina. Jugoso, dulce y ligeramente ácido. Es un experto en contrastes y un todo terreno en nuestra mesa: ensaladas frescas, conservas, bebidas y decoración de platos...</p>
                `,
                en: `
                <strong>Small but versatile</strong>
                <p>This little one will delight any professional or amateur chef. Juicy, sweet, and slightly acidic. It's an expert in contrasts and a versatile addition to our table: fresh salads, preserves, drinks, and plate decoration...</p>
                `,
            
        },
        image: mycubies,
        productionSchedule: [
            { isRed: true },  //enero
            { isRed: true },  //febrero
            { isRed: true },  //marzo
            { isRed: true },  //abril
            { isRed: true },  //mayo
            { isRed: true },  //junio
            { isRed: true },  //julio
            { isRed: true },  //agosto
            { isRed: true },  //septiembre
            { isRed: true },  //octubre
            { isRed: true },  //noviembre
            { isRed: true },  //diciembre
        ],
    },
    minipimientos_tribelli: {
        name: {
            es: 'Minipimientos Tribelli',
            en: 'Sweet Baby Peppers Tribelli',
        },
        description: {
            es: `
            <strong>Triple dulzor</strong>
            <p>Tribelli® es mucho más que un pimiento, es la concentración del placer intenso. El resultado de un intenso proceso de mejora donde el sabor y el dulzor son la prioridad.</p>
            <p>Nuestros triminipimientos son el snack más divertido, delicioso además de saludable. Perfecto para dar un toque diferente a tus creaciones.</p>
            <p>Se pueden servir en crudo, salteados, cocidos, a la parrilla o al horno.</p>
            `,
            en: `
            <strong>Triple Sweetness</strong>
            <p>Tribelli® is much more than a pepper; it's the concentration of intense pleasure. The result of an intense improvement process where flavor and sweetness are the priority.</p>
            <p>Our mini peppers are the most fun, delicious, and healthy snack. Perfect for adding a different touch to your creations.</p>
            <p>They can be served raw, sautéed, cooked, grilled, or roasted.</p>
            `,        
        },
        image: tribelli,
        
        image1: mycubies,

        productionSchedule: [
            { isRed: true },  //enero
            { isRed: true },  //febrero
            { isRed: true },  //marzo
            { isRed: true },  //abril
            { isRed: true },  //mayo
            { isRed: true },  //junio
            { isRed: true },  //julio
            { isRed: true },  //agosto
            { isRed: true },  //septiembre
            { isRed: true },  //octubre
            { isRed: true },  //noviembre
            { isRed: true },  //diciembre
        ],

    },

};
