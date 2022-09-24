import { sum } from "./sum";
import { capitalize } from "./sum";
import { reverseString } from "./sum";
import { Calculator } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("amoRdeMinhaVIDa to return R", () => {
  expect(capitalize("amoRdeMinhaVIDa")).toMatch(/R/);
});

test("reverse to return esrever", () => {
  expect(reverseString("reverse")).toMatch(/esrever/);
});

test("add 1 + 2 to return 3", () => {
  let calculator = new Calculator();
  expect(calculator.add(2, 4)).toBe((calculator.result = 6));
});
