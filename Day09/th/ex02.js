const students = [
  { id: 1, name: "Alice", age: 20, grade: "A", address: "Hanoi" },
  { id: 2, name: "Bob", age: 22, grade: "B", address: "Hochiminh" },
  { id: 3, name: "Charlie", age: 21, grade: "A", address: "Danang" },
  { id: 4, name: "David", age: 23, grade: "C", address: "Hanoi" },
  { id: 5, name: "Eve", age: 20, grade: "B", address: "Hochiminh" },
];

/**
 * * Hãy viết 1 function nhóm students theo key truyền vào
 */

function groupByKey(arr, key) {
  const group = {};
  for (let i = 0; i < arr.length; i++) {
    //* Kiểm tra xem object gốc có tồn tại key đang duyệt hay chưa?
    if (group[arr[i][key]]) {
      //* Nếu đã tồn tại, thêm chính phần tử đang duyệt vào nhóm nó thuộc về.
      group[arr[i][key]].push(arr[i]);
    } else {
      //* Nếu chưa tồn tại, tạo ra cặp key: value cho object "group" với value là một mảng mới có phần tử arr[i]
      group[arr[i][key]] = [arr[i]];
    }
  }

  return group;
}

console.log(groupByKey(students, "address"));
console.log(groupByKey(students, "age"));
console.log(groupByKey(students, "grade"));
