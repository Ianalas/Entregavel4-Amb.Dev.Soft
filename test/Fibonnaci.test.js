import { fibo } from "../src/Fibonnaci";

test('add 5 to equals [0,1,1,2,3]', ()=>{
    expect(fibo(5)).toEqual([0,1,1,2,3]);
})

test('add 8 to equals [0,1,1,2,3,5,8,13]', ()=>{
    expect(fibo(8)).toEqual([0,1,1,2,3,5,8,13]);
})