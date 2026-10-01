# 🧪 Experiment 12B — Day 1: Cookies & Sessions in Express.js

## 📌 Experiment Overview

This experiment demonstrates how **cookies and sessions** can be used in an Express.js application to maintain information between multiple HTTP requests.

Two implementations are included:

1. Cookie handling using `cookie-parser`
2. Session handling using `express-session`

---

## 🎯 Objective

The objective of this experiment is to understand:

- What cookies are
- How to create cookies
- How to retrieve cookies
- How to delete cookies
- What sessions are
- How to create and use Express sessions
- How session data persists across requests
- How to destroy a session
- Basic state management in Express.js

---

# 💻 Technologies Used

- Node.js
- Express.js
- JavaScript
- `cookie-parser`
- `express-session`

---

# 🍪 Part 1 — Cookies

Cookies are small pieces of data stored by the browser and sent with applicable HTTP requests.

In this experiment, the `cookie-parser` package is used to read cookies in Express.

---

## 📦 Importing Cookie Parser

```javascript
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
```

The middleware:

```javascript
app.use(cookieParser());
```

allows cookies to be accessed through:

```javascript
req.cookies
```

---

# 1. Setting a Cookie

### Route

```http
GET /set-cookie
```

The cookie is created using:

```javascript
res.cookie('username', 'JohnDoe', {
    maxAge: 900000
});
```

This creates a cookie named:

```text
username
```

with the value:

```text
JohnDoe
```

The `maxAge` is specified in milliseconds.

```text
900000 ms = 15 minutes
```

### Response

```text
Cookie has been set
```

---

# 2. Retrieving a Cookie

### Route

```http
GET /get-cookie
```

The cookie is retrieved using:

```javascript
const user = req.cookies['username'];
```

The server then returns:

```text
Cookie Retrieved: JohnDoe
```

This demonstrates how the server can access cookie information sent by the browser.

---

# 3. Deleting a Cookie

### Route

```http
GET /delete-cookie
```

The cookie is removed using:

```javascript
res.clearCookie('username');
```

### Response

```text
Cookie deleted
```

---

# 🍪 Cookie Flow

```text
Browser
   │
   │ GET /set-cookie
   ▼
Express Server
   │
   │ Set-Cookie: username=JohnDoe
   ▼
Browser stores cookie
   │
   │ GET /get-cookie
   │ Cookie: username=JohnDoe
   ▼
Express Server
   │
   ▼
Cookie Retrieved: JohnDoe
```

---

# 🔐 Part 2 — Sessions

The second part of the experiment demonstrates **sessions using Express.js**.

The package used is:

```text
express-session
```

---

## 📦 Session Configuration

```javascript
const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true
}));
```

---

# ⚙️ Session Options

### `secret`

```javascript
secret: 'mysecretkey'
```

Used by `express-session` when signing the session ID cookie.

### `resave`

```javascript
resave: false
```

Prevents unnecessarily saving an unchanged session back to the session store.

### `saveUninitialized`

```javascript
saveUninitialized: true
```

Allows a newly created but unmodified session to be saved.

---

# 👀 Session Visit Counter

The root route demonstrates how information can be stored in a session.

### Route

```http
GET /
```

The program checks:

```javascript
if (req.session.views)
```

If the session already contains a `views` value, it increments it:

```javascript
req.session.views++;
```

and displays:

```text
Welcome back! You visited 2 times.
```

Refreshing again could display:

```text
Welcome back! You visited 3 times.
```

---

## First Visit

If `views` does not exist:

```javascript
req.session.views = 1;
```

The user receives:

```text
Welcome to the session demo. Refresh to count visits.
```

This demonstrates that session data can be retained between requests from the same session.

---

# 💥 Destroying the Session

The application also provides a route for destroying the current session.

### Route

```http
GET /destroy
```

The session is destroyed using:

```javascript
req.session.destroy(err => {

    if (err) {
        return res.send('Error destroying session');
    }

    res.send('Session destroyed');
});
```

After destroying the session, visiting the root route again starts a new session and resets the visit-count behavior.

---

# 🔄 Session Flow

```text
First Request
      │
      ▼
Express Server
      │
      ▼
Create Session
      │
      ▼
req.session.views = 1

      ↓ Refresh

Next Request
      │
      ▼
Existing Session
      │
      ▼
req.session.views++
      │
      ▼
Visit count increases
```

---

# 🍪 Cookies vs Sessions

| Feature | Cookies | Sessions |
|---|---|---|
| Main data location | Browser/client | Server-side session store |
| Browser involvement | Stores cookie data | Usually stores a session ID cookie |
| Access in this experiment | `req.cookies` | `req.session` |
| Set using | `res.cookie()` | Session middleware/data |
| Delete/end using | `res.clearCookie()` | `req.session.destroy()` |
| Example in this experiment | Username | Visit counter |

---

# 🛣️ Routes Used

## Cookie Application

| Method | Route | Purpose |
|---|---|---|
| GET | `/set-cookie` | Create username cookie |
| GET | `/get-cookie` | Retrieve username cookie |
| GET | `/delete-cookie` | Delete username cookie |

## Session Application

| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Create/read session and count visits |
| GET | `/destroy` | Destroy current session |

---

# 📂 Suggested Project Structure

Since your Day 1 contains two separate Express applications, keep them as separate files or folders.

```text
Day_1 (Source)/
│
├── cookie-demo/
│   ├── app.js
│   ├── package.json
│   └── package-lock.json
│
├── session-demo/
│   ├── app.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

> The cookie and session code should not be placed together unchanged in one `app.js`, because both snippets create `const app = express()` and both attempt to listen on port `3000`.

---

# 🚀 How to Run

## Cookie Demo

Install dependencies:

```bash
npm install express cookie-parser
```

Run:

```bash
node app.js
```

Then test:

```text
http://localhost:3000/set-cookie
http://localhost:3000/get-cookie
http://localhost:3000/delete-cookie
```

---

## Session Demo

Install dependencies:

```bash
npm install express express-session
```

Run:

```bash
node app.js
```

Open:

```text
http://localhost:3000/
```

Refresh the page several times to observe the session visit counter.

To destroy the session:

```text
http://localhost:3000/destroy
```

Then return to:

```text
http://localhost:3000/
```

---

# 📚 Concepts Demonstrated

- Express.js
- HTTP cookies
- `cookie-parser`
- `res.cookie()`
- `req.cookies`
- `res.clearCookie()`
- Express sessions
- `express-session`
- Session middleware
- `req.session`
- Session persistence across requests
- Session visit counter
- `req.session.destroy()`
- Basic state management

---

# 🌐 Hosting Note

This experiment requires a running **Node.js/Express server**, so the actual cookie/session application cannot run directly on GitHub Pages.

GitHub Pages can display the README and source code, while the application itself must be run locally or deployed to a Node.js-compatible hosting service.

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

> **Experiment 12B — Day 1:** Implementation of cookies and sessions in Express.js for maintaining state across HTTP requests.