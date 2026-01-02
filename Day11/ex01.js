/**
 *
 */

let string = "abc";

let myString = new String("xyz");

console.log(myString);
// * AUTO WRAP

console.log(String.prototype);
console.log(Number.prototype);
console.log(Array.prototype);

/**
 * Array
 * * 1. Nhóm các phương thức tìm kiếm: (không thay đổi mảng ban đầu)
 * * find: trả về phần tử đầu tiên thoả mãn điều kiện.
 * * findIndex: trả về index phần tử đầu tiên thoả mãn điều kiện.,
 * * findLast, findLastIndex: ,
 * * filter: Lọc các phần tử thoả mãn điều kiện và trả về mảng mới,
 * * includes: tìm phần tử trong mảng, trả về boolean.
 * * some: Chỉ cần 1 phần tử thoả mãn điều kiện,
 * * every: Mọi phần tử đều phải thoả mãn điều kiện.
 *
 * * 2. Nhóm các phương thức thay đổi mảng:
 *  *  - push, pop, shift, unshift, slice, splice, sort, flat
 * * 3. Nhóm các phương thức duyệt mảng
 *  * - map, foreach, reduce, ...
 * * 4. Nhóm các phương thức khác
 */

const students = [
  { id: 1, name: "Phuong", gender: "male", age: 18 },
  { id: 2, name: "Duy", gender: "male", age: 18 },
  { id: 3, name: "Hoa", gender: "female", age: 20 },
  { id: 4, name: "Duy", gender: "male", age: 80 },
];

const findResult = students.find((value, index) => value.name === "Duy");
const findIndexResult = students.findIndex(
  (value, index) => value.name === "Duy"
);

const findLastResult = students.findLast(
  (value, index) => value.name === "Duy"
);

const findLastIndexResult = students.findLastIndex(
  (value, index) => value.name === "Duy"
);

console.log(findResult);
console.log(findIndexResult);

const filterResult = students.filter((item) => item.age > 100);
console.log(filterResult);

const myTeam = ["Bat Gioi", "Ngo Khong", "Su Phu"];

console.log(myTeam.includes("Ngo Khong", 2)); // boolean

console.log(students.some((item) => item.gender === "female"));
console.log(students.every((item) => item.gender === "female"));
