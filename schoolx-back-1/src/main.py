import uvicorn
from fastapi import FastAPI
from src.api.tasks import router as tasks_router
from src.config import configs

def create_app() -> FastAPI:
    app = FastAPI(title="Simple Task Management API", version="0.1.0")

    app.include_router(tasks_router)

    return app

app = create_app()

if __name__ == "__main__":
    uvicorn.run("src.main:app", host="0.0.0.0", port=configs.port)
