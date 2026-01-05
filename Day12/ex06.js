/**
 * * Event keyboard
 * * Event mouse
 * * Event touch
 * * Event window
 * * ...
 */

/**
 * ? 3 cách gắn sự kiện:
 * * 1. Gắn bằng cách viết như attribute trong thẻ mở html.
 * * 2. Gắn bằng JS: Chỉ gắn được 1 hàm cho 1 loại sự kiện.
 * * 3. Dùng eventListener
 */

const btnX = document.getElementById("btn-x");
btnX.onclick = function () {
  console.log("xin chao!");
};

btnX.onclick = function () {
  console.log("bonjour!");
};

btnX.addEventListener("click", function () {
  console.log("hello 1");
});

btnX.addEventListener("click", function () {
  console.log("hello 2");
});

function hello3() {
  console.log("hello 3");
}

btnX.addEventListener("click", hello3);

btnX.removeEventListener("click", hello3);
