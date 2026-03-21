from uuid import UUID

from src.models.task import TaskModel
from src.repositories.task import TaskRepository
from src.schemas.tasks import TaskCreate, TaskUpdate


class TaskService:
    @staticmethod
    async def create_task(task_in: TaskCreate, owner_id: UUID, task_repo: TaskRepository) -> TaskModel:
        return await task_repo.create(owner_id=owner_id, task_in=task_in)

    @staticmethod
    async def get_all_tasks(owner_id: UUID, task_repo: TaskRepository) -> list[TaskModel]:
        return await task_repo.list_by_owner(owner_id=owner_id)

    @staticmethod
    async def get_task(task_id: UUID, owner_id: UUID, task_repo: TaskRepository) -> TaskModel | None:
        return await task_repo.get_by_id_and_owner(task_id=task_id, owner_id=owner_id)

    @staticmethod
    async def update_task(
        task_id: UUID,
        task_update: TaskUpdate,
        owner_id: UUID,
        task_repo: TaskRepository,
    ) -> TaskModel | None:
        return await task_repo.update_by_id_and_owner(
            task_id=task_id,
            owner_id=owner_id,
            task_update=task_update,
        )

    @staticmethod
    async def delete_task(task_id: UUID, owner_id: UUID, task_repo: TaskRepository) -> bool:
        return await task_repo.delete_by_id_and_owner(task_id=task_id, owner_id=owner_id)
