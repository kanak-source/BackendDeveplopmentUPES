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

---

## 🔁 Jinja2 Loop

Students are dynamically displayed using:

```html
{% for student in students %}

<tr>
    <td>{{ student.id }}</td>
    <td>{{ student.name }}</td>
    <td>{{ student.branch }}</td>
</tr>

{% endfor %}
```

---

## 🔀 Conditional Rendering

The template checks whether students exist:

```html
{% if students|length == 0 %}

    <p>No students found.</p>

{% else %}

    <!-- Display students -->

{% endif %}
```

---

## 🔢 Jinja2 Filter

The total number of students is displayed using:

```html
{{ students|length }}
```

Example:

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
- `{{ }}` variables
- `{% for %}` loops
- `{% if %}` conditions
- Jinja2 `length` filter
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