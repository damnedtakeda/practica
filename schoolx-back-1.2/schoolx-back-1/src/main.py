import uvicorn
from fastapi import FastAPI

from src.config import configs
from src.api import api_router


def create_app() -> FastAPI:
    app = FastAPI(title="Simple Task Management API", version="0.1.0")
    app.include_router(api_router)

    return app


app = create_app()

if __name__ == "__main__":
    uvicorn.run("src.main:app", host="0.0.0.0", port=configs.port)
