from pydantic import BaseModel

class DeviceStatus(BaseModel):
    name: str
    ip:str
    status: str
    latency: float | None

class DeviceCreate(BaseModel):
    name: str
    ip:str