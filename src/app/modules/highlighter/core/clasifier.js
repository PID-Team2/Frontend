import { clasifications } from "../models/clasifications";
import { containTo } from '../utils'

export const clasifier = (word) => {

    const clasificationsTypes = clasifications();
    
    let result  = {
        word : '',
        clasification : '',
        error : true
    }

    if( typeof word !== "string")
        return result;

        result.word = word
        result.error = false;

    if(containTo(clasificationsTypes.statements, word)){
        result.clasification = "statement";
        return result
    }
    if(containTo(clasificationsTypes.declarations, word)){
        result.clasification = "declaration";
        return result
    }
    if(containTo(clasificationsTypes.chars, word)){
        result.clasification = "char";
        return result
    }
    if(containTo(clasificationsTypes.strings, word)){
        result.clasification = "string";
        return result
    }
    
    result.clasification = "unknow";
    
    return result;
}