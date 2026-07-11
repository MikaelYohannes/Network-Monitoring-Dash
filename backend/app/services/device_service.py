from app.database.connection import get_connection
import sqlite3

def get_all_devices():
    conn = get_connection()
    cursor = conn.cursor()

    try:
        cursor.execute("""
            SELECT * FROM devices
                    """)
        rows = cursor.fetchall()
        result = []
        for row in rows:
            result.append({
                "id": row["device_id"],
                "name": row["name"],
                "ip": row["ip_address"]
            })
        
        return result
    
    except sqlite3.Error as e:
        print(f"An error: {e}")
        return []
    
    finally:
        conn.close()

def get_device(id):
    conn = get_connection()
    cursor = conn.cursor()
    query = "SELECT * FROM devices WHERE device_id = ?;"
    try:
        cursor.execute(query, (id,))
        row = cursor.fetchone()
        if row is None:
            return []
        return [{
                "id": row["device_id"],
                "name": row["name"],
                "ip": row["ip_address"]
            }]
        
    
    except sqlite3.Error as e:
        print(f"An error: {e}")
        return []
    
    finally:
        conn.close()

def add_device(new_device):
    conn = get_connection()
    cursor = conn.cursor()
    query = "INSERT INTO devices(name, ip_address) VALUES (?, ?)"
    data = (new_device.name, str(new_device.ip))
    try:
        cursor.execute(query, data)      
        return{"id": cursor.lastrowid}
    except sqlite3.Error as e:
        print(f"An error: {e}")

    finally:
        conn.commit()
        conn.close()
        

def delete_device(id):
    conn = get_connection()
    cursor = conn.cursor()
    query = "DELETE FROM devices WHERE device_id = ?"
    
    try:
        cursor.execute(query, (str(id),))   
        return cursor.rowcount > 0    
    
    except sqlite3.Error as e:
        print(f"An error: {e}")

    finally:
        conn.commit()
        conn.close()

def update_device(new_device):
    row_id = device_exists(str(new_device.ip))
    if row_id is None:
        return False
    conn = get_connection()
    cursor = conn.cursor()

    query = "UPDATE devices SET name = ?, ip_address = ? WHERE device_id = ?"
    
    try:
        cursor.execute(query, (new_device.name, str(new_device.ip), row_id['device_id'])) 
        return True       
    
    except sqlite3.Error as e:
        print(f"An error: {e}")

    finally:
        conn.commit()
        conn.close()

def device_exists(ip):
    conn = get_connection()
    cursor = conn.cursor()
    query = "SELECT device_id FROM devices WHERE ip_address = ?"
    
    try:
        cursor.execute(query, (ip,))  
        row = cursor.fetchone()
        return row
    except sqlite3.Error as e:
        print(f"An error: {e}")

    finally:
        conn.commit()
        conn.close()

def update_status(status):
    conn = get_connection()
    cursor = conn.cursor()
    
    try:
        cursor.execute("""INSERT INTO status(device_id, status, latency) VALUES (?,?,?) 
                        ON CONFLICT (device_id) DO UPDATE SET status = ?, latency = ?, last_checked = CURRENT_TIMESTAMP;""", 
                        (status["id"],status["status"],status["latency"],status["status"], status["latency"]))
        return
    except sqlite3.Error as e:
        print(f"An error {e}")

    finally:
        conn.commit()
        conn.close()
