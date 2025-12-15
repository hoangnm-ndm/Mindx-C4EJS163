/**
 * Superset của JavaScript, thêm kiểu tĩnh và các tính năng nâng cao khác.
 * -> Kiểm tra được tính hợp lý về kiểu của JS khi code chưa thực hiện. - -> Giúp phát hiện lỗi sớm hơn.
 */

{
  let a: number = 10;
  // a = "Hoang"; // Lỗi kiểu
  let b: string = "Hoang";
  let c: boolean = true;
  let d: null = null;
}

interface Product {
  id: string;
  title: string;
  price: number;
  description?: string;
}

let product: Product = {
  id: "abc",
  title: "San pham A",
  price: 200,
  description: "Mo ta san pham",
};

let product2: Product = {
  id: "abc",
  title: "San pham A",
  price: 200,
};

type User = {
  email: string;
  password: string;
  fullname: string;
  role: "admin" | "superAdmin" | "manager" | "client";
};

const user: User = {
  email: "hoang@gmail.com",
  password: "matkhauday",
  fullname: "Nguyen Hoang",
  role: "admin",
};

const products: Product[] = [
  {
    id: "abc",
    title: "San pham A",
    price: 200,
    description: "Mo ta san pham",
  },
  {
    id: "abc",
    title: "San pham B",
    price: 200,
    description: "Mo ta san pham",
  },
  {
    id: "abc",
    title: "San pham C",
    price: 200,
    description: "Mo ta san pham",
  },
];
