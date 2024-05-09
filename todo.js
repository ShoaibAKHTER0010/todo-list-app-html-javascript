let todoList = [];

function addTodo() {
    const newTodoInput = document.getElementById("newTodo");
    const todoText = newTodoInput.value.trim();

    if (todoText !== "") {
        const todoItem = {
            text: todoText,
            id: Date.now()
        };

        todoList.push(todoItem);
        newTodoInput.value = "";
        displayTodo();
    }
}

function displayTodo() {
    const todoListContainer = document.getElementById("todoList");
    todoListContainer.innerHTML = "";

    todoList.forEach(todo => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${todo.text}</span>
            
            <button onclick="editTodo(${todo.id})" id="btn1"><i class="fa-regular fa-pen-to-square"></i></button>
            <button onclick="deleteTodo(${todo.id})" id="btn2"><i class="fa-solid fa-trash-can"></i></button>
        `;
        todoListContainer.appendChild(listItem);
    });
}

function editTodo(id) {
    const updatedText = prompt("Edit todo:", todoList.find(todo => todo.id === id).text);

    if (updatedText !== null) {
        todoList = todoList.map(todo => (todo.id === id ? { ...todo, text: updatedText } : todo));
        displayTodo();
    }
}

function deleteTodo(id) {
    todoList = todoList.filter(todo => todo.id !== id);
    displayTodo();
}
displayTodo();
