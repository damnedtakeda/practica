from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from src.db.session import get_db_session
from src.repositories.user import UserRepository
from src.schemas.auth import LoginRequest, RegisterRequest, TokenResponse, UserResponse
from src.services.auth import AuthService

router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def register(user_in: RegisterRequest, session: AsyncSession = Depends(get_db_session)):
    user = await AuthService.register(user_in=user_in, user_repo=UserRepository(session))
    return user


@router.post("/login", response_model=TokenResponse)
async def login(user_in: LoginRequest, session: AsyncSession = Depends(get_db_session)):
    return await AuthService.login(user_in=user_in, user_repo=UserRepository(session))
