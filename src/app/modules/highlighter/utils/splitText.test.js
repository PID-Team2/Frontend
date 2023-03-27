import {splitText} from './'

describe('SplitText function Test', ()=> {

    it('Should be return a array of words from text params', ()=>{

        let paramsData = "const casa";
        let resPoneData = ["const"," ", "data"];
        expect(splitText(paramsData)).toEqual(resPoneData);

        paramsData = `const   casa = "Casita";`;
        resPoneData = ["const", "   ", "casa", " ", "=", "\"", "Casita","\"", ";"];
        
        expect(splitText(paramsData)).toEqual(resPoneData);
    })
})