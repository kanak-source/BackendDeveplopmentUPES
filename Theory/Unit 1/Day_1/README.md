# 📖 Theory — Unit 1, Day 1: Express.js & EJS

## 📌 Overview

This implementation demonstrates a basic **Student Management application using Node.js, Express.js, and EJS**.

The Express server maintains sample student data and uses **EJS Server-Side Rendering (SSR)** to dynamically display the students in the browser.

---

## 🎯 Objective

To understand:

- Express.js server creation
- Express routing
- EJS template engine
- Server-Side Rendering
- Passing data from Express to EJS
- Rendering arrays using EJS loops

---

## 💻 Technologies Used

- Node.js
- Express.js
- EJS
- HTML5
- JavaScript

---

## 📊 Student Data

The server contains an array of student objects:

```javascript
const students = [
    { id: 1, name: "Aarav", branch: "CSE" },
    { id: 2, name: "Diya", branch: "ECE" },
    { id: 3, name: "Rohan", branch: "IT" }
];
```

Each student contains:

- ID
- Name
- Branch

---

## 🏠 Home Page

The home route:

```http
GET /
```

renders:

```text
home.ejs
```

using:

```javascript
res.render("home");
```

The page provides a link to view all students.

---

## 👨‍🎓 Students Page

The route:

```http
GET /students
```

passes the students array to the EJS template:

```javascript
res.render("students", {
    students: students
});
```

The EJS page loops through the array:

```ejs
<% students.forEach(student => { %>

    <li>
        <strong><%= student.name %></strong>
        — <%= student.branch %>
    </li>

<% }); %>
```

---

## 🔄 Application Flow

```text
Browser
   ↓
Express Route
   ↓
Student Data
   ↓
EJS Template
   ↓
Generated HTML
   ↓
Browser
```

---

## 🛣️ Routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Display home page |
| GET | `/students` | Display all students |

---

## 📂 Project Structure

```text
Day_1/
│
├── views/
│   ├── home.ejs
│   └── students.ejs
│
├── app.js
├── package.json
└── README.md
```

---

## 🚀 How to Run

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node app.js
```

Open:

```text
http://localhost:3000
```

Students page:

```text
http://localhost:3000/students
```

---

## 📚 Concepts Demonstrated

- Node.js
- Express.js
- Express routes
- EJS
- Server-Side Rendering
- `res.render()`
- JavaScript objects
- Arrays of objects
- Passing backend data to views
- EJS `forEach()` loop
- Dynamic HTML generation

---

## 🧭 Navigation

⬅️ [Back to Unit 1](../README.md)

📖 [Back to Theory](../../README.md)

🏠 [Back to Main Repository](../../../README.md)

---

### 👩‍💻 Submitted By

**Kanak Shree**  
**SAP ID:** 590019239  
**Course:** Backend Development  
**University:** UPES

---

> **Theory — Unit 1, Day 1:** Basic implementation of Express.js and EJS for dynamically rendering student data using Server-Side Rendering.