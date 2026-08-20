

export async function getDevices() {
    const response = await fetch("http://127.0.0.1:8000/devices");

        if(!response.ok){
            throw new Error("Failed to fetch devices");
        }
   return response.json();
}

export async function addDevice(device:{name: string; ip:string;}) {
     const response = await fetch("http://127.0.0.1:8000/devices", {
        method: 'POST', headers: {"Content-Type": "application/json"},
        body:JSON.stringify(device) 
     });
     if(!response.ok){
            throw new Error("Failed to add devices");
        }
   return response.json();
}

export async function deleteDevice(id:number){
    const response = await fetch(`http://127.0.0.1:8000/devices/${id}`, {
        method: 'DELETE'
    });
    if(!response.ok){
        throw new Error('Failed to delete device');
    }
}

export async function updateDevice(device:{name:string; ip:string;}) {
    const response = await fetch('http://127.0.0.1:8000/devices', {
        method: 'PUT', headers: {"Content-Type": "application/json"},
        body:JSON.stringify(device) 
    });
    if(!response.ok){
        throw new Error('Failed to delete device');
    }
    return response.json();
}

export async function getDeviceHistory(id:number) {
    const response = await fetch(`http://127.0.0.1:8000/devices/${id}/history`);
    if(!response.ok){
        throw new Error('Failed to fetch device history');
    }
    if (response.json.length === 0) {
        throw new Error('No history data available for this device');
    }
    return response.json();
}