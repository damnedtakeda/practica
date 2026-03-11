from uuid import UUID
from fastapi import APIRouter, HTTPException, status
from src.schemas.tasks import Task, TaskCreate, TaskUpdate
from src.services.tasks import TaskService

router = APIRouter(prefix="/tasks", tags=["Tasks"])

@router.post("", response_model=Task, status_code=status.HTTP_201_CREATED)
def create_task(task_in: TaskCreate):
    return TaskService.create_task(task_in)

@router.get("", response_model=list[Task])
def get_all_tasks():
    return TaskService.get_all_tasks()

@router.get("/{task_id}", response_model=Task)
def get_task(task_id: UUID):
    task = TaskService.get_task(task_id)
    if not task:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")
    return task

@router.put("/{task_id}", response_model=Task)
def update_task(task_id: UUID, task_update: TaskUpdate):
    task = TaskService.update_task(task_id, task_update)
    if not task:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")
    return task

@router.delete("/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_task(task_id: UUID):
    success = TaskService.delete_task(task_id)
    if not success:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")
    return None
