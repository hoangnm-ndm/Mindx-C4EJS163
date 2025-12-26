const students = ["Hoang", "Nam", "Huy", null, null, null, , "MindX"];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

students[students.length] = "Hoa Binh";
console.log(students);

/**
 * * Thêm hoặc bớt phần tử ở càng gần đầu mảng thì hiệu suất càng kém vì cần dịch chuyển vị trí của các phần tử phía sau.
 */

// ? Thêm bạn "Vân Anh" vào đầu mảng - manual

let studentCopy = [];
studentCopy[0] = "Van Anh";
for (let i = 0; i < students.length; i++) {
  studentCopy[i + 1] = students[i];
}

console.log(studentCopy);

const myTeam = ["Duong Tang", "Ngo Khong", "Bat Gioi"];

for (let value of myTeam) {
  console.log(value);
}

console.log(typeof myTeam);
// object

console.log(Array.isArray(myTeam));
// ! Cách kiểm tra đúng kiểu của 1 array
