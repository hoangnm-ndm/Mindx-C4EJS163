let a = 3;
let b = a;
console.log(b);
b = 10;
console.log(b);
console.log(a);

const arr1 = [1, 2, 3];
const arr2 = arr1;
console.log(arr2 === arr1);
// * Đây là cách copy sai.
arr2[3] = "Hoang";

console.log({ arr1 });
console.log({ arr2 });

// * Shallow Copy >< Deep Copy

const arr3 = [1, 2, 3];
const arr4 = [1, 2, 3];
arr4[3] = "MindX";

console.log(arr3 === arr4);
console.log(arr3);
console.log(arr4);
