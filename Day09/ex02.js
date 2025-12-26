const user = {
  fullname: "Nguyen Hoang",
};

user["Quê quán"] = "Bac Ninh";
user.age = 33;

let stringKey = "nickName";

user[stringKey] = "HoangCodeDao";

console.log(user);

console.log(user.fullname);

user.fullname = "Nguyen Minh Hoang";
console.log(user.fullname);
user.fullname = undefined; // *không phải cách xoá key đúng.

console.log(user);

delete user.fullname; //* Cách xoá key đúng

console.log(user);

/**
 * ? CRUD Object key, value
 */
