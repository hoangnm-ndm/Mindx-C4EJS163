/**
 * * Primitive type (kiểu dữ liệu nguyên thuỷ)
 * * 1. String
 * * 2. Number (không phân tách ra thành nhiều kiểu dữ liệu số)
 * * 3. Boolean
 * * 4. Null
 * * 5. Undefined
 * * 6. Symbol
 *
 *
 * * Object, array, function, date, ...
 */

let firstName = "Hoang";

console.log(firstName[4]);
console.log(firstName.length);

let lastName = "Nguyen Minh";

console.log(firstName + " " + lastName);

let a = 10;
let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(10 % 3); // ????????

a += 10;

// *=, -=, %=...

console.log(a); // ??

a++;
a--;
++a;
--a;
/**
 * * Tiền tố:
 * * Tại thời điểm thực hiện lệnh thì thay đổi giá trị của biến trước, sau đó sử dụng giá trị mới.
 *
 * * Hậu tố:
 * * Tại thời điểm thực hiện lệnh thì dùng giá trị hiện tại của biến, sau đó mới áp dụng thay đổi.
 */

let x = 1;
console.log(++x);

let y = 1;
console.log(y++);
console.log(y);

let myName = "Nguyen Hoang";
let major = "IT";

// template string trong JS.
let content = `
Xin chao!

Minh la ${myName}, Minh co chuyen nganh ${major}
`;

console.log(content);

console.log(10 > 3);

if (10 % 2 === 0) {
  console.log(`10 la so chan!`);
}

console.log(true && true && true); // AND
console.log(true && false);

console.log(true || false); // OR

console.log(!true);
console.log(!false);
