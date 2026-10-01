# 📖 Theory — Unit 1, Day 5: Server-Side Rendering with FastAPI & Jinja2

## 📌 Overview

This implementation demonstrates **Server-Side Rendering (SSR)** using **FastAPI and Jinja2 Templates**.

Student data is stored in the Python backend and dynamically rendered into an HTML table using Jinja2.

---

## 🎯 Objective

To understand:

- Server-Side Rendering (SSR)
- FastAPI with HTML templates
- Jinja2 Templates
- Passing backend data to HTML
- Template variables
- Jinja2 loops
- Jinja2 conditions
- Jinja2 filters
- Dynamic HTML generation

---

## 💻 Technologies Used

- Python
- FastAPI
- Jinja2
- Uvicorn
- HTML5

---

## 📊 Student Data

The backend contains:

```python
students = [
    {"id": 1, "name": "Aarav", "branch": "CSE"},
    {"id": 2, "name": "Diya", "branch": "ECE"},
    {"id": 3, "name": "Rohan", "branch": "IT"},
]
```

---

## 🖥️ Server-Side Rendering

Jinja2 templates are configured using:

```python
templates = Jinja2Templates(directory="templates")
```

The FastAPI route sends the student data to the template:

```python
@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="students.html",
        context={
            "students": students
        }
    )
```

The backend passes the `students` collection to the HTML template, where Jinja2 dynamically generates the final webpage.

---

## 🔁 Jinja2 Loop

A **Jinja2 for-loop** is used to iterate through the students collection.

For every student, the template dynamically creates a table row containing:

- Student ID
- Student Name
- Student Branch

This avoids manually writing separate HTML rows for every student.

---

## 🔀 Conditional Rendering

Jinja2 conditional statements are used to check whether student data is available.

The template follows this logic:

```text
If number of students = 0
        ↓
Display "No students found"

Otherwise
        ↓
Display total students
        ↓
Generate student table
```

---

## 🔢 Jinja2 Length Filter

The Jinja2 `length` filter is used to calculate the total number of students.

For the sample data, the webpage displays:

```text
Total students: 3
```

---

## 🔄 Application Flow

```text
Browser Request
      ↓
FastAPI Route
      ↓
Student Data
      ↓
Jinja2 Template
      ↓
Loop + Condition + Variables
      ↓
Generated HTML
      ↓
Browser
```

---

## 📂 Project Structure

```text
Day_5(ssr-python)/
│
├── templates/
│   └── students.html
│
├── main.py
└── README.md
```

---

## 🚀 How to Run

Install the required packages:

```bash
pip install fastapi uvicorn jinja2
```

Run:

```bash
python main.py
```

Or:

```bash
uvicorn main:app --reload
```

Then open:

```text
http://127.0.0.1:8000
```

---

## 📚 Concepts Demonstrated

- FastAPI
- Server-Side Rendering
- Jinja2 Templates
- `Jinja2Templates`
- `TemplateResponse`
- `HTMLResponse`
- Template context
- Template variables
- Jinja2 loops
- Jinja2 conditions
- Jinja2 filters
- Dynamic HTML tables
- Backend-to-frontend data passing
- Uvicorn

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

> **Theory — Unit 1, Day 5:** Implementation of Server-Side Rendering using FastAPI and Jinja2 to dynamically display student data.