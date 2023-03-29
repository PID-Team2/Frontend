import { clasifications } from './clasifications';

describe('clasifications', () => {
  it('should expose a function', () => {
		expect(clasifications).toBeDefined();
	});
  
  it('clasifications should return expected output', () => {

    expect(clasifications()).toStrictEqual({
      declarations : ["const", "let", "var"],
      statements : ["if", "for", "while", "return"],
      chars: [";", "=", ":", ],
      strings : ["\"", "'"]
  });
  });
});