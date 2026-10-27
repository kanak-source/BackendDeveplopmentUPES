# Django Todo Application

A simple Todo application developed using **Django** as part of the Backend Development Lab. The application allows users to create, view, update the status of, and delete daily tasks.

## Student Details

**Name:** Kanak Shree  
**SAP ID:** 590019239  

## Experiment

**Experiment 15 – Django Todo App v1 (Basic)**

## Features

- Add new tasks
- View all tasks
- Mark tasks as completed
- Mark completed tasks as pending
- Delete tasks
- Django Admin Panel support
- SQLite database integration
- Simple and responsive user interface

## Technologies Used

- Python
- Django
- HTML
- CSS
- SQLite
- uv (Python package and project manager)

## Project Structure

```text
Todo_app_1/
│
├── manage.py
├── db.sqlite3
├── pyproject.toml
├── uv.lock
│
├── todo_project/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
└── todo/
    ├── migrations/
    ├── templates/
    │   └── todo/
    │       ├── task_list.html
    │       └── add_task.html
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── models.py
    ├── tests.py
    ├── urls.py
    └── views.py
```

## Setup and Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd Todo_app_1
```

### 2. Install dependencies

The project uses `uv` for dependency management.

```bash
uv sync
```

### 3. Apply database migrations

```bash
uv run python manage.py migrate
```

### 4. Run the development server

```bash
uv run python manage.py runserver
```

If port `8000` is already in use:

```bash
uv run python manage.py runserver 8080
```

Open the application in your browser:

```text
http://127.0.0.1:8000/
```

or, when using port 8080:

```text
http://127.0.0.1:8080/
```

## Admin Panel

Create a superuser using:

```bash
uv run python manage.py createsuperuser
```

Start the server and open:

```text
http://127.0.0.1:8000/admin/
```

The Django Admin Panel can be used to view and manage tasks stored in the database.

## Task Model

The application uses a `Task` model containing the following fields:

| Field | Description |
|---|---|
| `title` | Stores the title of the task |
| `completed` | Stores whether the task is completed or pending |
| `created_at` | Stores the date and time when the task was created |

## Application Routes

| Route | Purpose |
|---|---|
| `/` | Display all tasks |
| `/add/` | Add a new task |
| `/toggle/<task_id>/` | Change task completion status |
| `/delete/<task_id>/` | Delete a task |
| `/admin/` | Django Admin Panel |

## Learning Outcomes

Through this experiment, I learned how to:

- Create and configure a Django project
- Create a Django application
- Define database models
- Perform migrations using Django ORM
- Create views and URL routes
- Use Django templates
- Handle form submissions
- Perform basic CRUD operations
- Use the Django Admin Panel
- Run and manage a Django project using `uv`

## Conclusion

This experiment demonstrates the basic working of a Django web application by implementing a Todo management system. It provides practical understanding of Django models, views, templates, URL routing, database operations, and form handling.