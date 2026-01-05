const pElement1 = document.getElementsByTagName("p")[0];
// pElement1.innerText = "Noi dung cap nhat";
pElement1.outerText = "Noi dung cap nhat";

console.log(pElement1.innerText); // * Chỉ bao gồm text node.
console.log(pElement1.outerText); // * Bao gồm cả nội dung bên trong và bản thân thẻ.

document.body.innerHTML = /*html*/ `
  <ul>
    <li class="item">PHP</li>
    <li>JS</li>
    <li>Python</li>
  </ul>
`;
// * Lấy ra/thiết lập một nội dung HTML vào làm con của phần tử trong DOM.
// * outerHTML: Lấy ra/thiết lập lại chính bản thân phần tử và các phần tử/nội dung HTML con bên trong.
// * TextContent: Tìm hiểu thêm.
