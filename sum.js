export function sum(a, b) {
  return a + b;
}

export const capitalize = (string) => {
  let strArray = string.split("");
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].toUpperCase() == strArray[i]) return strArray[i];
  }
};

export const reverseString = (string) => {
  return string.split("").reverse().join("");
};

export class Calculator {
  constructor(result) {
    this.result = result;
  }
  add(a, b) {
    return (this.result = a + b);
  }
  sub(a, b) {
    return (this.result = a - b);
  }
  mult(a, b) {
    return (this.result = a * b);
  }
  divide(a, b) {
    return (this.result = a / b);
  }
}
