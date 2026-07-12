from app.database.connection import get_connection
import sqlite3

def update_status(status):
    conn = get_connection()
    cursor = conn.cursor()
    
    try:
        cursor.execute("""INSERT INTO status(device_id, status, latency) VALUES (?,?,?) 
                        ON CONFLICT (device_id) DO UPDATE SET status = ?, latency = ?, last_checked = CURRENT_TIMESTAMP;""", 
                        (status["id"],status["status"],status["latency"],status["status"], status["latency"]))
        return {"message": "Device Status Created"}
    except sqlite3.Error as e:
        print(f"An error {e}")

    finally:
        conn.commit()
        conn.close()

def get_all_status():
    conn = get_connection()
    cursor = conn.cursor()
    
    try:
        cursor.execute("""SELECT * FROM status,devices WHERE status.device_id = devices.device_id""")
        rows = cursor.fetchall()
        result = []
        for row in rows:
            result.append({
                "name": row["name"],
                "ip": row["ip_address"],
                "status": row["status"],
                "latency": row["latency"],
                "last_checked": row["last_checked"]
                
            })
        
        return result
    except sqlite3.Error as e:
        print(f"An error {e}")

    finally:
        conn.commit()
        conn.close()

def get_device_status(id):
    conn = get_connection()
    cursor = conn.cursor()
    
    try:
        cursor.execute("""SELECT * FROM status,devices WHERE status.device_id = devices.device_id 
                       AND devices.device_id = ?""", (id,))
        row = cursor.fetchone()
        if row is None:
            return {}
        result = {
                "name": row["name"],
                "ip": row["ip_address"],
                "status": row["status"],
                "latency": row["latency"],
                "last_checked": row["last_checked"]
                
            }
        
        return result
    except sqlite3.Error as e:
        print(f"An error {e}")

    finally:
        conn.commit()
        conn.close()