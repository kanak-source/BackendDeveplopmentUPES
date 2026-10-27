# Experiment 15 - Django Todo Application and Custom Middleware

This experiment focuses on learning Django backend development through the implementation of a Todo management application and the integration of custom Django middleware for request detection and monitoring.

The experiment contains two separate versions of the Todo application:

1. **Todo App V1 - Basic Django Application**
2. **Todo App V2 - Improved Django Application**

A **custom request detection middleware** is also integrated with both Todo applications to demonstrate how Django middleware can intercept and monitor HTTP requests without changing the core functionality of the applications.

## Student Details

**Name:** Kanak Shree  
**SAP ID:** 590019239

## Repository Structure

```text
Experiment_15/
│
├── Todo_app_1/
│   ├── middleware/
│   │   ├── __init__.py
│   │   └── request_middleware.py
│   ├── todo/
│   ├── todo_project/
│   ├── manage.py
│   └── README.md
│
├── Todo_app_2/
│   ├── middleware/
│   │   ├── __init__.py
│   │   └── request_middleware.py
│   ├── todo/
│   ├── todo_project/
│   ├── manage.py
│   └── README.md
│
├── Middleware/
│   └── request_middleware.py
│
└── Readme.md
```

The two Todo applications are maintained as separate Django projects so that the improvements introduced in V2 can be clearly understood.

The `Middleware` directory contains the reference implementation of the custom request detection middleware. The same middleware functionality is integrated into both Todo App V1 and Todo App V2.

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

Todo App V2 builds upon the concepts introduced in V1 and improves the overall structure, reusability, request handling, and organization of the application.

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
| Custom Middleware | Yes | Yes |
| Request Detection | Yes | Yes |

# Custom Django Middleware

Custom middleware was added to both Todo applications to understand how Django processes requests and responses.

Middleware acts as an intermediate layer between the client request and the Django view.

The basic request flow is:

```text
Client / Browser
       |
       v
Django Middleware
       |
       v
URL Routing
       |
       v
Django View
       |
       v
Django Middleware
       |
       v
HTTP Response
       |
       v
Client / Browser
```

The middleware observes incoming requests before or during their processing and records useful request information.

## Request Detection

The custom `RequestDetectionMiddleware` detects and displays:

- HTTP request method
- Requested URL/path
- Client IP address
- Browser/User-Agent information
- Request processing time

Example terminal output:

```text
----- Request Detection -----
Method: GET
Path: /
IP Address: 127.0.0.1
User Agent: Mozilla/5.0 ...
Processing Time: 4.52 ms
-----------------------------
```

When a form is submitted, the middleware can detect the POST request:

```text
----- Request Detection -----
Method: POST
Path: /add/
IP Address: 127.0.0.1
User Agent: Mozilla/5.0 ...
Processing Time: 7.18 ms
-----------------------------
```

## Middleware Implementation

The middleware is implemented using a custom Python class:

```python
import time


class RequestDetectionMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):

        start_time = time.time()

        method = request.method
        path = request.path
        ip_address = request.META.get("REMOTE_ADDR", "Unknown")
        user_agent = request.META.get("HTTP_USER_AGENT", "Unknown")

        response = self.get_response(request)

        processing_time = (time.time() - start_time) * 1000

        print("\n----- Request Detection -----")
        print(f"Method: {method}")
        print(f"Path: {path}")
        print(f"IP Address: {ip_address}")
        print(f"User Agent: {user_agent}")
        print(f"Processing Time: {processing_time:.2f} ms")
        print("-----------------------------\n")

        return response
```

## Middleware Registration

The custom middleware is registered in the `MIDDLEWARE` list inside `settings.py` of both projects:

```python
'middleware.request_middleware.RequestDetectionMiddleware',
```

This allows Django to execute the middleware for incoming requests.

## Middleware in Todo App V1

Todo App V1 uses the custom middleware to observe requests generated while performing basic Todo operations.

For example:

```text
GET  /
GET  /add/
POST /add/
```

The middleware operates independently from the Todo functionality. It does not modify the task data or change the user interface.

## Middleware in Todo App V2

The same middleware functionality is integrated into Todo App V2.

It can monitor requests generated by:

- Opening the task list
- Opening the Add Task page
- Adding a task
- Updating task completion status
- Deleting a task
- Accessing the Django Admin Panel

This demonstrates that the same middleware concept can be reused across different Django applications.

## Purpose of Using the Same Middleware

Using the same request detection middleware in both versions demonstrates an important Django concept:

> Middleware can provide application-wide functionality without modifying individual views.

The Todo functionality remains independent from the middleware.

Therefore:

```text
Todo Application
      =
Business/Application Logic

RequestDetectionMiddleware
      =
Request Monitoring Layer
```

The middleware observes requests while allowing the original Todo applications to continue working normally.

# Technologies Used

- Python
- Django
- HTML
- CSS
- JavaScript
- SQLite
- Django Middleware
- Django ORM
- uv
- Git
- GitHub

# Running Todo App V1

Navigate to the V1 project:

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

Check the project:

```bash
uv run python manage.py check
```

Run:

```bash
uv run python manage.py runserver 8080
```

Open:

```text
http://127.0.0.1:8080/
```

The middleware detection output will appear in the terminal as requests are made.

# Running Todo App V2

Navigate to the V2 project:

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

Check the project:

```bash
uv run python manage.py check
```

Run:

```bash
uv run python manage.py runserver 8081
```

Open:

```text
http://127.0.0.1:8081/
```

Request information detected by the middleware will appear in the terminal.

# Learning Outcomes

After completing Experiment 15, I gained practical understanding of:

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
- Reusable Django components
- Django middleware architecture
- Request and response processing
- Custom middleware creation
- HTTP GET and POST request detection
- Client IP detection
- User-Agent detection
- Request processing-time measurement
- Middleware registration in `settings.py`
- Reusing middleware functionality across Django applications
- Managing Python dependencies using `uv`
- Version control using Git and GitHub

# Conclusion

Experiment 15 demonstrates the progressive development of a Django Todo application along with the implementation of custom middleware.

**Todo App V1** establishes the fundamental Django workflow and implements the core Todo functionality.

**Todo App V2** improves upon V1 by introducing reusable templates, static assets, safer request handling, enhanced admin functionality, and a more organized application structure.

The **Request Detection Middleware** introduces another important backend concept by demonstrating how requests can be intercepted and monitored at the application level. The middleware detects request methods, paths, IP addresses, User-Agent information, and processing time without changing the core Todo functionality.

Together, Todo App V1, Todo App V2, and the custom middleware provide practical understanding of Django application development, request processing, reusable architecture, and backend request monitoring.