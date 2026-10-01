# 🧪 Experiment 13A — MongoDB Atlas & Mongoose

## 📌 Experiment Overview

This experiment demonstrates how to connect a **Node.js and Express.js application to MongoDB Atlas using Mongoose**.

A simple **User Management System** is implemented where users can register, log in, and view all registered users stored in MongoDB.

---

## 🎯 Objective

The objective of this experiment is to understand:

- MongoDB Atlas connectivity
- Mongoose
- Environment variables using `.env`
- Mongoose Schema and Model
- Saving data to MongoDB
- Retrieving data from MongoDB
- User registration
- User login
- Handling duplicate users
- Asynchronous database operations

---

## 💻 Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript
- HTML/CSS
- dotenv

---

# 🗄️ MongoDB Connection

The MongoDB connection string is stored securely inside an environment variable:

```javascript
require('dotenv').config();

const DB_URL = process.env.DB_URL;
```

The application connects using:

```javascript
mongoose.connect(DB_URL);
```

> The `.env` file should not be uploaded to GitHub because it may contain database credentials.

---

# 📋 User Schema

A Mongoose schema is created for storing users:

```javascript
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});
```

Each user contains:

| Field | Description |
|---|---|
| `username` | Unique username |
| `email` | Unique email address |
| `password` | User password |
| `createdAt` | Account creation date |

---

# 🧩 Mongoose Model

The schema is converted into a Mongoose model:

```javascript
const User = mongoose.model('User', userSchema);
```

The `User` model is then used to communicate with MongoDB.

---

# 🏠 Home Page

### Route

```http
GET /
```

The homepage contains three main sections:

- Register New User
- Login
- View All Users

---

# 📝 User Registration

### Route

```http
POST /signup
```

The submitted form data is obtained using:

```javascript
const {
    username,
    email,
    password
} = req.body;
```

A new user is created:

```javascript
const newUser = new User({
    username,
    email,
    password
});
```

and stored in MongoDB using:

```javascript
await newUser.save();
```

The application also handles duplicate usernames or email addresses.

---

# 🔐 User Login

### Route

```http
POST /login
```

The application searches MongoDB for the username:

```javascript
const user = await User.findOne({
    username: username
});
```

It then checks whether the entered password matches the stored password.

Possible responses include:

```text
Login successful!
```

```text
User not found
```

or:

```text
Incorrect password
```

> This experiment compares passwords directly for learning purposes. A production authentication system should store password hashes rather than plaintext passwords.

---

# 👥 View Registered Users

### Route

```http
GET /users
```

All users are retrieved using:

```javascript
const allUsers = await User.find();
```

The application displays each user's:

- Username
- Email
- Account creation date

---

# 🔄 Application Flow

```text
                    User
                      │
                      ▼
                Express Server
                      │
          ┌───────────┼───────────┐
          │           │           │
          ▼           ▼           ▼
       Signup       Login      View Users
          │           │           │
          ▼           ▼           ▼
     User.save()   findOne()     find()
          │           │           │
          └───────────┼───────────┘
                      ▼
                 Mongoose
                      │
                      ▼
                MongoDB Atlas
```

---

# 🛣️ Routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Display homepage |
| POST | `/signup` | Register a new user |
| POST | `/login` | Login existing user |
| GET | `/users` | Display registered users |

---

# 📂 Project Structure

```text
Experiment_13_A/
│
├── server.js
├── package.json
├── package-lock.json
├── .env
└── README.md
```

> `.env` should be included in `.gitignore` and should **not** be pushed to GitHub.

---

# 🚀 How to Run

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```text
DB_URL=your_mongodb_atlas_connection_string
```

Start the application:

```bash
node server.js
```

Then open:

```text
http://localhost:3000
```

---

# 📚 Concepts Demonstrated

- MongoDB Atlas
- Mongoose
- MongoDB connection
- Environment variables
- `.env`
- Mongoose Schema
- Mongoose Model
- `required`
- `unique`
- `new User()`
- `save()`
- `findOne()`
- `find()`
- Async/Await
- Express middleware
- Form handling
- User registration
- User login
- Database error handling

---

# 🌐 Hosting Note

This project requires both a **Node.js/Express server and MongoDB database connection**, so it cannot run directly through GitHub Pages.

GitHub Pages can display its documentation and source code, while the application itself must be deployed to a backend-compatible hosting platform to run online.

---

## 🧭 Navigation

⬅️ [Back to Lab Experiments](../README.md)

🏠 [Back to Main Repository](../../README.md)

---

### 👩‍💻 Submitted By

**Kanak Shree**  
**SAP ID:** 590019239  
**Course:** Backend Development  
**University:** UPES

---

> **Experiment 13A:** Implementation of a User Management System using Node.js, Express.js, MongoDB Atlas, and Mongoose.