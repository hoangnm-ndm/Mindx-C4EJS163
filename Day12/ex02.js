// console.log(document);
/**
 * 5 Cách phổ biến nhất:
 * * Truy vấn theo id -> 1 phần tử HTML duy nhất.
 * * Truy vấn theo ClassName -> HTMLCollection.
 * * Truy vấn theo TagName -> HTMLCollection.
 * * Truy vấn bằng querySelector -> 1 node
 * * Truy vấn bằng querySelectorAll -> NodeList.
 */

const itemElement = document.getElementById("item-1");
console.log({ itemElement }); // * element node: HTMLDivElement
console.log(typeof itemElement);

let itemElements2 = document.getElementsByClassName("item");
console.log(itemElements2[0]);

let itemElements3 = document.getElementsByTagName("div");
console.log(itemElements3[0]);

let itemElement4 = document.querySelector("div#products > div.item");
let itemElements = document.querySelectorAll("div#products > div.item");

console.log(itemElement4);
console.log(itemElements[1]);
