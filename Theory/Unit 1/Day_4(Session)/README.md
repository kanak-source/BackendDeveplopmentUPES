# 📖 Theory — Unit 1, Day 4: Session Management in Express.js

## 📌 Overview

This implementation demonstrates **session management using Express.js and `express-session`**.

The application creates a session during login, stores a username in the session, accesses the session data on a profile page, and destroys the session during logout.

---

## 🎯 Objective

To understand:

- Express Sessions
- Creating session variables
- Accessing session data
- Session expiration
- Destroying sessions
- Basic login/profile/logout flow

---

## 💻 Technologies Used

- Node.js
- Express.js
- JavaScript
- `express-session`

---

## 🔐 Session Configuration

```javascript
app.use(
    session({
        secret: 'mySecretKey',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000
        }
    })
);
```

The session cookie has a lifetime of:

```text
60000 milliseconds = 1 minute
```

---

## 🔑 Login — Create Session

### Route

```http
GET /login
```

The username is stored in the session:

```javascript
req.session.username = 'JohnDoe';
```

Response:

```text
Session started for JohnDoe
```

---

## 👤 Profile — Access Session

### Route

```http
GET /profile
```

The application checks:

```javascript
if (req.session.username)
```

If the session exists:

```text
Welcome JohnDoe
```

Otherwise:

```text
Please log in first.
```

---

## 🚪 Logout — Destroy Session

### Route

```http
GET /logout
```

The session is destroyed using:

```javascript
req.session.destroy()
```

After successful destruction:

```text
Session destroyed successfully
```

---

## 🔄 Application Flow

```text
/login
   ↓
Create Session
   ↓
Store username
   ↓
/profile
   ↓
Read Session Data
   ↓
/logout
   ↓
Destroy Session
```

---

## 🛣️ Routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/login` | Create session |
| GET | `/profile` | Access session data |
| GET | `/logout` | Destroy session |

---

## 📂 Project Structure

```text
Day_4(Session)/
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

Run the application:

```bash
node app.js
```

Then test in this order:

```text
http://localhost:3000/login
http://localhost:3000/profile
http://localhost:3000/logout
http://localhost:3000/profile
```

After logout, `/profile` should display:

```text
Please log in first.
```

---

## 📚 Concepts Demonstrated

- Express.js
- `express-session`
- Session middleware
- `req.session`
- Session variables
- Session cookies
- Cookie expiration
- `req.session.destroy()`
- Basic session-based authentication flow

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

> **Theory — Unit 1, Day 4:** Demonstration of creating, accessing, expiring, and destroying sessions using Express.js.