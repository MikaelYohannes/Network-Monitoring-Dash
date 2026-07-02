#main.py
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from contextlib import asynccontextmanager
from app.database.schema import initialize_database
from app.services.ping_service import get_all_device_status
from app.models.device import *

@asynccontextmanager
async def lifespan(app: FastAPI):
    initialize_database()
    yield

app = FastAPI(lifespan = lifespan)


@app.get("/")
def root():
    return {"message":"hello"}

@app.get("/devices", response_model=list[DeviceStatus])
def show_all_device_status():
   return get_all_device_status()