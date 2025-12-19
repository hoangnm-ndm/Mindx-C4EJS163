if (3 > 2) {
  console.log("3 thi lon hon 2");
}

let number = +window.prompt("Moi nhap vao 1 so bat ky?");

if (number > 0) {
  console.log(`${number} la mot so duong`);
} else if (number === 0) {
  console.log(`number mang gia tri 0`);
} else {
  console.log(`${number} la so am`);
}

if (null && undefined && "MindX") {
  console.log("Test!!!!!!");
}

if (0 || false || NaN || "Hoang") {
  console.log("Test 2222222!");
}

if (3 > 2) {
}
let day = 3;

let now = new Date("2010-10-20");

// console.log(now.getDay());

switch (now.getDay()) {
  case 1:
    console.log("Thứ Hai");
    break;
  case 2:
    console.log("Thứ Ba");
    break;
  case 3:
    console.log("Thứ Tư");
    break;
  case 4:
    console.log("Thứ Năm");
    break;
  case 5:
    console.log("Thứ Sáu");
    break;
  case 6:
    console.log("Thứ Bảy");
    break;
  case 0:
    console.log("Chủ nhật");
    break;

  default:
    console.log("Không phải ngày trong tuần hợp lệ");
}

/**
 * ? Khi nào dùng if...else:
 * * Khi có ít trường hợp.
 * * Khi điều kiện không mang rõ giá trị mà có dạng khoảng giá trị.
 * * Thường biểu thức điều kiện mạng tính luận lý (boolean)
 *
 *
 * ? Khi nào dùng switch...case:
 * *  Khi có nhiều trường hợp rẽ nhánh.
 * * Khi điều kiện có những giá trị cụ thể để so sánh.
 */

// switch (true) {
//   case 3 > 2:
//     console.log(object);
// }

// switch (now.getDay()) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("Ngay trong tuan!");
//     break;

//   case 6:
//   case 0:
//     console.log("Ngay cuoi tuan!");
//     break;

//   default:
//     console.log("Không phải ngày trong tuần hợp lệ");
// }

switch (now.getDay()) {
  case 1 || 2 || 3 || 4 || 5:
    console.log("Ngay trong tuan!");
    break;

  case 6 || 0:
    console.log("Ngay cuoi tuan!");
    break;

  default:
    console.log("Không phải ngày trong tuần hợp lệ");
}

// ???

let products = [];
products.length !== 0
  ? console.log(products)
  : console.log("khong co san pham!");
