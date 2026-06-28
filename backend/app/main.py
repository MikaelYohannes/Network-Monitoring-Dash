#main.py
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from app.services.ping_service import *
from app.database.devices import devices
from app.models.device import DeviceStatus

app = FastAPI()


@app.get("/")
def root():
    return {"message":"hello"}

@app.get("/ping")
def ping_test():
    return ping_device("8.8.8.8")

@app.get("/devices", response_model=list[DeviceStatus])
def show_all_device_status():
   return get_all_device_status(devices)