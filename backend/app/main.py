#main.py
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from app.services.ping_service import ping_device

app = FastAPI()



@app.get("/")
def root():
    return {"message":"hello"}

@app.get("/ping")
def ping_test():
    return ping_device("8.8.8.8")