from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.ext.asyncio import AsyncSession

from src.db.session import get_db_session
from src.models.user import User
from src.repositories.user import UserRepository
from src.schemas.auth import LoginRequest, RegisterRequest, TokenResponse
from src.security import create_access_token, decode_token, hash_password, verify_password

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")


class AuthService:
    @staticmethod
    async def register(user_in: RegisterRequest, user_repo: UserRepository) -> User:
        existing_user = await user_repo.get_by_email(user_in.email)
        if existing_user:
            raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Email already registered")
        return await user_repo.create(
            email=user_in.email,
            password_hash=hash_password(user_in.password),
        )

    @staticmethod
    async def login(user_in: LoginRequest, user_repo: UserRepository) -> TokenResponse:
        user = await user_repo.get_by_email(user_in.email)
        if not user or not verify_password(user_in.password, user.password_hash):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

        return TokenResponse(access_token=create_access_token(user.email))


async def get_current_user(
    token: str = Depends(oauth2_scheme),
    session: AsyncSession = Depends(get_db_session),
) -> User:
    auth_error = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
    )
    try:
        payload = decode_token(token)
    except ValueError:
        raise auth_error

    email = payload.get("sub")
    if not isinstance(email, str):
        raise auth_error

    user = await UserRepository(session).get_by_email(email)
    if not user:
        raise auth_error
    return user
