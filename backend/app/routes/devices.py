from fastapi import APIRouter, status
from app.services.ping_service import get_all_device_status
from app.services.device_service import *
from app.models.device import *

device_router = APIRouter(prefix="/devices", tags=["Devices"])

@device_router.get("", response_model=list[DeviceStatus])
def show_all_device_status():
    devices = get_all_devices()
    return get_all_device_status(devices)

@device_router.post("",status_code = status.HTTP_201_CREATED)
async def create_device(device: DeviceCreate):
    return add_device(device)