const infor = {
  name: "MindX",
  age: 10,
  address: "Trai Dat",
};

const otherInfor = {
  color: "red",
};

// infor.keys(); //sai

// * prototype chain = chuỗi kế thừa => Sử dụng trực tiếp trên instance.
// * static method tồn tại trên hàm tạo/class.

console.log(Object.keys(infor));
console.log(Object.values(infor));
console.log(Object.entries(infor));

const allInfor = Object.assign({}, infor, otherInfor);
console.log(allInfor);

// * Object.seal(), Object.freeze()...
