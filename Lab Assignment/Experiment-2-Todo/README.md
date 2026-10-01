# 🧪 Lab Assignment 2 — Session-Based To-Do List

## 📌 Overview

This assignment implements a **To-Do List application using Node.js, Express.js, and Express Sessions**.

Users can add and delete tasks, while the to-do list is stored inside the user's session.

---

## 🎯 Objective

To understand and implement:

- Express.js sessions
- Session-based data storage
- Adding tasks
- Displaying tasks
- Deleting tasks
- Form handling
- Route parameters
- HTTP redirects

---

## 💻 Technologies Used

- Node.js
- Express.js
- JavaScript
- `express-session`
- HTML Forms

---

## ✨ Features

### ➕ Add To-Do

Users can enter a task and submit it through:

```text
POST /add
```

The task is stored inside:

```javascript
req.session.todos
```

---

### 📋 Display To-Do List

The application reads all tasks from the current session and dynamically displays them on the homepage.

If there are no tasks, it displays:

```text
No tasks yet
```

---

### 🗑️ Delete To-Do

Each task has a **Delete** button.

The task index is passed through the route:

```text
/delete/:id
```

and the selected task is removed from the session.

---

## 🔄 Application Flow

```text
Open Application
       ↓
Create Session
       ↓
Initialize To-Do Array
       ↓
   Add Task
       ↓
Store in Session
       ↓
Display Tasks
       ↓
 Delete Task
       ↓
Update Session
```

---

## 🛣️ Routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Display the To-Do List |
| POST | `/add` | Add a new task |
| POST | `/delete/:id` | Delete a selected task |

---

## 📂 Project Structure

```text
Experiment-2-Todo/
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 How to Run

Install dependencies:

```bash
npm install
```

Start the application:

```bash
node app.js
```

Open:

```text
http://localhost:3002
```

---

## 📚 Concepts Demonstrated

- Express.js
- Express routing
- GET and POST requests
- HTML forms
- `express.urlencoded()`
- `express-session`
- `req.session`
- Session-based storage
- Arrays
- `req.body`
- `req.params`
- `filter()`
- Dynamic HTML generation
- `res.redirect()`

---

## ⚠️ Note

The To-Do List is stored in:

```javascript
req.session.todos
```

instead of a database.

The session cookie is configured with:

```javascript
maxAge: 60000
```

which is **1 minute**. Therefore, this application is intended as a demonstration of session-based temporary storage rather than permanent task storage.

---

## 🌐 Hosting Note

This application requires a running **Node.js/Express server**, so it cannot run directly through GitHub Pages.

---

## 🧭 Navigation

⬅️ [Back to Lab Assignments](../README.md)

🏠 [Back to Main Repository](../../README.md)

---

### 👩‍💻 Submitted By

**Kanak Shree**  
**SAP ID:** 590019239  
**Course:** Backend Development  
**University:** UPES

---

> **Lab Assignment 2:** Implementation of a session-based To-Do List using Node.js, Express.js, and Express Sessions.