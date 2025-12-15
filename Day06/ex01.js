// console.log("Xin chao ca lop 163!");

// ctrl + /

// ! day la comment 1 dong
/**
 * Day la comment nhieu dong!
 *
 * ! var: variant
 * ! - có phạm vi sử dụng là global.
 * ! - có thể khai báo lại.
 * ! - có thể gán lại.
 * ! - có thể truy cập trước khi khai báo (hoisting) - undefined.
 *
 * ? let:
 * * - có phạm vi sử dụng là block scope.
 * * - không thể khai báo lại.
 * * - có thể gán lại.
 * * - không thể truy cập trước khi khai báo.
 * * - Khi không gán giá trị, giá trị là `undefined`
 *
 *
 * * const:
 * * - có phạm vi sử dụng là block scope.
 * * - không thể khai báo lại.
 * * - không thể gán lại.
 * * - không thể truy cập trước khi khai báo.
 * * - khi khai báo với const cần gán ngay giá trị.
 *
 */

console.log(a);

var a = 10;
console.log(a);

{
  var a = 20;
}
console.log(a);

a = 100;

console.log(100);

{
  // console.log(age);
  let age = 20;
  // let age = 100
  age = 21;
  let myID = 1234767365;
  console.log(myID);
}

// console.log(myID);

// console.log("Tuoi cua toi la " + age);

let myName;

console.log(myName);
myName = "Hoang";
console.log(myName);

const myName2 = "Hoang Minh";
console.log(myName2);
