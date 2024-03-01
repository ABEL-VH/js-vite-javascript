import _ from "underscore";

/**
 * 
 * @param {Array<String>} tiposDeCarta Ejm: ['C','D','H','S'];
 * @param {Array<String} tiposEspeciales 
 * @returns {Array<String} retorna un nuevo deck de cartas
 */

// Esta función crea un nuevo deck
 export const crearDeck = (tiposDeCarta,tiposEspeciales) => {


    if (!tiposDeCarta)throw new Error('TiposdeCarta es Obligatorio');
    if (tiposDeCarta.length===0)throw new Error('TiposdeCarta es 0');


    let deck=[];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}