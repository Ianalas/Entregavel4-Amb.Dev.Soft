import { somaConj } from "../src/SomaConj";

test('add 3,7,10 to equal 20', ()=>{
    expect(somaConj([3,7,10])).toBe(20)
})

test('add 5,5,5 to equal 15', ()=>{
    expect(somaConj([5,5,5])).toBe(15)
})