#main.py
from fastapi import FastAPI
from contextlib import asynccontextmanager
from app.database.schema import initialize_database
from app.routes.devices import device_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    initialize_database()
    yield

app = FastAPI(lifespan = lifespan)
app.include_router(device_router)

