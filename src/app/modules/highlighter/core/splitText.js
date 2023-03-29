import { completeWord } from './completeWord'

/**
 * Esta funcion recibe un { string } y devuelve un arreglo basado
 * en cortar el string en palabras, conjuntos de espacios con fines de linea y 
 * otros caracteres independientes
 * 
 * @param { String } text
 *  
 * @example
 * const res = splitText("const  casa = 'asa';");
 * console.log(res) // ["const","  ", "casa"," ","="," ","'","asa","'", ";"]
 * 
 * @returns {String []} responseData 
 */
 export const splitText = (text) => { 

    if(!text || typeof text !== "string")
        return [];

    let  responseData=[];
    let  regexLetters = /[a-zA-Z]/g; 
    let  regexSpacesAndEndLines = /\s|\n/g;

    for(let i=0 ; i < text.length; i++){
      let response;

      if(text[i].match(regexLetters)){
  
        response = completeWord(text, i, regexLetters);
        responseData = [ ...responseData, response.word];
        i = response.index;
        continue;
      }

      if(text[i].match(regexSpacesAndEndLines)){
        response = completeWord(text, i,  regexSpacesAndEndLines);
        responseData = [ ...responseData, response.word];
        i = response.index;
        continue;
      }

      responseData = [...responseData, text[i]];
    }

    return responseData;
}
