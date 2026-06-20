from ping3 import ping

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