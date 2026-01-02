/**
 * * map: ánh xạ mảng ban đầu ra thành 1 mảng mới.
 * * foreach: duyệt mảng, không trả về mảng mới.
 * * reduce:
 */

const number = [1, 2, 3, 4];
console.log(number.map((item) => item * 2));

const students = [
  { id: 1, name: "Hoang", math: 10, literature: 8, english: 9 },
  { id: 2, name: "Hieu", math: 7, literature: 6, english: 5 },
  { id: 3, name: "Hung", math: 8, literature: 9, english: 10 },
];

const studentsWithAvg = students.map((student) => {
  return {
    ...student,
    avg: (student.math + student.literature + student.english) / 3,
  };
});

console.log(studentsWithAvg);

let content = /*html */ `<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>AVG</th>
    </tr>
  </thead>
<tbody>`;
studentsWithAvg.forEach((item) => {
  let itemContent = /*html*/ `<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.avg}</td>
  </tr>`;
  content += itemContent;
});

content += `</tbody></table>`;

console.log(content);

document.write(content);
