/**
 * * 2. Nhóm các phương thức thay đổi mảng:
 * * - push: thêm vào cuối mảng và trả về độ dài mới của mảng.
 * * - pop: bỏ 1 phần tử ở cuối mảng và trả về chính phần tử đó.
 * * - shift: bớt ở đầu mảng,
 * * - unshift: Thêm ở đầu mảng,
 * * - slice: copy 1 phần của mảng ban đầu, có thể sử dụng chỉ số âm.
 * * - splice: có thể loại bỏ, chèn, thay thế phần tử ở bất cứ vị trí nào của mảng.
 * * - sort: sắp xếp, (muốn sắp xếp mà không thay đổi mảng gốc thì dùng toSorted)
 * * - flat: làm phẳng và loại bỏ phần tử rỗng.
 */

const number = [1, 2, 3];
// console.log(number.push(100, 1000));
// console.log(number);
// console.log(number.pop());

console.log(number.slice(1, 3));
console.log(number.slice(3, 1));
console.log(number.slice(-2, -1));
console.log(number.slice(1));
// console.log(number);

const products = ["may tinh bang", "lo hoa", "1 can thit"];

console.log(products.splice(1, 1, "may choi game", "iphone 17"));
console.log(products);

const newList = [
  { id: 1, name: "may tinh bang", price: 2000 },
  { id: 2, name: "macbook", price: 3000 },
  { id: 2, name: "apple airpod", price: 400 },
  { id: 3, name: "tai nghe", price: 200 },
  { id: 4, name: "son duong moi", price: 3 },
];

// * ASCII
console.log(newList.sort((a, b) => a.price - b.price)); // ascending = "asc"

console.log(newList.sort((a, b) => b.price - a.price)); // descending = "desc"

console.log(
  newList.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  })
);

const matrix = [[1, 2], [3, 4], 5, , , , [6, [7, , , , 8]]];
console.log(matrix.flat(Infinity));
