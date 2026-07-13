from pydantic import BaseModel
from pydantic.networks import IPvAnyAddress

class DeviceStatus(BaseModel):
    name: str
    ip: IPvAnyAddress
    status: str
    latency: float | None
    last_checked: str

class DeviceCreate(BaseModel):
    name: str
    ip:IPvAnyAddress

class AllInfo(BaseModel):
    id: int
    name: str
    ip: IPvAnyAddress
    status: str
    latency: float | None
    last_checked: str