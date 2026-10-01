# 📖 Theory — Unit 1, Day 2: Flask REST API

## 📌 Overview

This implementation demonstrates a basic **Student Management REST API using Python and Flask**.

The application stores sample student data and provides API endpoints to retrieve all students or find a particular student using their ID.

---

## 🎯 Objective

To understand:

- Flask application setup
- REST API basics
- Flask routing
- JSON responses
- Dynamic URL parameters
- Searching data by ID
- HTTP status codes
- Error handling

---

## 💻 Technologies Used

- Python
- Flask
- JSON
- REST API

---

## 📊 Student Data

The application uses sample student data:

```python
students = [
    {"id": 1, "name": "Aarav", "branch": "CSE"},
    {"id": 2, "name": "Diya", "branch": "ECE"},
    {"id": 3, "name": "Rohan", "branch": "IT"}
]
```

Each student contains:

- ID
- Name
- Branch

---

## 🛣️ API Endpoints

### Home

```http
GET /
```

Response:

```text
Student Management API
```

---

### Get All Students

```http
GET /students
```

Returns all students as JSON using:

```python
jsonify(students)
```

---

### Get Student by ID

```http
GET /students/<student_id>
```

Example:

```text
/students/2
```

Response:

```json
{
    "id": 2,
    "name": "Diya",
    "branch": "ECE"
}
```

If the student does not exist:

```json
{
    "error": "Student not found"
}
```

with HTTP status:

```text
404 Not Found
```

---

## 🔄 API Flow

```text
Client Request
      ↓
Flask Route
      ↓
Student Data
      ↓
jsonify()
      ↓
JSON Response
```

---

## 📂 Project Structure

```text
Day_2 (backend project)/
│
├── app.py
└── README.md
```

---

## 🚀 How to Run

Install Flask:

```bash
pip install flask
```

Run the application:

```bash
python app.py
```

Then open:

```text
http://127.0.0.1:5000
```

Test:

```text
http://127.0.0.1:5000/students
```

or:

```text
http://127.0.0.1:5000/students/1
```

---

## 📚 Concepts Demonstrated

- Flask
- REST API
- `Flask(__name__)`
- `@app.route()`
- `jsonify()`
- GET requests
- URL parameters
- Python lists
- Python dictionaries
- Searching records
- JSON responses
- HTTP `404` status
- Basic API error handling

---

## 🌐 Hosting Note

This project requires a running **Python Flask server**, so the API cannot run directly through GitHub Pages.

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

> **Theory — Unit 1, Day 2:** Implementation of a basic Student Management REST API using Python and Flask.