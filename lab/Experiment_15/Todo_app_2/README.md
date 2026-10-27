# Django Todo Application - V2

Todo App V2 is an improved version of the Django Todo application developed for **Backend Development Lab - Experiment 15**.

This version extends the basic Todo application by introducing reusable Django templates, static files, improved request handling, application configuration, and enhanced Django Admin functionality.

## Student Details

**Name:** Kanak Shree  
**SAP ID:** 590019239

## Experiment

**Experiment 15 - Django Todo App V2**

## Features

- Add new tasks
- Display all tasks
- Mark tasks as complete or pending
- Delete tasks
- SQLite database storage
- Enhanced Django Admin Panel
- Reusable Django templates
- Shared header and footer
- External CSS using Django static files
- JavaScript integration
- Responsive user interface
- POST-based task modification
- Safe object retrieval using `get_object_or_404()`

## Technologies Used

- Python
- Django
- HTML
- CSS
- JavaScript
- SQLite
- uv

## Project Structure

```text
Todo_app_2/
├── manage.py
├── db.sqlite3
├── pyproject.toml
├── uv.lock
├── todo_project/
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
└── todo/
    ├── migrations/
    │
    ├── templates/
    │   └── todo/
    │       ├── base.html
    │       ├── header.html
    │       ├── footer.html
    │       ├── task_list.html
    │       └── add_task.html
    │
    ├── static/
    │   └── todo/
    │       ├── css/
    │       │   └── style.css
    │       └── js/
    │           └── app.js
    │
    ├── admin.py
    ├── apps.py
    ├── models.py
    ├── tests.py
    ├── urls.py
    └── views.py
```

## Template Inheritance

V2 uses Django template inheritance to avoid repeating common HTML.

`base.html` provides the common page structure, while individual pages extend it using:

```django
{% extends 'todo/base.html' %}
```

Reusable components such as the header and footer are included using:

```django
{% include 'todo/header.html' %}
{% include 'todo/footer.html' %}
```

## Static Files

CSS and JavaScript are stored separately using Django's static file system.

```text
todo/static/todo/
├── css/
│   └── style.css
└── js/
    └── app.js
```

The stylesheet handles the application interface and responsive layout, while JavaScript provides client-side behaviour such as automatically focusing the task input field.

## Improved Request Handling

Actions that modify existing data, such as completing and deleting tasks, are performed using POST requests.

The application also uses:

```python
get_object_or_404()
```

to safely retrieve tasks.

## Enhanced Admin Panel

The Django Admin Panel is configured to provide:

- Task title display
- Completion status
- Creation date and time
- Completion status filtering
- Task title search
- Editable completion status

## Setup

Install dependencies:

```bash
uv sync
```

Apply database migrations:

```bash
uv run python manage.py migrate
```

Check the project:

```bash
uv run python manage.py check
```

Run the development server:

```bash
uv run python manage.py runserver
```

Alternatively:

```bash
uv run python manage.py runserver 8081
```

## Admin User

Create a superuser:

```bash
uv run python manage.py createsuperuser
```

Then access:

```text
http://127.0.0.1:8081/admin/
```

## Learning Outcomes

Through Todo App V2, I learned how to:

- Use Django template inheritance
- Create reusable template components
- Manage static CSS and JavaScript files
- Use `{% load static %}`
- Use `{% extends %}`, `{% block %}`, and `{% include %}`
- Configure Django `AppConfig`
- Customize the Django Admin Panel
- Use `get_object_or_404()`
- Restrict data-changing operations to POST requests
- Use CSRF protection
- Organize a Django application more effectively

## Conclusion

Todo App V2 builds upon the basic Django Todo application by introducing a more structured and reusable project architecture. It demonstrates how Django templates, static files, admin customization, safer request handling, and application configuration can be combined to build a better organized web application.