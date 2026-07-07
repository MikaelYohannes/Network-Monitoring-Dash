#main.py
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from contextlib import asynccontextmanager
from app.database.schema import initialize_database
from app.routes.devices import device_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    initialize_database()
    yield

app = FastAPI(lifespan = lifespan)
app.include_router(device_router)


@app.get("/")
def root():
    return {"message":"hello"}
