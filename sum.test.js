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

test("add 1, 2 to return 3", () => {
  let calculator = new Calculator();
  expect(calculator.add(2, 4)).toBe((calculator.result = 6));
});

test("sub 3, 4 to return -1", () => {
  let calculator = new Calculator();
  expect(calculator.sub(3, 4)).toBe((calculator.result = -1));
});
test("divide 12, 4 to result 3", () => {
  let calculator = new Calculator();
  expect(calculator.divide(12, 4)).toBe((calculator.result = 3));
});
test("mult 12, 10 to return 120", () => {
  let calculator = new Calculator();
  expect(calculator.mult(12, 10)).toBe((calculator.result = 120));
});
