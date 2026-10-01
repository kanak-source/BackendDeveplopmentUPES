# 📝 Theory Assignment 1 — Notes App using LocalStorage & JSON

## 📌 Overview

This assignment implements a fully functional **Notes App using HTML, CSS, and JavaScript**.

The application uses the browser's **LocalStorage** to save notes, allowing them to remain available even after the page is refreshed or reopened.

JavaScript objects are converted to JSON before being stored and converted back when retrieved.

---

## 🎯 Objective

To understand and implement:

- Browser LocalStorage
- JSON
- `JSON.stringify()`
- `JSON.parse()`
- JavaScript DOM manipulation
- Event handling
- Creating, reading, updating, and deleting notes
- Persistent frontend storage

---

## 💻 Technologies Used

- HTML5
- CSS3
- JavaScript
- Web Storage API
- LocalStorage
- JSON

---

# ✨ Features

### ➕ Add Notes

Users can type a note and click:

```text
+ Add Note
```

Each new note contains:

```javascript
{
    id: Date.now(),
    text: text,
    createdAt: new Date().toISOString(),
    updatedAt: null
}
```

---

### 💾 LocalStorage Persistence

Notes are stored using:

```javascript
localStorage.setItem(
    "notes",
    JSON.stringify(notes)
);
```

Stored notes are retrieved using:

```javascript
JSON.parse(
    localStorage.getItem("notes")
);
```

This allows notes to remain available after refreshing the webpage.

---

### 📋 Display Notes

All saved notes are automatically displayed when the application opens.

The newest notes are displayed first.

---

### ✏️ Edit Notes

Users can edit an existing note.

After editing, the application updates:

```javascript
updatedAt
```

and displays both the creation and update timestamps.

---

### 🗑️ Delete Notes

Users can delete individual notes.

A confirmation message is displayed before deletion:

```text
Are you sure you want to delete this note?
```

---

### 🔢 Notes Counter

The application dynamically displays the number of saved notes.

Example:

```text
0 Notes
1 Note
5 Notes
```

---

### ⌨️ Keyboard Shortcut

A note can also be added using:

```text
Ctrl + Enter
```

---

### 📭 Empty State

When no notes exist, the application displays:

```text
No notes yet
Add your first note using the box above.
```

---

## 🔄 Application Flow

```text
Write Note
    ↓
Add Note
    ↓
Create JavaScript Object
    ↓
JSON.stringify()
    ↓
LocalStorage
    ↓
JSON.parse()
    ↓
Render Notes
    ↓
Edit / Delete
    ↓
Update LocalStorage
```

---

## 📂 Project Structure

```text
Assignment_1/
│
├── index.html
├── style.css
├── script.js
├── Question.txt
└── README.md
```

---

## 🚀 How to Run

### Option 1 — Browser

Open:

```text
index.html
```

in a web browser.

### Option 2 — VS Code Live Server

Right-click:

```text
index.html
```

and select:

```text
Open with Live Server
```

---

# 🌐 Live Demo

This is a frontend-only HTML/CSS/JavaScript application, so it can run directly through GitHub Pages.

🚀 [Open Notes App](https://kanak-source.github.io/BackendDeveplopmentUPES/Theory%20Assignment/Assignment_1/)

---

## 🧪 Testing LocalStorage

1. Add a note.
2. Refresh the webpage.
3. Verify that the note is still present.
4. Edit the note and refresh again.
5. Verify that the edited text remains.
6. Delete the note and refresh.
7. Verify that the deleted note does not return.

LocalStorage can also be inspected using:

```text
F12
→ Application
→ Local Storage
```

Look for the key:

```text
notes
```

---

## 📚 Concepts Demonstrated

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- Event Listeners
- LocalStorage
- Web Storage API
- JSON
- `JSON.stringify()`
- `JSON.parse()`
- JavaScript Arrays
- JavaScript Objects
- `find()`
- `filter()`
- `forEach()`
- Spread Operator
- Date & Time
- CRUD Operations
- Responsive Web Design

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

> **Theory Assignment 1:** A browser-based Notes App demonstrating LocalStorage, JSON, DOM manipulation, and persistent client-side data storage.