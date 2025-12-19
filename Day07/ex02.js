let i = 0;
for (;;) {
  if (i < 100) {
    console.log(`Anh xin loi em lan thu ${++i}`);
  } else {
    break;
    console.log("Ahihi");
  }
}
/**
 * ? for
 * * Bước 1: Khai báo biến đếm.
 * * Bước 2: Kiểm tra điều kiện.
 * * Bước 3: Nếu điều kiện đúng, thực hiện khối code và bước nhảy.
 * * Bước 4: Quay lại kiểm tra điều kiện.
 *
 * * break: thoát ngay ra khỏi vòng lặp.
 * * continue: bỏ qua các lệnh phía sau của lần lặp đó và tiếp tục với lần lặp mới.
 * ! Lưu ý: chú ý điều kiện và biến đếm, nếu không sẽ rơi vào vòng lặp vô tận -> treo máy.
 *
 * ? while: được viết giống như dạng thiếu của for.
 * - Dùng khi bước nhảy phụ thuộc vào logic trong chính vòng lặp, (không rõ số lần lặp)
 *
 * ? do...while: luôn thực hiện tối thiểu 1 lần kể cả khi điều kiện sai.
 */

/**
 * ? In ra các số chẵn từ 0 đến n
 */

let n = 10;
for (let j = 1; j <= n; j++) {
  if (j % 2 !== 0) {
    continue;
  }
  console.log(j);
}

let x = 10;
while (x <= 100) {
  console.log(`dem so ${x}`);
  x += 10;
}

let myName = "Nguyen Hoang";

for (let k = 0; k < myName.length; k++) {
  console.log(myName[k]);
}
