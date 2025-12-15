console.log("Hoang" && 0 && "MindX");

/**
 * * falsy false: là các giá trị khi bị ép sang boolean thì nhận giá trị false:
 *
 * * 1. false
 * * 2. 0, -0
 * * 3. ""
 * * 4. null
 * * 5. undefined
 * * 6. NaN (Not a Number)
 *
 * * còn lại là truthy value.
 *
 * ! Toán tử AND (&&) kiểm tra từ trái qua phải, và dừng kiểm tra khi gặp falsy value, gán falsy value cho biểu thức,
 * Nếu không tìm thấy falsy thì gán vế cuối cho bthuc.
 *
 * ! Toán tử OR (||) hoạt động ngược lại,
 */

console.log("" || 0 || false || "MindX" || NaN || undefined || null);
