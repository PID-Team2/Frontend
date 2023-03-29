import { containTo } from './containTo';

describe('containTo', () => {
  it('should expose a function', () => {
		expect(containTo).toBeDefined();
	});
  
  it('containTo should return true', () => {
   expect(containTo(["casa", "let", "const", "ay"], "casa")).toBeTruthy()
   expect(containTo(["casa", "let", "const", "ay"], "let")).toBeTruthy()
   expect(containTo(["casa", "let", "const", "ay"], "const")).toBeTruthy()
   expect(containTo(["casa", "let", "const", "ay"], "ay")).toBeTruthy()
  });

  it('containTo should return false', () => {
    expect(containTo(["casa", "let", "const", "ay"], "asd")).toBeFalsy()
    expect(containTo(["casa", "let", "const", "ay"], "fds")).toBeFalsy()
    expect(containTo(["casa", "let", "const", "ay"], "consta")).toBeFalsy()
    expect(containTo(["casa", "let", "const", "ay"], "haya")).toBeFalsy()
   });
});