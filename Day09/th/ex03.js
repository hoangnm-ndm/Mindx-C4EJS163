const product = { name: "Laptop", price: 1000 };

console.log(Object.entries(product));

const arr = [1, 2, 4, 6, 73, 3, 6, 2, 23, 63, 31, 1];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      /**
       * * Lần lượt kiểm tra 2 phần tử liên tiếp,
       * * Nếu right >= left -> giữ nguyên
       * * Nếu right < left -> đổi chỗ.
       */
    }
  }
}

//* length * (length - 1)

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
Object.assign(obj1, obj2);

const car = { brand: "BMW", model: "X5" };
console.log(!!car.color);
console.log({ Object });
