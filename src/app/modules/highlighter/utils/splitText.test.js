import {splitText} from './'

describe('SplitText function Test', ()=> {

    it('Should be return a array of words from text params', ()=>{

        let paramsData = "const casa";
        let responseData = ["const"," ", "data"];
        expect(splitText(paramsData)).toEqual(responseData);

        paramsData = `const   casa = "Casita";`;
        responseData = ["const", "   ", "casa", " ", "=", "\"", "Casita","\"", ";"];
        
        expect(splitText(paramsData)).toEqual(responseData);
    })
})