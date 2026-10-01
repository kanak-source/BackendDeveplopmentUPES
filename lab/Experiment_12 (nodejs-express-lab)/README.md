# 🧪 Experiment 12 — Node.js, Express.js & EJS

## 📌 Experiment Overview

This experiment demonstrates the fundamentals of **backend web development using Node.js and Express.js**.

The application implements multiple Express routes, different response formats, route parameters, query parameters, POST requests, request body handling, status codes, and **server-side rendering using EJS**.

---

## 🎯 Objective

The objective of this experiment is to understand and implement:

- Node.js server-side development
- Express.js server creation
- GET routes
- POST routes
- Plain text responses
- HTML responses
- JSON responses
- HTTP status codes
- Route parameters
- Query parameters
- Request body handling
- Basic login and registration endpoints
- EJS template engine
- Server-Side Rendering (SSR)
- Passing backend data to frontend templates

---

# 💻 Technologies Used

- Node.js
- Express.js
- EJS
- HTML5
- CSS3
- JavaScript
- REST-style HTTP routes

---

# ⚙️ Express Server

The Express application is created using:

```javascript
const express = require('express');
const app = express();

const PORT = 3000;
```

The server runs on:

```text
http://localhost:3000
```

---

# 🛣️ Express Routes

The application contains several routes demonstrating different backend concepts.

---

## 1. Home Route

### Endpoint

```http
GET /
```

### Response

```text
Welcome to Express!
```

This demonstrates a basic Express route using:

```javascript
res.send()
```

---

## 2. Plain Text Response

### Endpoint

```http
GET /text
```

Returns:

```text
This is plain text response
```

This demonstrates sending a simple text response from an Express server.

---

## 3. HTML Response

### Endpoint

```http
GET /html
```

The server directly returns HTML content:

```html
<h1>HTML Response</h1>
<p>This is HTML content</p>
```

---

## 4. JSON Response

### Endpoint

```http
GET /json
```

Returns a JSON object containing:

```json
{
    "message": "This is JSON response",
    "status": "success",
    "data": {
        "name": "Student",
        "course": "Backend Development"
    }
}
```

This demonstrates:

```javascript
res.json()
```

---

# 📡 HTTP Status Codes

The `/status` endpoint demonstrates how Express can return a custom HTTP status code.

### Endpoint

```http
GET /status
```

The server returns:

```text
201 Created
```

with:

```json
{
    "message": "Created successfully"
}
```

Implemented using:

```javascript
res.status(201).json(...)
```

---

# 🔗 Route Parameters

Express route parameters are used to capture values directly from the URL.

---

## User Route

### Example

```text
/user/5
```

Route:

```javascript
app.get('/user/:id', ...)
```

The value can be accessed using:

```javascript
req.params.id
```

Example response:

```json
{
    "message": "User details",
    "userId": "5"
}
```

---

## Product Route

The application also demonstrates multiple route parameters.

### Example

```text
/product/electronics/101
```

Route:

```javascript
/product/:category/:id
```

Example response:

```json
{
    "category": "electronics",
    "productId": "101"
}
```

---

# 🔍 Query Parameters

The application demonstrates retrieving query parameters using:

```javascript
req.query
```

---

## Search Endpoint

### Example

```text
/search?q=node&page=2&limit=5
```

The server reads:

```javascript
const { q, page, limit } = req.query;
```

and returns the search information as JSON.

If `page` and `limit` are not supplied, the application uses:

```text
page = 1
limit = 10
```

---

# 🧮 Calculator Endpoint

A calculator is implemented using query parameters.

### Endpoint

```text
/calculate
```

### Example

```text
/calculate?num1=10&num2=5&operation=add
```

Supported operations are:

- `add`
- `subtract`
- `multiply`
- `divide`

Example result:

```json
{
    "num1": 10,
    "num2": 5,
    "operation": "add",
    "result": 15
}
```

The application also handles division by zero and invalid operations.

---

# 📥 Request Body Handling

The following middleware is used:

```javascript
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

### `express.json()`

Allows the server to read JSON request bodies.

### `express.urlencoded()`

Allows the server to process URL-encoded form data.

---

# 📝 Registration Endpoint

The application contains a POST endpoint for registration.

### Endpoint

```http
POST /register
```

Expected request body:

```json
{
    "username": "kanak",
    "email": "example@email.com",
    "password": "password"
}
```

The server returns a successful registration response containing the username and email.

---

# 🔐 Login Endpoint

A simple demonstration login route is also implemented.

### Endpoint

```http
POST /login
```

The route checks the supplied email and password.

For valid demonstration credentials, the response contains:

```json
{
    "success": true,
    "message": "Login successful",
    "token": "sample-jwt-token"
}
```

For incorrect credentials, the server returns:

```text
401 Unauthorized
```

with:

```json
{
    "success": false,
    "message": "Invalid credentials"
}
```

> This login system is for learning purposes and uses hard-coded demonstration credentials rather than a real authentication database.

---

# 🖥️ EJS — Server-Side Rendering

The application uses **EJS (Embedded JavaScript)** as its view engine.

EJS is configured using:

```javascript
app.set('view engine', 'ejs');
app.set('views', './views');
```

This allows Express to dynamically generate HTML pages on the server.

---

# 🏠 Dynamic Home Page

### Endpoint

```http
GET /home
```

The backend renders:

```text
home.ejs
```

and passes:

```javascript
{
    title: 'Home Page',
    heading: 'Welcome to EJS Templating',
    message: 'EJS makes it easy to generate dynamic HTML'
}
```

Inside EJS, values are displayed using:

```ejs
<%= title %>
<%= heading %>
<%= message %>
```

The page also dynamically displays the current time.

---

# 👥 Users List

### Endpoint

```http
GET /users
```

The backend creates an array of users:

```javascript
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
];
```

The data is sent to:

```text
users.ejs
```

---

## EJS Loop

The template uses:

```ejs
<% users.forEach(function(user) { %>

    <tr>
        <td><%= user.id %></td>
        <td><%= user.name %></td>
        <td><%= user.email %></td>
    </tr>

<% }); %>
```

This demonstrates how EJS can loop through backend data and dynamically generate HTML.

---

## Conditional Rendering

The template also contains:

```ejs
<% if (users.length === 0) { %>
    <p>No users found.</p>
<% } %>
```

This demonstrates conditional rendering in EJS.

---

# 👤 Dynamic User Profile

### Endpoint

```text
/profile/:id
```

Example:

```text
/profile/1
```

The route retrieves the ID using:

```javascript
req.params.id
```

and creates a user object containing:

- ID
- Name
- Email
- Age
- City

The object is passed to:

```text
profile.ejs
```

---

## Displaying Object Data in EJS

The profile page accesses object properties using:

```ejs
<%= user.name %>
<%= user.email %>
<%= user.age %>
<%= user.city %>
```

This demonstrates passing a complete JavaScript object from the Express backend to an EJS view.

---

# 🔄 Backend → EJS Flow

The server-side rendering process can be understood as:

```text
Browser
   │
   │ HTTP Request
   ▼
Express Route
   │
   │ Creates / retrieves data
   ▼
res.render()
   │
   │ Passes JavaScript data
   ▼
EJS Template
   │
   │ Generates HTML
   ▼
Browser receives HTML
```

---

# 📂 Project Structure

```text
Experiment_12 (nodejs-express-lab)/
│
├── views/
│   ├── home.ejs
│   ├── users.ejs
│   └── profile.ejs
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 How to Run

## 1. Open the Experiment Folder

```bash
cd "Experiment_12 (nodejs-express-lab)"
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Start the Server

```bash
node app.js
```

## 4. Open the Browser

```text
http://localhost:3000
```

---

# 🧪 Routes to Test

After starting the server, test:

| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Basic Express response |
| GET | `/text` | Plain text response |
| GET | `/html` | HTML response |
| GET | `/json` | JSON response |
| GET | `/status` | HTTP status code |
| GET | `/user/:id` | Route parameter |
| GET | `/product/:category/:id` | Multiple route parameters |
| GET | `/search?q=node&page=1&limit=10` | Query parameters |
| GET | `/calculate?num1=10&num2=5&operation=add` | Calculator |
| POST | `/register` | Registration request |
| POST | `/login` | Login request |
| GET | `/home` | EJS dynamic homepage |
| GET | `/users` | EJS users list |
| GET | `/profile/:id` | EJS user profile |

---

# 📚 Concepts Demonstrated

- Node.js
- Express.js
- Express server creation
- Routing
- GET requests
- POST requests
- `req.params`
- `req.query`
- `req.body`
- `res.send()`
- `res.json()`
- `res.status()`
- Express middleware
- JSON body parsing
- URL-encoded form parsing
- HTTP status codes
- EJS
- Server-Side Rendering
- Dynamic templates
- Passing objects to views
- Passing arrays to views
- EJS loops
- EJS conditions
- Dynamic route parameters

---

# 🌐 Hosting Note

This experiment requires a running **Node.js/Express server**.

Therefore, unlike static HTML/CSS/JavaScript experiments, the complete application cannot run directly through GitHub Pages.

GitHub Pages can be used to display this documentation and source-code links, while the Express application must be run locally or deployed to a Node.js-compatible hosting platform.

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

> **Experiment 12:** Implementation of Node.js and Express.js fundamentals with routing, request/response handling, route and query parameters, POST requests, and dynamic server-side rendering using EJS.