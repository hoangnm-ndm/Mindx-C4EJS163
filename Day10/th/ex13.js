myFunction([1, 2, 3, 2, 1, 1, 4, 5, 10]);
// -> Output: 1

myFunction([1, 2, 2, 2, 3, 2, 1, 1, 4, 5, 10]);
// -> Output: 2

/**
 * Bước 1: Đếm số lần xuất hiện của từng số.
 *
 *
 * Bước 2: Tìm ra số có số lần xuất hiện lớn nhất.
 * -> Nếu có nhiều số có cùng số lần xuất hiện, thì lấy số lớn nhất.
 */

const b1 = {
  1: 3,
  2: 3,
  3: 1,
  4: 1,
  5: 1,
  10: 1,
};

// Object.values(b1) -> Math.max(...[3,3,1,1,1,1])
// [1,2] -> 2 > 1
// -> 2
