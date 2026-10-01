# 🧪 Experiment 5 — JavaScript Fundamentals

## 📌 Experiment Overview

This experiment demonstrates the fundamentals of **JavaScript** using arrays, objects, functions, string methods, and basic data manipulation operations.

The output of the JavaScript program is displayed in the **browser console**.

---

## 🎯 Objective

The objective of this experiment is to understand and implement basic JavaScript concepts, including:

- Arrays
- Objects
- Functions
- String methods
- Array operations
- Object operations
- Console output

---

## 💻 Technologies Used

- HTML5
- JavaScript
- Browser Developer Console

---

# ✨ Concepts Implemented

## 1. JavaScript Arrays

An array of fruits is created:

```javascript
const fruits = ['Apple', 'Banana', 'Mango'];
```

The `push()` method is used to add a new element:

```javascript
fruits.push('Orange');
```

Result:

```text
Apple, Banana, Mango, Orange
```

---

## 2. JavaScript Objects

A student object is created containing multiple properties:

```javascript
const student = {
    name: 'John Doe',
    age: 20,
    course: 'Backend Development'
};
```

Individual object properties are accessed using dot notation:

```javascript
student.name
```

---

## 3. JavaScript Functions

A function named `greet()` is created:

```javascript
function greet(name) {
    return `Hello, ${name}! Welcome to Backend Development Lab.`;
}
```

The function accepts a name as an argument and returns a greeting message.

Example:

```javascript
greet('Student');
```

Output:

```text
Hello, Student! Welcome to Backend Development Lab.
```

---

# 🔤 String Methods

The experiment demonstrates commonly used JavaScript string methods.

Original string:

```javascript
const str = "Backend Development";
```

### `toUpperCase()`

Converts the complete string to uppercase.

```javascript
str.toUpperCase();
```

Output:

```text
BACKEND DEVELOPMENT
```

### `toLowerCase()`

Converts the complete string to lowercase.

```javascript
str.toLowerCase();
```

Output:

```text
backend development
```

### `split()`

Splits a string into an array using the specified delimiter.

```javascript
const words = str.split(" ");
```

Output:

```javascript
["Backend", "Development"]
```

---

# 📦 Array Operations

The experiment also demonstrates basic operations on an array.

Initial array:

```javascript
let items = ['Node', 'Express'];
```

## ➕ Add

The `push()` method adds an element to the end of the array.

```javascript
items.push('MongoDB');
```

Result:

```javascript
['Node', 'Express', 'MongoDB']
```

## 👀 Read

An array element is accessed using its index:

```javascript
items[0];
```

Output:

```text
Node
```

## ✏️ Update

An existing array element is changed using its index:

```javascript
items[0] = 'Node.js';
```

Updated array:

```javascript
['Node.js', 'Express', 'MongoDB']
```

---

# 👤 Object Operations

The experiment demonstrates basic operations on JavaScript objects.

Initial object:

```javascript
let user = {
    name: "John",
    role: "Dev"
};
```

## ➕ Add

A new property is added:

```javascript
user.age = 25;
```

The object becomes:

```javascript
{
    name: "John",
    role: "Dev",
    age: 25
}
```

## 👀 Read

An object property is accessed using dot notation:

```javascript
user.name;
```

Output:

```text
John
```

## ✏️ Update

An existing object property is modified:

```javascript
user.role = "Senior Dev";
```

The updated object becomes:

```javascript
{
    name: "John",
    role: "Senior Dev",
    age: 25
}
```

---

# 🖥️ Console Output

The experiment uses:

```javascript
console.log();
```

to display the results of different JavaScript operations.

To view the output:

1. Open the webpage in a browser.
2. Press **F12** or **Ctrl + Shift + I**.
3. Select the **Console** tab.
4. Observe the JavaScript output.

---

# 📂 Project Structure

```text
Experiment_5/
│
├── index.html
├── script.js
└── README.md
```

---

# ▶️ How to Run

### Step 1

Open the `Experiment_5` folder in VS Code.

### Step 2

Open:

```text
index.html
```

using a browser or **Live Server**.

### Step 3

Open Browser Developer Tools:

```text
F12
```

### Step 4

Go to:

```text
Console
```

The output of all JavaScript operations will be displayed there.

---

# 🌐 Live Demo

This experiment uses frontend HTML and JavaScript, so it can run directly through GitHub Pages.

🚀 [Open Live Experiment](https://kanak-source.github.io/BackendDeveplopmentUPES/lab/Experiment_5/)

> Open the browser developer console after opening the live experiment to view the JavaScript results.

---

# 📚 Concepts Demonstrated

- JavaScript variables
- Arrays
- Array indexing
- `push()`
- Objects
- Object properties
- Dot notation
- Functions
- Function parameters
- Return values
- Template literals
- String methods
- `toUpperCase()`
- `toLowerCase()`
- `split()`
- Add operations
- Read operations
- Update operations
- `console.log()`

---

# 🧭 Navigation

⬅️ [Back to Lab Experiments](../README.md)

🏠 [Back to Main Repository](../../README.md)

---

## 👩‍💻 Submitted By

**Kanak Shree**  
**SAP ID:** 590019239  
**Course:** Backend Development  
**University:** UPES

---

> **Experiment 5:** Demonstration of JavaScript fundamentals using arrays, objects, functions, string methods, and basic data manipulation.