const users: string[] = ["Hoang", "Huyen", "Nam", "An"];

type User = {
  id: number;
  name: string;
  age: number;
  isAdmin: boolean;
};

// * postfix
const users2: User[] = [
  { id: 1, name: "Hoang", age: 30, isAdmin: true },
  { id: 2, name: "Huyen", age: 25, isAdmin: false },
  { id: 3, name: "Nam", age: 28, isAdmin: false },
];

const myNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// * Generic type

const users3: Array<User> = [
  { id: 1, name: "Hoang", age: 30, isAdmin: true },
  { id: 2, name: "Huyen", age: 25, isAdmin: false },
  { id: 3, name: "Nam", age: 28, isAdmin: false },
];
const myNumber2: Array<number> = [1, 2, 3];
const myString: Array<string | number> = ["X", "Y", "X", 1, 2, 3];
const mixedArray: (number | string)[] = [1, 2, 3, "MindX"];

// * Tuple

const point: [number, number, number] = [10, 20, 30];

const infor: [id: number, name: string, age: number, address: string] = [
  1,
  "Hoang",
  30,
  "Bac Ninh",
];
const infor2: [id: number, name: string, age: number, address?: string] = [
  2,
  "Nam",
  30,
];
// * address: optional
