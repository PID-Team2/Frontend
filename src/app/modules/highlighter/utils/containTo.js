/**
 * @description Permite saber si dentro de un arreglo de strings
 * se encuentra un string en especifico
 * 
 * @param {} arr 
 * @param {} word 
 * @example 
 * let res = containTo(["casa", "dog"], "dog");
 * console.log(res) // true
 * 
 * res = containTo(["casa", "dog"], "cat");
 * console.loglog(res) // false
 */
export const containTo = (arr = [''], word = '' ) => {
    
    for(let i =0; i < arr.length; i++)
        if(word === arr[i])
            return true;

    return false;
}   