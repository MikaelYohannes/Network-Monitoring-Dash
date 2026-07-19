

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