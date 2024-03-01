

/**
 * 
 * @param {Array<String>} deck  Ejem:['8S','9S','4D]
 * @returns {<String>} Ejm:['8S]
 */



// Esta función me permite tomar una carta
 export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}