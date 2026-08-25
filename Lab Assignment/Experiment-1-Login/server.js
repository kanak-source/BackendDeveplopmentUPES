const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(
    session({
        secret: "mySecretKey",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000
        }
    })
);

// Temporary in-memory users
const users = [];

// Home page
app.get("/", (req, res) => {
    res.send(`
        <h1>Simple User Login System</h1>

        <a href="/register">Register</a>
        <br><br>

        <a href="/login">Login</a>
    `);
});

// Register page
app.get("/register", (req, res) => {
    res.send(`
        <h1>Register</h1>

        <form method="POST" action="/register">
            <input
                type="text"
                name="username"
                placeholder="Enter username"
                required
            />
            <br><br>

            <input
                type="password"
                name="password"
                placeholder="Enter password"
                required
            />
            <br><br>

            <button type="submit">Register</button>
        </form>

        <br>
        <a href="/login">Already registered? Login</a>
    `);
});

// Register user
app.post("/register", (req, res) => {
    const { username, password } = req.body;

    const existingUser = users.find(
        user => user.username === username
    );

    if (existingUser) {
        return res.send(`
            <h2>User already exists!</h2>
            <a href="/register">Try Again</a>
        `);
    }

    users.push({
        username,
        password
    });

    res.send(`
        <h2>Registration successful!</h2>
        <a href="/login">Go to Login</a>
    `);
});

// Login page
app.get("/login", (req, res) => {
    res.send(`
        <h1>Login</h1>

        <form method="POST" action="/login">
            <input
                type="text"
                name="username"
                placeholder="Enter username"
                required
            />
            <br><br>

            <input
                type="password"
                name="password"
                placeholder="Enter password"
                required
            />
            <br><br>

            <button type="submit">Login</button>
        </form>

        <br>
        <a href="/register">Create Account</a>
    `);
});

// Login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
        user =>
            user.username === username &&
            user.password === password
    );

    if (!user) {
        return res.send(`
            <h2>Invalid username or password!</h2>
            <a href="/login">Try Again</a>
        `);
    }

    // Store user in session
    req.session.user = {
        username: username
    };

    res.redirect("/dashboard");
});

// Authentication middleware
function authMiddleware(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect("/login");
    }
}

// Dashboard
app.get("/dashboard", authMiddleware, (req, res) => {
    res.send(`
        <h1>Dashboard</h1>

        <h2>Welcome, ${req.session.user.username}!</h2>

        <p>You are successfully logged in.</p>

        <a href="/logout">Logout</a>
    `);
});

// Logout
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Experiment 1 running at http://localhost:${PORT}`);
});