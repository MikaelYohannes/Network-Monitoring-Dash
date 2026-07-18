#main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from app.database.schema import initialize_database
from app.routes.devices import device_router
from app.services.monitor_service import background_monitor
import threading

@asynccontextmanager
async def lifespan(app: FastAPI):
    initialize_database()
    bg_thread = threading.Thread(target=background_monitor, daemon = True)
    bg_thread.start()
    yield

app = FastAPI(lifespan = lifespan)
app.include_router(device_router)

app.add_middleware(
    CORSMiddleware, allow_origins=["http://localhost:5173",], allow_credentials=True, allow_methods=["*"], allow_headers=["*"],
)

