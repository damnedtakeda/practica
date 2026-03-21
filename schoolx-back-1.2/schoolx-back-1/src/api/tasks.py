from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from src.db.session import get_db_session
from src.models.user import User
from src.repositories.task import TaskRepository
from src.schemas.tasks import Task, TaskCreate, TaskUpdate
from src.services.auth import get_current_user
from src.services.tasks import TaskService

router = APIRouter(prefix="/tasks", tags=["Tasks"])


@router.post("", response_model=Task, status_code=status.HTTP_201_CREATED)
async def create_task(
    task_in: TaskCreate,
    current_user: User = Depends(get_current_user),
    session: AsyncSession = Depends(get_db_session),
):
    return await TaskService.create_task(
        task_in=task_in,
        owner_id=current_user.id,
        task_repo=TaskRepository(session),
    )


@router.get("", response_model=list[Task])
async def get_all_tasks(
    current_user: User = Depends(get_current_user),
    session: AsyncSession = Depends(get_db_session),
):
    return await TaskService.get_all_tasks(owner_id=current_user.id, task_repo=TaskRepository(session))


@router.get("/{task_id}", response_model=Task)
async def get_task(
    task_id: UUID,
    current_user: User = Depends(get_current_user),
    session: AsyncSession = Depends(get_db_session),
):
    task = await TaskService.get_task(task_id, current_user.id, TaskRepository(session))
    if not task:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")
    return task


@router.put("/{task_id}", response_model=Task)
async def update_task(
    task_id: UUID,
    task_update: TaskUpdate,
    current_user: User = Depends(get_current_user),
    session: AsyncSession = Depends(get_db_session),
):
    task = await TaskService.update_task(task_id, task_update, current_user.id, TaskRepository(session))
    if not task:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")
    return task


@router.delete("/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_task(
    task_id: UUID,
    current_user: User = Depends(get_current_user),
    session: AsyncSession = Depends(get_db_session),
):
    success = await TaskService.delete_task(task_id, current_user.id, TaskRepository(session))
    if not success:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")
    return None
