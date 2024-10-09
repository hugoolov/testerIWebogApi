import {expect, test} from "vitest";

function isLeapYear(year, number){
    if(year % 100 == 0) return false;
    if(year % 400 == 0) return true;
    return year % 4 == 0;
}
test("check leapyear", () => {
    expect(isLeapYear(2024)).toBe(true);
})

test("most years divisible by 100 are mostly not leapyear", () =>{
    expect(isLeapYear(2100)).toBe(false);
})
test("years divisble by 400 is leapyear", () =>{
    expect(isLeapYear(2000)).toBe(false);
})