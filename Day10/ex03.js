function print(a, b, ...rest) {
  console.log(`gia tri cua a: `, a);
  console.log(`gia tri cua b: `, b);
  console.log(`gia tri cua rest: `, rest);
}

print(10, 100, 1, 2, 3);

/**
 * * rest operator - Gom tất cả các phần tử còn lại thành mảng khi truyền tham số cho function.
 * * rest chỉ xuất hiện ở đoạn cuối khai báo, đại diện cho phần còn lại của khai báo.
 */

function print2() {
  console.log(arguments);
  console.log(typeof arguments);
  console.log(Array.isArray(arguments));
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

print2(1, 2, 3, "MindX", 5, 6);

console.log(1, 2, 3, 4, 5, "MindX");

/**
 * ? Hãy viết hàm `sum` tính tổng tất cả các số truyền vào, nhưng không biết trước số lượng.
 */

function sum4() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sum4(1, 2, 3, 4, 5, 6));
