from django.shortcuts import render

from django.shortcuts import get_object_or_404, redirect, render
from django.views.decorators.http import require_POST
from django.http import JsonResponse
from .utils import get_external_data

from .models import Task


def task_list(request):
    tasks = Task.objects.all().order_by('-created_at')
    return render(request, 'todo/task_list.html', {'tasks': tasks})


def add_task(request):
    if request.method == 'POST':
        title = request.POST.get('title', '').strip()

        if title:
            Task.objects.create(title=title)

        return redirect('task_list')

    return render(request, 'todo/add_task.html')


@require_POST
def toggle_task(request, task_id):
    task = get_object_or_404(Task, pk=task_id)

    task.completed = not task.completed
    task.save(update_fields=['completed'])

    return redirect('task_list')


@require_POST
def delete_task(request, task_id):
    task = get_object_or_404(Task, pk=task_id)

    task.delete()

    return redirect('task_list')

def external_data_view(request, post_id):
    result = get_external_data(post_id)

    if result["error"]:
        return JsonResponse(
            {"error": result["error"]},
            status=503,
        )

    return JsonResponse(result["data"])