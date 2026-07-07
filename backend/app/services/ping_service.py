from ping3 import ping
from app.services.device_service import *

def ping_device(ip):
    result = ping(ip)

    if result is None:
        return {
            "status": "offline",
            "latency": None
        }
    return {
        "status":"online",
        "latency":round(result*1000,2)
    }

def get_all_device_status(devices):
    results = []
    for device in devices:
        stat = ping_device(device["ip"])
        results.append(
            {
                "name": device["name"],
                "ip": device["ip"],
                "status": stat["status"],
                "latency": stat["latency"]
            }
        )
    return results