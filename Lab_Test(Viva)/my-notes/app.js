const express = require("express");
const { Pool } = require("pg");

const app = express();
const pool = new Pool({
    user: "kanakshree",
    host: "localhost",
    database: "notes_lab",
    port: 5432
});
pool.connect()
    .then(() => {
        console.log("PostgreSQL Connected");
    })
    .catch((error) => {
        console.log("Database Error:", error);
    });

// EJS
app.set("view engine", "ejs");


// Read form data
app.use(express.urlencoded({ extended: true }));


// Public folder for CSS
app.use(express.static("public"));

app.get("/", async (req, res) => {

    const result = await pool.query(
        "SELECT * FROM notes ORDER BY created_at DESC"
    );

    res.render("index", {
        notes: result.rows
    });

});
app.get("/notes/new", (req, res) => {

    res.render("new");

});
app.post("/notes", async (req, res) => {

    const title = req.body.title;
    const content = req.body.content;
    const category = req.body.category;

    if (!title || !content) {
        return res.send("Title and Content are required");
    }

    await pool.query(
        "INSERT INTO notes (title, content, category) VALUES ($1, $2, $3)",
        [title, content, category]
    );

    res.redirect("/");

});
app.post("/notes/:id/delete", async (req, res) => {

    const id = req.params.id;

    await pool.query(
        "DELETE FROM notes WHERE id = $1",
        [id]
    );

    res.redirect("/");

});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});