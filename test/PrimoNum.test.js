import { primoNum } from "../src/PrimoNum";

test('add 7 to return true',()=>{
    expect(primoNum(7)).toBe(true);
})

test('add 4 to return true',()=>{
    expect(primoNum(4)).toBe(false);
})