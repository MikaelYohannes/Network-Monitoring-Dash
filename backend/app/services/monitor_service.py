from app.services.device_service import get_all_devices, update_status
from app.services.ping_service import get_all_device_status


def monitor_once():
    devices = get_all_devices()
    status = get_all_device_status(devices)
    for device, stat in zip(devices, status):
       update_status({
            "id": device["id"],
            "status": stat["status"],
            "latency": stat["latency"]
        })
    return status
    



    
