import { clasifier } from "./clasifier";

describe('clasifier', () => {
  it('should expose a function', () => {
		expect(clasifier).toBeDefined();
	});
  
  it('clasifier should return expected output', () => {
    
      expect(clasifier("const")).toStrictEqual({
        word : "const",
        clasification : 'declaration',
        error : false
    });
      expect(clasifier("let")).toStrictEqual({
        word : "let",
        clasification : 'declaration',
        error : false
    });
      expect(clasifier("var")).toStrictEqual({
        word : "var",
        clasification : 'declaration',
        error : false
    });
      expect(clasifier("if")).toStrictEqual({
        word : "if",
        clasification : 'statement',
        error : false
    });
      expect(clasifier("for")).toStrictEqual({
        word : "for",
        clasification : 'statement',
        error : false
    });
      expect(clasifier("while")).toStrictEqual({
        word : "while",
        clasification : 'statement',
        error : false
    });
      expect(clasifier("return")).toStrictEqual({
        word : "return",
        clasification : 'statement',
        error : false
    });
      expect(clasifier("=")).toStrictEqual({
        word : "=",
        clasification : 'char',
        error : false
    });
      expect(clasifier(";")).toStrictEqual({
        word : ";",
        clasification : 'char',
        error : false
    });
      expect(clasifier(":")).toStrictEqual({
        word : ":",
        clasification : 'char',
        error : false
    });
      expect(clasifier("\"")).toStrictEqual({
        word : "\"",
        clasification : 'string',
        error : false
    });
      expect(clasifier("'")).toStrictEqual({
        word : "'",
        clasification : 'string',
        error : false
    });
    
  });

  it('clasifier should return property error true', () => {
   
      expect(clasifier(1)).toStrictEqual({
        word : '',
        clasification : '',
        error : true
    });
      expect(clasifier(null)).toStrictEqual({
        word : '',
        clasification : '',
        error : true
    });
      expect(clasifier(3.4)).toStrictEqual({
        word : '',
        clasification : '',
        error : true
    });
      expect(clasifier(undefined)).toStrictEqual({
        word : '',
        clasification : '',
        error : true
    });
      expect(clasifier(true)).toStrictEqual({
        word : '',
        clasification : '',
        error : true
    });
  });
});