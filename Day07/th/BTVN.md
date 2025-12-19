# Bài tập nâng cao bổ sung sử dụng vòng lặp

## 1. Viết hàm in ra các số nguyên tố từ 2 đến n

Thực hiện viết hàm `printPrimeNumber(n)` để in ra các số nguyên tố từ 2 đến n.

**Ví dụ:**

```javascript
// Input:
function printPrimeNumber(n) {
  // Xử lý và in ra kết quả
}

// Output:
printPrimeNumber(10); // 2 3 5 7
```

## 2. Viết hàm in ra tam giác cân theo ký tự nhập vào

Thực hiện viết hàm `printIsoscelesTriangle()` để in ra tam giác cân cao `n` dòng theo ký tự nhập vào.

```javascript
// Input:
function printIsoscelesTriangle(n, character) {
  // Xử lý và in ra kết quả
}

// Output:
printIsoscelesTriangle(5, "*");
//     *
//    ***
//   *****
//  *******
// *********
```

## 3. Viết hàm in ra cây thông noel theo yêu cầu

- Hàm `printChristmasTree(n, character)` sẽ in ra cây thông noel với chiều cao `n` theo yêu cầu sau:
  - Chỉ chấp nhận n là số nguyên dương nhỏ hơn 100, và character là một ký tự.
  - Cây thông noel được in ra bằng ký tự `character` truyền vào.
  - Cây thông noel được in ra theo dạng tam giác cân.
  - Cây thông noel được in ra theo chiều cao `n` nếu chỉ tính tán cây, và cao `n+1` nếu tính cả phần gốc.
  - Cây thông noel được in ra theo độ rộng `2n - 1`.

**Ví dụ:**

```javascript
// Input 1:
printChristmasTree(5, "*");

// Output 1:

//     *
//    ***
//   *****
//  *******
// *********
//     *

// Input 2:
printChristmasTree(4, "o");

// Output 2:

//    o
//   ooo
//  ooooo
// ooooooo
//    o
```
