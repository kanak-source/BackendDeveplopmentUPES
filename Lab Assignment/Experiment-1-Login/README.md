# 🧪 Lab Assignment 1 — User Login System

## 📌 Overview

This assignment implements a **simple user registration and login system using Node.js, Express.js, and Express Sessions**.

Users can register, log in, access a protected dashboard, and log out. Authentication is maintained using sessions.

---

## 🎯 Objective

To understand and implement:

- User registration
- User login
- Express sessions
- Authentication middleware
- Protected routes
- Login/logout functionality
- Form data handling
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

### 📝 User Registration

Users can create an account using:

```text
/register
```

The application checks whether the username already exists before registering the user.

---

### 🔐 User Login

Registered users can log in through:

```text
/login
```

The application verifies the entered username and password.

After successful login, user information is stored in the session:

```javascript
req.session.user = {
    username: username
};
```

---

### 🛡️ Protected Dashboard

The dashboard is available at:

```text
/dashboard
```

It is protected using authentication middleware:

```javascript
function authMiddleware(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect("/login");
    }
}
```

Users who are not logged in are automatically redirected to the login page.

---

### 🚪 Logout

The logout route destroys the current session:

```javascript
req.session.destroy(() => {
    res.redirect("/login");
});
```

---

## 🔄 Application Flow

```text
Home
 │
 ├── Register
 │      ↓
 │   Create User
 │      ↓
 └── Login
        ↓
   Verify Credentials
        ↓
   Create Session
        ↓
     Dashboard
        ↓
      Logout
        ↓
   Destroy Session
```

---

## 🛣️ Routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Home page |
| GET | `/register` | Registration form |
| POST | `/register` | Register user |
| GET | `/login` | Login form |
| POST | `/login` | Authenticate user |
| GET | `/dashboard` | Protected dashboard |
| GET | `/logout` | Destroy session and logout |

---

## 📂 Project Structure

```text
Experiment-1-Login/
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
http://localhost:3001
```

---

## 📚 Concepts Demonstrated

- Express.js routing
- GET and POST requests
- HTML forms
- `express.urlencoded()`
- `express-session`
- `req.body`
- `req.session`
- Authentication middleware
- Protected routes
- `res.redirect()`
- Session destruction
- Login/logout flow

---

## ⚠️ Note

This assignment uses a temporary in-memory array:

```javascript
const users = [];
```

Therefore, registered users are lost whenever the server restarts.

Passwords are also stored directly for demonstration purposes. A real application should use a database and securely hash passwords.

---

## 🌐 Hosting Note

This project requires a running **Node.js/Express server**, so it cannot run directly through GitHub Pages.

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

> **Lab Assignment 1:** Implementation of a simple session-based user registration, login, protected dashboard, and logout system using Express.js.