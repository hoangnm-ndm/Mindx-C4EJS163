const numbers = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
const targetCounting = 2;

/**
 *
 * @param {*} arr
 * @returns {}
 */

function countValue(arr) {
  /**
   * * Bước 1: khai báo 1 object rỗng.
   * * Bước 2: Tạo vòng for.
   *  - Kiểm tra nếu value này đã xuất hiện ở obj, -> tăng 1.
   * - Nếu chưa, thì tạo key: 1
   */

  const countedValue = {};
  for (let i = 0; i < arr.length; i++) {
    if (countedValue[arr[i]]) {
      countedValue[arr[i]]++;
    } else {
      countedValue[arr[i]] = 1;
    }
  }
  return countedValue;
}

console.log(countValue(numbers));
