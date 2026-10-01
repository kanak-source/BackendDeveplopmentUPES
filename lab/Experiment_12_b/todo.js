const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", function (req, res) {

    const html = [
        "<!DOCTYPE html>",
        "<html>",
        "<head>",
        "<title>Todo App</title>",
        "<style>",
        "body { font-family: Arial; max-width: 600px; margin: 50px auto; padding: 20px; }",
        "h1 { text-align: center; }",
        "input { padding: 10px; width: 70%; }",
        "button { padding: 10px 15px; cursor: pointer; }",
        "li { margin: 10px 0; padding: 10px; background: #f2f2f2; }",
        ".delete { float: right; }",
        "#user { text-align: center; color: green; }",
        "</style>",
        "</head>",

        "<body>",

        "<h1>Todo App</h1>",

        "<p id=\"user\"></p>",

        "<input type=\"text\" id=\"todoInput\" placeholder=\"Enter your todo\">",

        "<button onclick=\"addTodo()\">Add Todo</button>",

        "<ul id=\"todoList\"></ul>",

        "<button onclick=\"logout()\">Logout</button>",

        "<script>",

        "// ===============================",
        "// SESSION STORAGE",
        "// ===============================",

        "let username = sessionStorage.getItem('username');",

        "if (!username) {",

        "    username = prompt('Enter your username:');",

        "    ",
        "    if (!username) {",
        "        username = 'Guest';",
        "    }",

        "    sessionStorage.setItem('username', username);",
        "}",

        "document.getElementById('user').innerText = 'Welcome, ' + username;",

        "",

        "// ===============================",
        "// LOCAL STORAGE",
        "// ===============================",

        "let todos = JSON.parse(localStorage.getItem('todos')) || [];",

        "",

        "// ===============================",
        "// DISPLAY TODOS",
        "// ===============================",

        "function displayTodos() {",

        "    const todoList = document.getElementById('todoList');",

        "    todoList.innerHTML = '';",

        "    ",

        "    todos.forEach(function(todo, index) {",

        "        const li = document.createElement('li');",

        "        li.innerText = todo;",

        "        ",

        "        const deleteButton = document.createElement('button');",

        "        deleteButton.innerText = 'Delete';",

        "        deleteButton.className = 'delete';",

        "        deleteButton.onclick = function() {",
        "            deleteTodo(index);",
        "        };",

        "        li.appendChild(deleteButton);",

        "        todoList.appendChild(li);",

        "    });",
        "}",

        "",

        "// ===============================",
        "// ADD TODO",
        "// ===============================",

        "function addTodo() {",

        "    const input = document.getElementById('todoInput');",

        "    const todo = input.value.trim();",

        "    ",

        "    if (todo === '') {",
        "        alert('Please enter a todo!');",
        "        return;",
        "    }",

        "    todos.push(todo);",

        "    ",

        "    // Save todos in Local Storage",
        "    localStorage.setItem('todos', JSON.stringify(todos));",

        "    input.value = '';",

        "    displayTodos();",
        "}",

        "",

        "// ===============================",
        "// DELETE TODO",
        "// ===============================",

        "function deleteTodo(index) {",

        "    todos.splice(index, 1);",

        "    ",

        "    // Update Local Storage",
        "    localStorage.setItem('todos', JSON.stringify(todos));",

        "    ",

        "    displayTodos();",
        "}",

        "",

        "// ===============================",
        "// LOGOUT",
        "// ===============================",

        "function logout() {",

        "    // Remove session",
        "    sessionStorage.removeItem('username');",

        "    alert('Logged out successfully!');",

        "    location.reload();",
        "}",

        "",

        "// Display todos when page loads",
        "displayTodos();",

        "</script>",

        "</body>",
        "</html>"
    ].join("\n");

    res.send(html);
});


app.listen(PORT, function () {
    console.log("Todo App running at http://localhost:" + PORT);
});