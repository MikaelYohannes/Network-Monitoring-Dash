from pydantic import BaseModel
from pydantic.networks import IPvAnyAddress

class DeviceStatus(BaseModel):
    name: str
    ip: IPvAnyAddress
    status: str
    latency: float | None

class DeviceCreate(BaseModel):
    name: str
    ip:IPvAnyAddress