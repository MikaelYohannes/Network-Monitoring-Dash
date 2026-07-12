from fastapi import APIRouter, status, HTTPException
from app.services.device_service import *
from app.services.status_service import get_all_status, get_device_status

from app.models.device import *

device_router = APIRouter(prefix="/devices", tags=["Devices"])

@device_router.get("", response_model=list[DeviceStatus])
def show_all_device_status():
    return get_all_status()

@device_router.post("",status_code = status.HTTP_201_CREATED)
async def create_device(device: DeviceCreate):
    return add_device(device)

@device_router.delete("/{id}", status_code = status.HTTP_204_NO_CONTENT)
def remove_device(id: int):
    if not delete_device(id):
        raise HTTPException(status_code=404, detail = "Device not found")
    
    return {"message": "Device deleted"}

@device_router.get("/{id}",response_model = DeviceStatus, status_code = status.HTTP_200_OK)
def show_device(id: int):
    device = get_device_status(id)
    if not device:
        raise HTTPException(status_code = 404, detail = "Device not found")
    else:
        return device
    
@device_router.put("", status_code = status.HTTP_200_OK)
def update(device: DeviceCreate):
    if not update_device(device):
        raise HTTPException(status_code = 404, detail = "Device not found")
    return {"message" : "Device Updated"} 

