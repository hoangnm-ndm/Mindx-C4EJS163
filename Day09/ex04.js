let myString = "Hoang";
myString[0] = "K";

console.log(myString[0]);
console.log(myString);
myString = "";

// const obj1 = { x: 1 };

// console.log(obj1 === obj2);
const obj2 = { x: 1 };
const obj3 = obj2;

console.log(obj2);
console.log(obj3);
console.log(obj2 === obj3);

obj3.y = 10;
console.log(obj3);
console.log(obj2);

/**
 * Shallow copy:
 * - Chỉ copy lớp ngoài cùng của object, array.
 * - Chỉ phù hợp với object, array  đơn giản, không lồng nhau.
 * - Hầu hết các phương thức, operator đều là copy nông.
 *
 * Deep copy: structuredClone
 *
 */

const obj4 = { ...obj3 }; // * shallow copy

obj4.z = 100;

console.log(obj3);

const objX = {
  name: "Hoang",
  address: {
    1: "Bac Ninh",
    2: "Ha Noi",
  },
};
const objY = { ...objX };

objY.address["3"] = "Ca Mau";
console.log(objY);
console.log(objX);

const objZ = structuredClone(objX); //* Deep copy
