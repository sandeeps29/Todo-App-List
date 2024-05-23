const todoArray = JSON.parse(localStorage.getItem("todoArray")) || [
  {
    name: "make dinner",
    dueDate: "2022-12-22",
  },
  {
    name: "wash dishes",
    dueDate: "2022-12-22",
  },
];

todoDisplay();

document.querySelector(".js-add-todo-button").addEventListener("click", () => {
  todoList();
});

function todoList() {
  let nameInputElement = document.querySelector(".js-todo-input-name");
  const name = nameInputElement.value;
  let dateInputElement = document.querySelector(".js-todo-input-date");
  const dueDate = dateInputElement.value;
  todoArray.push({ name: name, dueDate: dueDate });
  console.log(todoArray);
  nameInputElement.value = "";
  todoDisplay();
  saveToStorage();
}

function todoDisplay() {
  let todoListHTML = "";
  todoArray.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `<div>${name}</div>
      <div> ${dueDate} </div>
      <button class="delete-todo-button js-delete-todo-button"
      >delete</button>`;
    todoListHTML += html;
    console.log(index);
  });

  document.querySelector(".js-todo-display").innerHTML = todoListHTML;

  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoArray.splice(index, 1);
        todoDisplay();
      });
    });
}

function saveToStorage() {
  localStorage.setItem("todoArray", JSON.stringify(todoArray));
}
