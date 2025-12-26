const myInfor = {
  fullname: "Nguyen Hoang",
  age: 33,
  email: "hoang@gmail.com",
  password: "123456",
  role: "admin",
  major: "IT",
};

// * Khuyên dùng for..in cho object
for (key in myInfor) {
  // console.log(key);
  console.log(`Giá trị của ${key} là ${myInfor[key]}`);
}

console.log(myInfor.length); //undefined

for (let i = 0; i < Object.keys(myInfor).length; i++) {
  console.log(i);
}

for (key of myInfor) {
  console.log(key);
}
// error: không dùng for...of với object.

let myString = new String("Hoang");
