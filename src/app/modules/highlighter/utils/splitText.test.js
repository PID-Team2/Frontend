import {splitText} from './splitText'

describe('SplitText function', ()=> {

    it('should expose a function', () => {
		expect(splitText).toBeDefined();
	});

    it('Should be return a array of words from text params', ()=>{

        let paramsData = "const casa";
        let responseData = ["const"," ", "data"];
        expect(splitText(paramsData)).toEqual(responseData);

        paramsData = `const   casa = "Casita";`;
        responseData = ["const", "   ", "casa", " ", "=", "\"", "Casita","\"", ";"];
        
        expect(splitText(paramsData)).toEqual(responseData);
    })

    it('Should be return a empty array for a wrong input', ()=> {
        expect(splitText(4)).toEqual([])
        expect(splitText(45.1)).toEqual([])
        expect(splitText(null)).toEqual([])
        expect(splitText(undefined)).toEqual([])
        expect(splitText({person: "casa"})).toEqual([])
    })
})