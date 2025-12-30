/**
 * * Tái sử dụng được logic
 * * Giữ được tính bao đóng
 *
 */

/**
 * * Xây dựng hàm kiểm tra `soChan`
 */

// function checkEven(number) {
//   if (number % 2 === 0) console.log("Day la so chan");
// }

// const result = checkEven(10);
// console.log(result);

let i = 100;
function checkEven(number) {
  let i = 10;
  console.log(`gia tri cua i la ${i}`);

  if (number % 2 === 0) {
    return true;
    // code o day co chay khong?
    console.log("Alo");
  }
  return false;
}

console.log(`gia tri cua i la ${i}`);

console.log(checkEven("Hoang"));
console.log(checkEven(19));
console.log(checkEven(10));
console.log(checkEven(10000));
