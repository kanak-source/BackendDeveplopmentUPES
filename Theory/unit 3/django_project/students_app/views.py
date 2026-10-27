from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
# from django.http import JsonResponse

def indexJson(request):
    return JsonResponse({
        "message": "Welcome to the Student Management API",
        "version": "1.0",
        "status": "running"
    })


def student_list(request):
    return JsonResponse({
        "students": [],
        "message": "Student list endpoint",
    })


def student_detail(request, student_id):
    return JsonResponse({
        "student_id": student_id,
        "message": "Student detail endpoint",
    })


# This function acts as a view to handle incoming requests
def index(request):
    return HttpResponse("Welcome to the Student Management API (Django)")
