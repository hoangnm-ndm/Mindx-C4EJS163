/**
 *  * * 5. Khác: IIFE, Generate function, Async function, Constructor function, Callback function,
 */

// * IIFE: Immediately Invoked Function Expression

// (function (a, b) {
//   console.log(a + b);
// })(2, 3);

// function* idMaker() {
//   let index = 0;
//   while (true) {
//     yield index++;
//   }
// }

// const gen = idMaker();

// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3

// * Hàm Async
// async function callAPI() {
//   const response = await fetch("https://dummyjson.com/products");
//   const data = await response.json();
//   console.log(data);
// }

// callAPI();

//* Constructor function = Hàm khởi tạo.

function User(name, address, major, gender) {
  this.name = name;
  this.address = address;
  this.major = major;
  this.gender = gender;
}

const adam = new User("Adam", "Trai dat", "Phieu bat tu xu", "male"); // * instance

console.log(adam);

let string = new String(1);
let number = new Number(1);
let myBoolean = new Boolean(1);
let myArray = new Array([1, 2]);

/**
 *
 * * callback - là hàm được truyền vào hàm khác dưới dạng tham số.
 */
function kiemTien(callback) {
  setTimeout(() => {
    console.log("Cong viec A: Kiem tien");
    callback();
  }, 2000);
}

function muaXe() {
  setTimeout(() => {
    console.log("Cong viec B: mua Xe");
  }, 1);
}

// kiemTien(muaXe);
kiemTien(() => {
  console.log("an choi het tien");
});
