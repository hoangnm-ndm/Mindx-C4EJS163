// * Cach 1: Object literal
const obj1 = {
  fullname: "Nguyen Minh Hoang",
  age: 33,
};

const obj2 = {};

// * Cach 2: Sử dụng từ khoá "new"

const obj3 = new Object({ fullname: "MindX" });
const obj4 = new Object(null);

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);

const obj5 = { ".Quê quán": "Bắc Ninh", age: 33, email: "hoang@gmail.com" };
console.log(obj5);
