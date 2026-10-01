# 🎓 Lab Test / Viva — My Notes App

## 📌 Overview

**My Notes** is a full-stack Notes Management application developed using **Node.js, Express.js, EJS, and PostgreSQL**.

The application allows users to create notes, assign categories, view saved notes, and delete notes. All notes are permanently stored in a PostgreSQL database.

---

## 🎯 Objective

The objective of this project is to demonstrate:

- Node.js & Express.js
- PostgreSQL database connectivity
- EJS Server-Side Rendering
- Form handling
- SQL queries
- Dynamic data rendering
- Creating and deleting database records
- Express routing

---

## 💻 Technologies Used

- Node.js
- Express.js
- EJS
- PostgreSQL
- `pg` Node.js package
- HTML5
- CSS3
- JavaScript

---

# ✨ Features

### 📝 Add Notes

Users can create a new note containing:

- Title
- Content
- Category

The note is stored permanently in PostgreSQL.

---

### 📋 View Notes

All notes are retrieved from the database using:

```sql
SELECT * FROM notes
ORDER BY created_at DESC
```

The newest notes are displayed first.

---

### 🏷️ Note Categories

Each note can have a category such as:

```text
Study
Work
Personal
```

If no category is provided, the interface displays:

```text
General
```

---

### 🗑️ Delete Notes

Individual notes can be deleted using their database ID.

```sql
DELETE FROM notes
WHERE id = $1
```

Parameterized SQL queries are used when inserting and deleting notes.

---

# 🗄️ PostgreSQL Connection

The application connects to PostgreSQL using the `pg` package:

```javascript
const { Pool } = require("pg");
```

Database configuration:

```javascript
const pool = new Pool({
    user: "kanakshree",
    host: "localhost",
    database: "notes_lab",
    port: 5432
});
```

---

# 🖥️ EJS Server-Side Rendering

EJS is configured using:

```javascript
app.set("view engine", "ejs");
```

The application contains two main views:

```text
index.ejs
new.ejs
```

`index.ejs` dynamically loops through notes retrieved from PostgreSQL:

```ejs
<% notes.forEach(note => { %>

    <h2><%= note.title %></h2>
    <p><%= note.content %></p>

<% }) %>
```

---

# 🛣️ Routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Display all notes |
| GET | `/notes/new` | Display Add Note form |
| POST | `/notes` | Create and save a new note |
| POST | `/notes/:id/delete` | Delete a note |

---

# 🔄 Application Flow

```text
                 Browser
                    │
                    ▼
              Express Server
                    │
           ┌────────┴────────┐
           │                 │
           ▼                 ▼
       EJS Views        PostgreSQL
           │                 │
           │            Store Notes
           │            Read Notes
           │            Delete Notes
           │                 │
           └────────┬────────┘
                    ▼
              Updated UI
```

---

# 📂 Project Structure

```text
my-notes/
│
├── public/
│   └── style.css
│
├── views/
│   ├── index.ejs
│   └── new.ejs
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 How to Run

### 1. Install Dependencies

```bash
npm install
```

### 2. Make Sure PostgreSQL is Running

The application expects the database:

```text
notes_lab
```

### 3. Start the Application

```bash
node app.js
```

### 4. Open in Browser

```text
http://localhost:3000
```

---

# 📚 Concepts Demonstrated

- Express.js routing
- PostgreSQL connectivity
- `pg` Pool
- SQL `SELECT`
- SQL `INSERT`
- SQL `DELETE`
- Parameterized SQL queries
- Async/Await
- EJS templates
- EJS loops
- Server-Side Rendering
- HTML forms
- POST requests
- Route parameters
- Form validation
- Static CSS files
- Database persistence

---

## 🌐 Hosting Note

This project requires both a **Node.js/Express server and PostgreSQL database**, so it cannot run directly through GitHub Pages.

GitHub Pages can display the project documentation, while the complete application requires backend-compatible hosting and a PostgreSQL database.

---

## 🧭 Navigation

🏠 [Back to Main Repository](../../README.md)

🧪 [Lab Experiments](../../lab/README.md)

📝 [Lab Assignments](../../Lab%20Assignment/README.md)

---

### 👩‍💻 Developed By

**Kanak Shree**  
**SAP ID:** 590019239  
**Course:** Backend Development  
**University:** UPES

---

> **Lab Test / Viva:** Full-stack Notes Management application using Node.js, Express.js, EJS, and PostgreSQL.