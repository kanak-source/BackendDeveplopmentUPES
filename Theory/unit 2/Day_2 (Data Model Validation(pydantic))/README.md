# 📖 Theory — Unit 2, Day 2: Data Model Validation with FastAPI & Pydantic

## 📌 Overview

This implementation demonstrates **data validation in FastAPI using Pydantic models**.

A Student API is created where incoming student data is automatically validated before the endpoint executes.

---

## 🎯 Objective

To understand:

- FastAPI request validation
- Pydantic models
- `BaseModel`
- `Field`
- Email validation
- String length validation
- Pattern validation
- Optional fields
- Date validation
- Request and response models
- Automatic HTTP validation errors

---

## 💻 Technologies Used

- Python
- FastAPI
- Pydantic
- Email Validator
- Uvicorn

---

# 📥 Student Request Model

The incoming student data is validated using:

```python
class StudentCreate(BaseModel):
    name: str = Field(
        ...,
        min_length=1,
        max_length=100
    )

    email: EmailStr

    branch: str = Field(
        ...,
        pattern=r"^(CSE|ECE|IT|ME|CE)$"
    )

    enrollment_date: Optional[date] = None
```

---

## ✅ Validation Rules

### Name

```python
min_length=1
max_length=100
```

The name:

- Cannot be empty
- Cannot exceed 100 characters

---

### Email

```python
email: EmailStr
```

`EmailStr` checks whether the supplied value is in a valid email format.

---

### Branch

```python
pattern=r"^(CSE|ECE|IT|ME|CE)$"
```

Only the following branches are accepted:

```text
CSE
ECE
IT
ME
CE
```

Values such as:

```text
cse
BCA
ABC
```

will fail validation.

---

### Enrollment Date

```python
enrollment_date: Optional[date] = None
```

The enrollment date is optional.

If it is not provided, the example `Student` class uses:

```python
date.today()
```

as the enrollment date.

---

# 📤 Response Model

The API response is defined using:

```python
class StudentResponse(BaseModel):
    id: int
    name: str
    email: str
    branch: str
    enrollment_date: date
```

This defines the expected structure of the successful API response.

---

# ➕ Create Student Endpoint

The application provides:

```http
POST /students
```

The endpoint is defined as:

```python
@app.post(
    "/students",
    response_model=StudentResponse,
    status_code=201
)
def create_student(student: StudentCreate):
```

FastAPI automatically validates the incoming request against:

```text
StudentCreate
```

before the function executes.

---

## 📦 Converting Pydantic Data

The validated Pydantic object is converted into a dictionary using:

```python
student_data = student.model_dump()
```

A Student object is then created:

```python
db_student = Student(**student_data)
```

---

# 🧪 Example Valid Request

```json
{
    "name": "Kanak Shree",
    "email": "kanak@example.com",
    "branch": "CSE",
    "enrollment_date": "2026-10-01"
}
```

The API returns the created student with an automatically generated ID.

---

# ❌ Example Invalid Request

```json
{
    "name": "",
    "email": "invalid-email",
    "branch": "BCA"
}
```

This request fails because:

- Name is empty
- Email format is invalid
- `BCA` is not one of the allowed branches

FastAPI/Pydantic automatically generates validation error information for invalid request data.

---

# 🔄 Validation Flow

```text
JSON Request
     ↓
StudentCreate
     ↓
Pydantic Validation
     ↓
Valid?
  ┌──┴──┐
  │     │
 YES    NO
  │     │
  ▼     ▼
Create  Validation
Student   Error
  │
  ▼
StudentResponse
  │
  ▼
JSON Response
```

---

# 🗃️ Example Student Model

The code also contains a simple `Student` class that acts as an example database model.

It automatically generates IDs using:

```python
Student._id += 1
```

If no enrollment date is provided:

```python
self.enrollment_date = (
    enrollment_date or date.today()
)
```

> This is only an example model. The code comments indicate that a real application would normally use a database model such as SQLAlchemy.

---

# 📂 Project Structure

```text
Day_2 (Data Model Validation)/
│
├── main.py
└── README.md
```

---

# 🚀 How to Run

Install the required packages:

```bash
pip install fastapi uvicorn pydantic email-validator
```

Run the application:

```bash
uvicorn main:app --reload
```

Open the interactive API documentation:

```text
http://127.0.0.1:8000/docs
```

---

# 📚 Concepts Demonstrated

- FastAPI
- Pydantic
- `BaseModel`
- `Field`
- `EmailStr`
- `Optional`
- Python `date`
- `min_length`
- `max_length`
- Pattern validation
- Request models
- Response models
- `response_model`
- `status_code=201`
- `model_dump()`
- Automatic request validation
- Default values
- Type validation

---

## 🧭 Navigation

⬅️ [Back to Unit 2](../README.md)

📖 [Back to Theory](../../README.md)

🏠 [Back to Main Repository](../../../README.md)

---

### 👩‍💻 Submitted By

**Kanak Shree**  
**SAP ID:** 590019239  
**Course:** Backend Development  
**University:** UPES

---

> **Theory — Unit 2, Day 2:** Implementation of request and response data validation using FastAPI and Pydantic.