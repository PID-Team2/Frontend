/**
 * Comienza a iterar el texto a partir del index y combina todos los caracteres 
 * en un string hasta  que el caracter actual no haga match con la expresion 
 * regular y entonces devuelve la combinacion de caracteres y el indice del ultimo 
 * caracter de la combinacion
 * 
 * @param {String} text 
 * @param {Number} index 
 * @param {RegExp} pattern 
 * 
 * @example
 * const res = completeWord(" asd ds", 1, /[a-zA-Z]/g);
 * console.log(res) // { word : "asd", index: 3} 
 */
export const completeWord = (text , index, pattern) => {
    let word = '';
    let matcherCharacters = [];

    if(!text || !index || !pattern)
        return null;
    
    if(typeof text !== "string" || typeof index !== "number" || !(pattern instanceof RegExp))
        return null;

    for( ; index < text.length; index++){
    
        //Si hace match la posicion actual
        if(text[index].match(pattern)){

            //Añade al arreglo el caracter
            matcherCharacters = [...matcherCharacters, text[index].match(pattern)[0]];
        }
        else break;
    }

    word = matcherCharacters.join("");

    index--;
    return {word , index}
}

// console.log(completeWord(" asd ds", 1, /[a-zA-Z]/g));