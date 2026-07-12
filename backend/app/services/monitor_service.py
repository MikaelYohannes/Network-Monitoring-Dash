from app.services.device_service import get_all_devices
from app.services.status_service import update_status,update_stat_history
from app.services.ping_service import get_all_device_status
import time

def monitor_once():
    devices = get_all_devices()
    status = get_all_device_status(devices)
    for device, stat in zip(devices, status):
       update_status({
            "id": device["id"],
            "status": stat["status"],
            "latency": stat["latency"]
        })
       update_stat_history({
            "id": device["id"],
            "status": stat["status"],
            "latency": stat["latency"]
        })
       



def background_monitor():
    print("Monitor Started \n")
    while True:
        try:
            monitor_once()
            
        except Exception as e:
            print(f"Monitor error: {e}")
            
        time.sleep(30)
    



    
