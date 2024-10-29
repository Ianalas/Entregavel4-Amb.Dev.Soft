import { contagem } from "../src/Contagem";

test('adds 20 e 53 to equal 1 passed', ()=>{
    expect(contagem([20,53])).toBe(1);
})

test('adds 15, 99, 84 e 33 to equal 2 passed', ()=>{
    expect(contagem([15, 99, 84, 33])).toBe(2);
})