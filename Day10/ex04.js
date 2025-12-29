const students = ["Hoang", "Hue", "ThaO", "Trump"];

const [first, second, ...rest] = students;
// ! destructuring là cách khai báo nhiều biến trên 1 dòng, tách ra từ các giá trị trong object, array

console.log(first);
console.log(second);
console.log(rest);

const myInfor = {
  fullname: "Hoang Nguyen",
  age: 18,
  address: "HN",
  password: "123",
  email: "hoang@gmail.com",
};

const { email, password, ...otherInfor } = myInfor;
console.log(email);
console.log(password);
console.log(otherInfor);

/**
 * ? Spread: Trải các phần tử, thuộc tính của array, object vào một array, object mới.
 */

const students2 = ["Ly Tieu Long", "Chau Tinh Tri"];

const students3 = [...students, ...students2];

console.log(students3);

const copystudents = [...students3];
console.log(copystudents);
