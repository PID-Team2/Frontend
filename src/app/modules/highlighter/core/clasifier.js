import { clasifications } from "../models/clasifications";

export const clasifier = (word) => {

    const clasificationsTypes = clasifications();
    
    let result  = {
        word : '',
        clasification : '',
        error : true
    }

    if( typeof word !== "string")
        return result;

    

    
    return result;
}