import { quickSort } from "../src/QuickSort";

test('add 3,1,2 to equals 1,2,3', ()=>{
    expect(quickSort([3,1,2])).toEqual([1,2,3]);
})

test('add 7,9,8,11 to equals 7,8,9,11', ()=>{
    expect(quickSort([7,9,8,11])).toEqual([7,8,9,11]);
})