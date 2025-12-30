function checkPalindrome(str) {
  if (typeof str !== "string") return "invalid";
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("abccba"));
console.log(checkPalindrome("h11h"));
console.log(checkPalindrome("abc"));
console.log(checkPalindrome(1221));
console.log(checkPalindrome(12211000));
console.log(checkPalindrome({ name: "Hoang" }));
