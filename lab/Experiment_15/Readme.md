# Experiment 15 - Django Todo Application

This experiment focuses on learning Django backend development through the implementation of a Todo management application.

The experiment is divided into two separate versions:

1. **Todo App V1 - Basic Django Application**
2. **Todo App V2 - Improved Django Application**

## Student Details

**Name:** Kanak Shree  
**SAP ID:** 590019239

## Repository Structure

```text
Experiment_15/
│
├── Todo_app_1/
│   ├── todo/
│   ├── todo_project/
│   ├── manage.py
│   └── README.md
│
├── Todo_app_2/
│   ├── todo/
│   ├── todo_project/
│   ├── manage.py
│   └── README.md
│
└── README.md
```

Each version is maintained as a separate Django project so that the development and improvements introduced in V2 can be clearly understood.

# Todo App V1

Todo App V1 introduces the basic architecture and workflow of Django.

### Concepts Covered

- Django project creation
- Django application creation
- Models
- Views
- URL routing
- Templates
- SQLite database
- Database migrations
- Django ORM
- Django Admin
- Basic CRUD operations

### Functionality

Users can:

- Add tasks
- View tasks
- Mark tasks as completed or pending
- Delete tasks

# Todo App V2

Todo App V2 builds upon the concepts introduced in V1 and improves the structure of the application.

### Additional Concepts Covered

- Template inheritance
- Reusable templates
- `base.html`
- `header.html`
- `footer.html`
- Django static files
- External CSS
- JavaScript
- Django `AppConfig`
- Enhanced Django Admin
- `get_object_or_404()`
- POST-based update and delete operations
- CSRF protection
- Responsive interface

## V1 vs V2

| Feature | Todo V1 | Todo V2 |
|---|:---:|:---:|
| Add Tasks | Yes | Yes |
| View Tasks | Yes | Yes |
| Complete/Pending Tasks | Yes | Yes |
| Delete Tasks | Yes | Yes |
| SQLite Database | Yes | Yes |
| Django Admin | Basic | Enhanced |
| Template Inheritance | No | Yes |
| Shared Header/Footer | No | Yes |
| External CSS | No | Yes |
| JavaScript | No | Yes |
| Static File Structure | Basic | Yes |
| `get_object_or_404()` | No | Yes |
| POST-based Modification | Basic | Yes |
| AppConfig Customization | Basic | Yes |

## Technologies Used

- Python
- Django
- HTML
- CSS
- JavaScript
- SQLite
- uv
- Git
- GitHub

## Running Todo App V1

Navigate to:

```bash
cd Todo_app_1
```

Install dependencies:

```bash
uv sync
```

Apply migrations:

```bash
uv run python manage.py migrate
```

Run:

```bash
uv run python manage.py runserver 8080
```

Open:

```text
http://127.0.0.1:8080/
```

## Running Todo App V2

Navigate to:

```bash
cd Todo_app_2
```

Install dependencies:

```bash
uv sync
```

Apply migrations:

```bash
uv run python manage.py migrate
```

Run:

```bash
uv run python manage.py runserver 8081
```

Open:

```text
http://127.0.0.1:8081/
```

## Learning Outcomes

After completing this experiment, I gained practical understanding of:

- Django project architecture
- Django applications
- Models and ORM
- Database migrations
- Views and URL routing
- Template rendering
- Template inheritance
- Static file management
- Form handling
- CSRF protection
- CRUD operations
- Django Admin customization
- Organizing Django projects using reusable components
- Managing Python dependencies using `uv`

## Conclusion

Experiment 15 demonstrates the development of a Django Todo application in two stages.

V1 establishes the fundamental Django workflow and implements the core Todo functionality. V2 improves upon this foundation by introducing reusable templates, static assets, safer request handling, enhanced admin functionality, and a more organized application structure.

Together, both versions provide a practical understanding of how a basic Django project can be progressively developed into a better structured web application.