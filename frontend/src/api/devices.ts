export async function getDevices() {
    const response = await fetch("http://127.0.0.1:8000/devices");

        if(!response.ok){
            throw new Error("Failed to fetch devices");
        }
   return response.json();
}