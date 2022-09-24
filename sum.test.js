import { sum } from "./sum";
import { capitalize } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("amoRdeMinhaVIDa to return R", () => {
  expect(capitalize("amoRdeMinhaVIDa")).toMatch(/R/);
});
