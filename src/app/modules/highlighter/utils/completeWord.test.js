import { completeWord } from './completeWord';

describe('completeWords function', () => {
  it('should expose a function', () => {
		expect(completeWord).toBeDefined();
	});
  
  it('completeWords should return expected output', () => {

    const retValue = completeWord(" asd ds", 1, /[a-zA-Z]/g);
    expect(retValue).toStrictEqual({word : "asd", index: 3});
  });

  it('completeWords should return null by incomplete params', ()=> {

    expect(completeWord()).toBe(null);
    expect(completeWord(" asd")).toBe(null);
    expect(completeWord(" asda as", 2)).toBe(null);
  })

  it('completeWords should return null by wrong params', ()=> {

    expect(completeWord()).toBe(null);
    expect(completeWord(1, 1, /[a-zA-Z]/g)).toBe(null);
    expect(completeWord(" asda as", "cas", /[a-zA-Z]/g)).toBe(null);
    expect(completeWord( /[a-zA-Z]/g, " asda as", "cas")).toBe(null);
    expect(completeWord(" asda as", "cas",1 )).toBe(null);
  })
});