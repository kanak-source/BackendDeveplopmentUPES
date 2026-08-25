const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3002;

// Middleware
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(
    session({
        secret: "todoSecretKey",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60000
        }
    })
);

// Home page
app.get("/", (req, res) => {

    // Create todo array for first-time visitor
    if (!req.session.todos) {
        req.session.todos = [];
    }

    let todoList = "";

    req.session.todos.forEach((todo, index) => {
        todoList += `
            <li>
                ${todo}

                <form
                    method="POST"
                    action="/delete/${index}"
                    style="display:inline;"
                >
                    <button type="submit">Delete</button>
                </form>
            </li>
        `;
    });

    res.send(`
        <h1>Session-Based To-Do List</h1>

        <h3>Add To-Do</h3>

        <form method="POST" action="/add">
            <input
                type="text"
                name="todoItem"
                placeholder="Enter todo"
                required
            />

            <button type="submit">Add</button>
        </form>

        <h3>Your To-Do List</h3>

        <ul>
            ${todoList || "<li>No tasks yet</li>"}
        </ul>
    `);
});

// Add todo
app.post("/add", (req, res) => {

    if (!req.session.todos) {
        req.session.todos = [];
    }

    req.session.todos.push(req.body.todoItem);

    res.redirect("/");
});

// Delete todo
app.post("/delete/:id", (req, res) => {

    const id = parseInt(req.params.id);

    if (req.session.todos) {
        req.session.todos = req.session.todos.filter(
            (item, index) => index !== id
        );
    }

    res.redirect("/");
});

// Start server
app.listen(PORT, () => {
    console.log(`Experiment 2 running at http://localhost:${PORT}`);
});