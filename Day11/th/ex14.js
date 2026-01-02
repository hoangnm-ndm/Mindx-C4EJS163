const newNumbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = newNumbers.reduce((acc, cur) => {
  console.log(acc);
  if (!acc.includes(cur)) {
    acc.push(cur);
  }
  return acc;
}, []);

console.log(uniqueNumbers);
