interface User {
  fullname: string;
  email: string;
  password: string;
  age: number;
  address?: string;
  role: "superAdmin" | "admin" | "manager" | "client";
}

//* Interface code theo hướng OOP , có thể sử dụng extend, ...

type TUser = {
  fullname: string;
  email: string;
  password: string;
  age: number;
  address?: string;
  role: "superAdmin" | "admin" | "manager" | "client";
};
/**
 * * Khai báo với type thì có thể sử dụng các utilities type, mix type, union...  */

const user: User = {
  fullname: "Nguyen Hoang",
  age: 33,
  email: "hoang@gmail.com",
  password: "123456",
  role: "admin",
};

interface Teacher extends User {
  major: string;
}

const myInfor: Teacher = {
  fullname: "Nguyen Hoang",
  age: 33,
  email: "hoang@gmail.com",
  password: "123456",
  role: "admin",
  major: "IT",
};
