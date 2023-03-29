/**
 * @description Permite saber si dentro de un arreglo de strings
 * se encuentra un string en especifico
 * 
 * @param {[] String} arr 
 * @param {String} word 
 */
export const containTo = (arr = [''], word = '' ) => {
    
    for(let i =0; i < arr.length; i++)
        if(word === arr[i])
            return true;

    return false;
}   