# 🧪 Experiment 12B — Day 2: Session & Cookie Login Demo

## 📌 Experiment Overview

This experiment demonstrates how **sessions and cookies can be used together in an Express.js application**.

A simple login/logout system is implemented where the username is stored in the session, while a separate preference cookie is created in the browser.

---

## 🎯 Objective

The objective of this experiment is to understand:

- Express.js sessions
- Cookies
- Session middleware
- Cookie expiration
- Handling HTML form data
- Login using sessions
- Maintaining user state
- Logout and session destruction
- HTTP redirects
- Session cookies
- `httpOnly` cookies

---

## 💻 Technologies Used

- Node.js
- Express.js
- JavaScript
- `express-session`
- `cookie-parser`
- HTML Forms

---

# 📦 Required Packages

The application uses three main packages:

```javascript
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
```

Install them using:

```bash
npm install express express-session cookie-parser
```

---

# ⚙️ Express Application Setup

The application is created using:

```javascript
const app = express();
const PORT = 3000;
```

The server runs on:

```text
http://localhost:3000
```

---

# 🍪 Cookie Parser Middleware

Cookie parsing is enabled using:

```javascript
app.use(cookieParser());
```

This allows the Express application to work with cookies.

---

# 📝 Form Data Middleware

The application uses:

```javascript
app.use(express.urlencoded({ extended: true }));
```

This allows Express to read data submitted through an HTML form.

For example:

```html
<input type="text" name="username">
```

can later be accessed using:

```javascript
req.body.username
```

---

# 🔐 Session Configuration

Sessions are configured using:

```javascript
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));
```

---

## Session Options

### `secret`

```javascript
secret: 'mysecretkey'
```

Used to sign the session ID cookie.

---

### `resave`

```javascript
resave: false
```

Prevents an unchanged session from being saved again unnecessarily.

---

### `saveUninitialized`

```javascript
saveUninitialized: true
```

Allows a newly created session to be saved.

---

### `maxAge`

```javascript
cookie: {
    maxAge: 60000
}
```

The session cookie expires after:

```text
60,000 milliseconds = 1 minute
```

---

# 🏠 Home Route

### Endpoint

```http
GET /
```

The application first checks whether a username exists in the session:

```javascript
if (req.session.username)
```

If the user is already logged in, the server displays:

```text
Welcome back, username!
Logout
```

---

## Logged-In User

The response is generated using:

```javascript
res.send(
    `Welcome back, ${req.session.username}!
    <a href="/logout">Logout</a>`
);
```

This demonstrates how session data can be used across multiple HTTP requests.

---

# 📝 Login Form

If there is no username stored in the session, the application displays a login form:

```html
<form action="/login" method="post">

    <input
        type="text"
        name="username"
        placeholder="Enter username"
    />

    <button type="submit">
        Login
    </button>

</form>
```

The form sends a:

```http
POST /login
```

request.

---

# 🔑 Login Route

### Endpoint

```http
POST /login
```

The username is obtained from the submitted form:

```javascript
const { username } = req.body;
```

The username is then stored inside the session:

```javascript
req.session.username = username;
```

---

# 🍪 Creating a Cookie During Login

The login route also creates a sample cookie:

```javascript
res.cookie(
    'theme',
    'dark',
    {
        maxAge: 900000,
        httpOnly: true
    }
);
```

The cookie contains:

```text
Name  : theme
Value : dark
```

Its lifetime is:

```text
900000 milliseconds = 15 minutes
```

---

# 🔒 HTTP-Only Cookie

The cookie uses:

```javascript
httpOnly: true
```

This prevents normal client-side JavaScript from accessing that cookie.

The browser can still send the cookie with applicable HTTP requests.

---

# 🔄 Redirect After Login

After storing the username and setting the cookie, the server executes:

```javascript
res.redirect('/');
```

The browser returns to the home route.

Because:

```javascript
req.session.username
```

now exists, the application displays the welcome message instead of the login form.

---

# 🚪 Logout Route

### Endpoint

```http
GET /logout
```

The application destroys the current session:

```javascript
req.session.destroy(() => {
```

It then clears the session cookie:

```javascript
res.clearCookie('connect.sid');
```

Finally, the browser is redirected back to:

```text
/
```

using:

```javascript
res.redirect('/');
```

The login form is displayed again.

---

# 🔄 Complete Application Flow

```text
User opens /
      │
      ▼
Is req.session.username available?
      │
   ┌──┴───┐
   │      │
   NO    YES
   │      │
   ▼      ▼
Login    Welcome Back
Form     + Logout Link
   │
   │ Enter username
   ▼
POST /login
   │
   ├── Store username in session
   │
   ├── Set theme cookie
   │
   └── Redirect to /
             │
             ▼
       Welcome Back
             │
             │ Logout
             ▼
         /logout
             │
             ├── Destroy session
             ├── Clear connect.sid
             └── Redirect to /
                         │
                         ▼
                     Login Form
```

---

# 🍪 Cookies Used

The application works with two relevant cookies.

| Cookie | Purpose | Lifetime |
|---|---|---|
| `connect.sid` | Identifies the Express session | 1 minute |
| `theme` | Demonstration preference cookie | 15 minutes |

---

# 🛣️ Routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Display login form or welcome message |
| POST | `/login` | Store username in session and set cookie |
| GET | `/logout` | Destroy session and logout |

---

# 📂 Project Structure

```text
Day_2 (session-cookie-demo)/
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 How to Run

## Step 1 — Open the Folder

Open:

```text
Day_2 (session-cookie-demo)
```

in the terminal.

---

## Step 2 — Install Dependencies

```bash
npm install
```

If the dependencies are not already listed in `package.json`, install them using:

```bash
npm install express express-session cookie-parser
```

---

## Step 3 — Start the Server

```bash
node app.js
```

The terminal should display:

```text
Server running at http://localhost:3000
```

---

## Step 4 — Open the Application

Open:

```text
http://localhost:3000
```

---

# 🧪 Testing

### Test Login

1. Open the homepage.
2. Enter a username.
3. Click **Login**.
4. The page should display:

```text
Welcome back, <username>!
```

---

### Test Session

Refresh the page.

The username should still be available while the session remains valid.

---

### Test Logout

Click:

```text
Logout
```

The session should be destroyed and the login form should appear again.

---

### Inspect Cookies

Open browser Developer Tools:

```text
F12
```

Then go to:

```text
Application
    ↓
Storage
    ↓
Cookies
    ↓
http://localhost:3000
```

You can inspect cookies such as:

```text
connect.sid
theme
```

---

# 📚 Concepts Demonstrated

- Express.js
- Express middleware
- Cookies
- `cookie-parser`
- Sessions
- `express-session`
- Session configuration
- Session ID cookies
- `req.session`
- `req.session.username`
- `req.body`
- HTML forms
- POST requests
- `express.urlencoded()`
- `res.cookie()`
- `httpOnly`
- Cookie expiration
- `res.redirect()`
- `req.session.destroy()`
- `res.clearCookie()`
- Login/logout flow
- Maintaining state between HTTP requests

---

# 🌐 Hosting Note

This experiment requires a running **Node.js/Express server**.

Therefore, the actual login/session application cannot run directly through GitHub Pages. GitHub Pages can display the documentation and source code, while the Express application must be run locally or deployed on a Node.js-compatible hosting platform.

---

# 🧭 Navigation

⬅️ [Back to Experiment 12B](../README.md)

🧪 [Back to Lab Experiments](../../README.md)

🏠 [Back to Main Repository](../../../README.md)

---

## 👩‍💻 Submitted By

**Kanak Shree**  
**SAP ID:** 590019239  
**Course:** Backend Development  
**University:** UPES

---

> **Experiment 12B — Day 2:** Implementation of a simple login/logout system using Express sessions and cookies to demonstrate state management across HTTP requests.