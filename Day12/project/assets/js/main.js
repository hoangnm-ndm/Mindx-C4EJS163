const productsEle = document.getElementById("products");

let content = "";
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach((item, index) => {
      content += /*html */ `
        <div>
          <h2>${item.title}</h2>
          <p>Gia: ${item.price}</p>
          <img src="${item.thumbnail}" alt="" />
          <button>Add to cart</button>
        </div>
      `;
    });

    productsEle.innerHTML = content;
  });
