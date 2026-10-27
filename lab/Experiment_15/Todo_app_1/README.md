# Django Todo Application - V1

A basic Todo web application developed using Django as part of **Backend Development Lab - Experiment 15**.

This version focuses on understanding the fundamental concepts of Django, including models, views, templates, URL routing, database migrations, and basic CRUD operations.

## Student Details

**Name:** Kanak Shree  
**SAP ID:** 590019239

## Experiment

**Experiment 15 - Django Todo App V1 (Basic)**

## Features

- Add new tasks
- Display all tasks
- Mark tasks as completed
- Mark completed tasks as pending
- Delete tasks
- Store tasks using SQLite
- Django Admin Panel
- Simple responsive user interface

## Technologies Used

- Python
- Django
- HTML
- CSS
- SQLite
- uv

## Project Structure

```text
Todo_app_1/
├── manage.py
├── db.sqlite3
├── pyproject.toml
├── uv.lock
├── todo_project/
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
└── todo/
    ├── migrations/
    ├── templates/
    │   └── todo/
    │       ├── task_list.html
    │       └── add_task.html
    ├── admin.py
    ├── apps.py
    ├── models.py
    ├── tests.py
    ├── urls.py
    └── views.py
```

## Task Model

The application uses a `Task` model with three fields:

| Field | Description |
|---|---|
| `title` | Stores the task title |
| `completed` | Stores the completion status |
| `created_at` | Stores the task creation date and time |

## Setup

Install project dependencies:

```bash
uv sync
```

Apply migrations:

```bash
uv run python manage.py migrate
```

Run the application:

```bash
uv run python manage.py runserver
```

If port 8000 is already occupied:

```bash
uv run python manage.py runserver 8080
```

## Admin Panel

Create an administrator:

```bash
uv run python manage.py createsuperuser
```

The admin panel can then be accessed at:

```text
http://127.0.0.1:8000/admin/
```

## Learning Outcomes

Through this version of the application, I learned how to:

- Create a Django project and application
- Configure `INSTALLED_APPS`
- Create Django models
- Perform database migrations
- Work with Django ORM
- Create views and URL routes
- Create and render Django templates
- Process HTML forms
- Perform basic CRUD operations
- Work with the Django Admin Panel

## Conclusion

Todo App V1 demonstrates the fundamental workflow of a Django application. It provides a basic task management system while covering the core concepts required to understand Django backend development.