/**
 * * 1. Declaration function: Hàm khai báo
 * * 2. Expression function: Hàm biểu thức
 * * 3. Arrow function: Hàm mũi tên
 * * 4. Anonymous function: Hàm không có tên
 * * 5. Khác: IIFE, Generate function, Async function, Constructor function, Callback function.
 */

console.log(sum(2, 3));

function sum(a, b) {
  return a + b;
}

const sum2 = function (a, b) {
  return a + b;
};

// * Tempo dead zone

console.log(sum2(100, 1000));

const myDog = {
  name: "Mix",
  speak: function () {
    console.log(`${this.name} sua Gau gau`);
  },
};

myDog.speak();

const sum3 = (a, b) => a + b;
console.log(sum3(-1, -2));

const showObj = () => ({
  name: "hoang",
  age: 33,
});

const myDog2 = {
  name: "Mix",
  speak: () => {
    console.log(this);
    console.log(`${this.name} sua Gau gau`);
  },
};

myDog2.speak();

setTimeout(() => {
  console.log("Cong viec A");
}, 2000);
