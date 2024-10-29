import { MDC } from "../src/MaxComDiv";

test('add 3 e 9 to equals 3', ()=>{
    expect(MDC(3,9)).toBe(3)
})

test('add 7 e 13 to equals 1', ()=>{
    expect(MDC(7,13)).toBe(1)
})