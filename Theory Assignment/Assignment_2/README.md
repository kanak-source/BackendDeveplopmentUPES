# 📘 Theory Assignment 2 — PostgreSQL JSONB

## 📌 Assignment Topic

**Explore the use of JSONB in PostgreSQL and how it can be used in place of MongoDB — understanding how PostgreSQL can work as both an SQL and NoSQL-style database.**

---

## 📖 Overview

This assignment is presented as an **interactive web-based learning experience** developed using **Node.js, Express.js, EJS, HTML, CSS, and JavaScript**.

The website explains PostgreSQL JSONB step-by-step and demonstrates how PostgreSQL can combine traditional relational database capabilities with flexible document-style JSON storage.

---

## 🎯 Objective

The objective of this assignment is to understand:

- PostgreSQL JSONB
- JSON vs JSONB
- Storing JSON documents in PostgreSQL
- Querying JSONB data
- JSONB operators
- JSONB indexing
- Structured and semi-structured data
- PostgreSQL as SQL + NoSQL
- PostgreSQL JSONB vs MongoDB
- Backend integration with JSONB

---

## 💻 Technologies Used

- Node.js
- Express.js
- EJS
- HTML5
- CSS3
- JavaScript
- PostgreSQL concepts
- JSONB

---

# ✨ Website Features

The assignment is presented through a modern step-by-step interface.

### 🧭 Interactive Step Navigation

The assignment is divided into **7 steps**.

Users can navigate using:

- Step tabs
- Previous button
- Next button
- Keyboard arrow keys

The interface displays progress such as:

```text
01 / 07
```

---

### ⌨️ Keyboard Navigation

Users can navigate between assignment sections using:

```text
→ Right Arrow = Next Step
← Left Arrow  = Previous Step
```

---

### 📋 Copy Code Feature

Code examples contain a **Copy** button.

JavaScript uses:

```javascript
navigator.clipboard.writeText()
```

to copy code directly to the clipboard.

After copying, the button temporarily displays:

```text
Copied ✓
```

---

### 📊 Dynamic Assignment Content

Assignment content is stored separately and loaded into the Express application:

```javascript
const steps = require("./data/assignment");
```

The data is passed to EJS:

```javascript
res.render("index", {
    title: "PostgreSQL + JSONB",
    studentName: "Kanak Shree",
    assignmentTitle:
        "Explore use of JSONB in PostgreSQL and how it can be used in place of MongoDB",
    steps
});
```

EJS dynamically generates the assignment interface from this data.

---

# 🖥️ Server-Side Rendering

The application uses **EJS** as its template engine:

```javascript
app.set("view engine", "ejs");
```

The EJS page dynamically renders:

- Step titles
- Subtitles
- Overview sections
- Paragraphs
- Lists
- Tables
- Comparisons
- Architecture diagrams
- Code examples
- Key points
- Takeaways
- Next-step previews

---

# 🗄️ PostgreSQL + JSONB Concept

PostgreSQL traditionally works with structured relational data:

```text
Tables
Rows
Columns
Relationships
Joins
Constraints
```

JSONB adds document-style capabilities:

```text
JSON Documents
Nested Objects
Arrays
Flexible Fields
Document Queries
JSONB Indexing
```

This allows PostgreSQL to support both:

```text
          PostgreSQL
         /          \
        /            \
       ▼              ▼
 Relational SQL    JSONB Documents
       │              │
       ▼              ▼
 Structured       Flexible /
   Data           Semi-Structured
```

---

# 🔄 SQL + NoSQL Style Approach

JSONB allows an application to combine:

```text
Traditional Relational Data
            +
Flexible JSON Documents
            ↓
        PostgreSQL
```

This can be useful when an application requires both strong relational structure and flexible document-like fields.

---

# 🆚 PostgreSQL JSONB & MongoDB

The assignment explores the relationship between:

```text
PostgreSQL + JSONB
```

and:

```text
MongoDB Document Storage
```

Rather than requiring every flexible data structure to be stored in a separate document database, PostgreSQL JSONB can store nested and semi-structured JSON data alongside relational tables.

---

# 🎨 Responsive User Interface

The assignment includes a custom responsive interface with:

- Dark academic theme
- Hero section
- SQL vs document-data visualization
- Seven-step navigation
- Interactive content sections
- Code cards
- Comparison sections
- Tables
- Architecture diagrams
- Key-point cards
- Previous/Next navigation
- Responsive mobile layout

The layout adapts for desktop, tablet, and mobile devices.

---

# 📂 Project Structure

```text
Assignment_2/
│
├── data/
│   └── assignment.js
│
├── public/
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── script.js
│
├── views/
│   └── index.ejs
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 How to Run

## 1. Install Dependencies

Open the Assignment 2 folder and run:

```bash
npm install
```

## 2. Start the Express Server

```bash
node server.js
```

## 3. Open the Website

Visit:

```text
http://localhost:3000
```

---

# 🔄 Application Architecture

```text
assignment.js
      │
      │ Assignment Content
      ▼
  Express.js
  server.js
      │
      │ res.render()
      ▼
     EJS
  index.ejs
      │
      ├──── style.css
      │
      └──── script.js
      │
      ▼
Interactive Assignment Website
```

---

# 📚 Concepts Demonstrated

### Backend

- Node.js
- Express.js
- EJS
- Server-Side Rendering
- Static file serving
- Dynamic data passing

### Frontend

- HTML5
- CSS3
- JavaScript
- DOM manipulation
- Event listeners
- Keyboard events
- Clipboard API
- Responsive design

### Database Concepts

- PostgreSQL
- JSON
- JSONB
- Structured data
- Semi-structured data
- Document-style storage
- JSONB querying
- JSONB indexing
- SQL vs NoSQL
- PostgreSQL vs MongoDB

---

# 🌐 Hosting Note

The project uses **Node.js, Express.js, and EJS**, so the complete interactive application requires a running Node.js server.

It cannot run directly as an Express application through GitHub Pages.

The source code and documentation can still be accessed through the GitHub repository.

---

## 🧭 Navigation

⬅️ [Back to Theory Assignments](../README.md)

📖 [Theory](../../Theory/README.md)

🏠 [Back to Main Repository](../../README.md)

---

### 👩‍💻 Developed By

**Kanak Shree**  
**SAP ID:** 590019239  
**Course:** Backend Development  
**University:** UPES

---

> **Theory Assignment 2:** An interactive exploration of PostgreSQL JSONB and how PostgreSQL combines relational SQL capabilities with flexible document-style data handling.