from datetime import datetime, timezone
from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from src.models.task import TaskModel
from src.schemas.tasks import TaskCreate, TaskUpdate


class TaskRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def create(self, owner_id: UUID, task_in: TaskCreate) -> TaskModel:
        task = TaskModel(owner_id=owner_id, **task_in.model_dump())
        self.session.add(task)
        await self.session.commit()
        await self.session.refresh(task)
        return task

    async def list_by_owner(self, owner_id: UUID) -> list[TaskModel]:
        stmt = select(TaskModel).where(TaskModel.owner_id == owner_id).order_by(TaskModel.created_at.desc())
        result = await self.session.execute(stmt)
        return list(result.scalars().all())

    async def get_by_id_and_owner(self, task_id: UUID, owner_id: UUID) -> TaskModel | None:
        stmt = select(TaskModel).where(TaskModel.id == task_id, TaskModel.owner_id == owner_id)
        result = await self.session.execute(stmt)
        return result.scalar_one_or_none()

    async def update_by_id_and_owner(
        self,
        task_id: UUID,
        owner_id: UUID,
        task_update: TaskUpdate,
    ) -> TaskModel | None:
        task = await self.get_by_id_and_owner(task_id, owner_id)
        if not task:
            return None

        for key, value in task_update.model_dump(exclude_unset=True).items():
            setattr(task, key, value)
        task.updated_at = datetime.now(timezone.utc)

        await self.session.commit()
        await self.session.refresh(task)
        return task

    async def delete_by_id_and_owner(self, task_id: UUID, owner_id: UUID) -> bool:
        task = await self.get_by_id_and_owner(task_id, owner_id)
        if not task:
            return False

        await self.session.delete(task)
        await self.session.commit()
        return True
