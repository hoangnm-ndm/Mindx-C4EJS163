const listCharacter = ["a", "b", "a", "c", "b", "a"];

const countCharacter = listCharacter.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});

console.log(countCharacter);
