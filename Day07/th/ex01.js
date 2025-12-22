/**
 * * Bước 1: khai báo 1 biến tích luỹ sum = 0
 * * Bước 2: Tạo vòng lặp for chạy từ 1 đến 100, i++
 * * Bước 3: sum += i
 * * Bước 4: Đi ra ngoài vòng lặp in ra sum.
 */

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum);

/**
 * * Câu 4: Dùng 2 for loop lồng nhau.
 */

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.products);
    console.log("alo");
  });
