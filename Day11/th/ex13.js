const numbers = [100, 200, 300, 400];

const result = number.reduce((accumulator, currentValue, index, array) => {
  console.log(accumulator, currentValue, index, array);
  return (accumulator += currentValue);
}, 0);
console.log(result);

console.log(
  [1, 2, 3, 4, 5, 6, 100, 11, 9]
    .filter((item) => item % 2 === 0)
    .reduce((acc, cur) => (acc += cur))
);
