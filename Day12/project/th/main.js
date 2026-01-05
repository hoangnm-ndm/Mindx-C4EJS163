const addTodo = document.getElementById("add-todo");
const todos = document.getElementsByClassName("todos")[0];
const todo = document.getElementById("todo");

const todoList = JSON.parse(localStorage.getItem("todoList") || "[]");
addTodo.onclick = function () {
  event.preventDefault();
  console.log(todo.value);
  todoList.unshift(todo.value);
  updateTodoList(todoList);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  todo.value = "";
};

function updateTodoList(todoList) {
  let content = "";
  todoList.forEach((item, index) => {
    content += /*html*/ `
      <li>
        <input type="checkbox" />
        <label>${item}</label>
      </li>
    `;
  });
  todos.innerHTML = content;
}

updateTodoList(todoList);
