from uuid import UUID
from datetime import datetime, timezone
from src.schemas.tasks import Task, TaskCreate, TaskUpdate
  
tasks_db: list[Task] = []

class TaskService:
    @staticmethod
    def create_task(task_in: TaskCreate) -> Task:
        new_task = Task(**task_in.model_dump())
        tasks_db.append(new_task)
        return new_task

    @staticmethod
    def get_all_tasks() -> list[Task]:
        return tasks_db

    @staticmethod
    def get_task(task_id: UUID) -> Task | None:
        for task in tasks_db:
            if task.id == task_id:
                return task
        return None

    @staticmethod
    def update_task(task_id: UUID, task_update: TaskUpdate) -> Task | None:
        task = TaskService.get_task(task_id)
        if not task:
            return None
        
        update_data = task_update.model_dump(exclude_unset=True)
        for key, value in update_data.items():
            setattr(task, key, value)
            
        task.updated_at = datetime.now(timezone.utc)
        return task

    @staticmethod
    def delete_task(task_id: UUID) -> bool:
        task = TaskService.get_task(task_id)
        if task:
            tasks_db.remove(task)
            return True
        return False
