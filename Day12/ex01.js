//* Document Object Model = Mô hình hoá tài liệu dạng đối tượng.

// * W3C đưa ra 3 khái niệm về DOM: Core DOM, XML DOM, HTML DOM

// * HTML DOM = Mô hình hoá tài liệu HTML dạng đối tượng.

/**
 * * DOM có 3 loại node chính:
 * * Element Node: Phần tử HTML -> Thao tác với element.
 * * Attribute Node: Thuộc tính HTML -> Thao tác với Attribute
 * * Text Node: Nội dung text. -> Thao tác với text
 *
 * Comment Node.
 */

// * DOM Manipulation (CRUD)

const myDOM = {
  root: {
    html: {
      head: {},
      body: {
        h1: {
          style: {
            color: "red",
          },
          children: "Noi dung the h1",
        },
        div: {
          div: {
            p: {},
          },
        },
      },
    },
  },
};

console.log(myDOM);
console.log({ document });
