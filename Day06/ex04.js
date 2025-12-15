/**
 * * null: là kiểu dữ liệu có duy  nhất 1 giá trị là null - đại diện cho không có gì.
 * * - Thường do dev chủ động gán cho biến khi chưa có giá trị thật.
 *
 * * undefined: là kiểu dữ liệu có duy nhất 1 giá trị là undefined - đại diện cho không xác định, không có gì/
 * * - Thường xuất hiện khi truy cập 1 biến chưa gán trị.
 */

let a = 10;

let myName = "Hoang";
let isMarried = true;
let isNull = null;
let isUndefined = undefined;

console.log(typeof myName);
console.log(typeof a);
console.log(typeof isMarried);
console.log(typeof isNull); // object: đây là 1 lỗi kỹ thuật trong quá trình viết của tác giả.
console.log(typeof isUndefined);

console.log(+"hoang");
console.log(typeof +"hoang");
console.log("MindX" * 10); // NaN = Not a Number (là một giá trị đặc biệt của Number)
