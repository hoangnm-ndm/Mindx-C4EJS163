// * Array
/**
 * * Array là 1 dạng của reference type
 * * Vì là referece type nên khi khai báo với `const` vẫn thay đổi được nội dung bên trong.
 * * Thường dùng danh từ số nhiều để khai báo biến array
 * * length của array = index của phần tử cuối + 1.
 */

const students = ["Nam", "Tien", "Huy"];

console.log((students[0] = "Dung"));
console.log(students);
students[3] = "Hoang";
console.log(students.length);

console.log(students);
students[50] = "MindX";

console.log(students);
// console.log(students[27]);

// console.log([1, 2, 3, , , , , , 4]); // * Mảng thưa.

students.length = 10;

console.log(students);
