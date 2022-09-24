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

console.log(reverseString("reverse"));
