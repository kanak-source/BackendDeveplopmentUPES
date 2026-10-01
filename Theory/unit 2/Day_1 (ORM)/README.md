# 📖 Theory — Unit 2, Day 1: SQLAlchemy ORM with SQLite

## 📌 Overview

This implementation demonstrates **Object Relational Mapping (ORM)** using **Python, SQLAlchemy, and SQLite**.

The project creates a Student Management database containing **Departments, Students, Courses, and Enrollments** and establishes relationships between these tables using SQLAlchemy ORM.

The database is stored locally in the `students.db` SQLite database file.

---

## 🎯 Objective

The objective of this implementation is to understand:

- Object Relational Mapping (ORM)
- SQLAlchemy
- SQLite database
- Database models
- Primary Keys
- Foreign Keys
- Table relationships
- `relationship()`
- `back_populates`
- Database sessions
- CRUD operations
- Persistent database storage

---

## 💻 Technologies Used

- Python
- SQLAlchemy
- SQLite

---

# 🗄️ Database Connection

The application creates a connection to the SQLite database using:

```python
engine = create_engine("sqlite:///students.db")
```

The database file used by the application is:

```text
students.db
```

A SQLAlchemy session is created using:

```python
Session = sessionmaker(bind=engine)
session = Session()
```

---

# 📊 Database Models

The application contains four main database models.

## 1. Department

The `Department` model stores department information.

```text
Department
├── id
└── name
```

It also maintains relationships with:

- Students
- Courses

---

## 2. Student

The `Student` model stores student information.

```text
Student
├── id
├── name
├── email
├── branch
├── enrollment_date
└── department_id
```

`department_id` is a foreign key referencing the Department table.

---

## 3. Course

The `Course` model stores course information.

```text
Course
├── id
├── title
├── credits
└── department_id
```

Each course can be associated with a department.

---

## 4. Enrollment

The `Enrollment` model connects students with courses.

```text
Enrollment
├── student_id
├── course_id
├── semester
└── grade
```

It contains foreign keys referencing both:

```text
Student
Course
```

---

# 🔗 SQLAlchemy Relationships

The models use:

```python
relationship()
```

with:

```python
back_populates
```

to create bidirectional relationships.

For example:

```python
student.department
```

can be used to access the department associated with a student.

Similarly:

```python
department.students
```

can be used to access all students associated with a department.

---

## 🔄 Database Relationship

```text
                 Department
                 /        \
                /          \
               ▼            ▼
           Students       Courses
               \            /
                \          /
                 ▼        ▼
                  Enrollment
```

The `Enrollment` table connects students and courses.

---

# 🏗️ Creating Database Tables

All database tables are created using:

```python
Base.metadata.create_all(engine)
```

This creates the required tables inside:

```text
students.db
```

based on the SQLAlchemy models.

---

# 🔄 CRUD Operations

The implementation demonstrates basic **CRUD operations**.

---

## ➕ CREATE

A new student is created:

```python
new_student = Student(
    name="Aarav",
    email="Aarav@upes.ac.in",
    branch="CSE",
    enrollment_date=date(2024, 8, 1),
    department_id=1
)
```

The student is added using:

```python
session.add(new_student)
```

The change is permanently stored using:

```python
session.commit()
```

---

## 📖 READ

Students can be retrieved using SQLAlchemy queries.

Example:

```python
students = session.query(Student).filter(
    Student.branch == "CSE"
).all()
```

A particular student can also be retrieved using:

```python
student = session.query(Student).filter_by(
    id=1
).first()
```

---

## ✏️ UPDATE

An existing student's information can be modified.

Example:

```python
student.branch = "ECE"
```

The change is saved using:

```python
session.commit()
```

---

## 🗑️ DELETE

The implementation also contains an example of deleting a student:

```python
student_to_delete = session.query(Student).filter_by(
    name="Aarav"
).first()
```

The record can be deleted using:

```python
session.delete(student_to_delete)
session.commit()
```

> The DELETE section is currently commented out in the program, so it does not execute unless uncommented.

---

# 💾 SQLite Database File

The project contains:

```text
students.db
```

This is the actual **SQLite database file** used by SQLAlchemy.

It stores the tables generated from the ORM models:

```text
students.db
│
├── departments
├── students
├── courses
└── enrollments
```

Unlike an in-memory Python list, data committed to SQLite remains stored even after the Python program stops.

Database changes are persisted using:

```python
session.commit()
```

---

# 📂 Project Structure

```text
Day_1 (ORM)/
│
├── main.py
├── students.db
└── README.md
```

### `main.py`

Contains:

- SQLAlchemy configuration
- SQLite connection
- Department model
- Student model
- Course model
- Enrollment model
- ORM relationships
- CRUD operations

### `students.db`

Contains the SQLite database generated and used by the application.

### `README.md`

Contains documentation for the experiment.

---

# 🚀 How to Run

## Step 1 — Install SQLAlchemy

```bash
pip install sqlalchemy
```

## Step 2 — Run the Python Program

```bash
python main.py
```

The program connects to:

```text
students.db
```

and performs the implemented ORM operations.

---

# 📚 Concepts Demonstrated

- Object Relational Mapping (ORM)
- SQLAlchemy
- SQLite
- `create_engine()`
- `declarative_base()`
- `sessionmaker()`
- SQLAlchemy Sessions
- Database Models
- Columns
- Primary Keys
- Foreign Keys
- `relationship()`
- `back_populates`
- One-to-Many Relationships
- Student-Course Relationships
- CREATE
- READ
- UPDATE
- DELETE
- `session.add()`
- `session.query()`
- `session.commit()`
- `session.delete()`
- Persistent Database Storage

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

> **Theory — Unit 2, Day 1:** Implementation of SQLAlchemy ORM with SQLite using database models, relationships, CRUD operations, and persistent storage through `students.db`.