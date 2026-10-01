const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Form / JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Assignment data
const steps = require("./data/assignment");

// Home route
app.get("/", (req, res) => {

    res.render("index", {

        title: "PostgreSQL + JSONB",

        studentName: "Kanak Shree",

        assignmentTitle:
            "Explore use of JSONB in PostgreSQL and how it can be used in place of MongoDB",

        steps

    });

});

// Start server
app.listen(PORT, () => {

    console.log(
        `\n🚀 Server running at http://localhost:${PORT}\n`
    );

});