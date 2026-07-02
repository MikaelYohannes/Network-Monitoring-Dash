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
                "id": row["id"],
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

    try:
        cursor.execute(f"""
            SELECT * FROM devices WHERE id = {id}
                    """)
        row = cursor.fetchall()
        return [{
                "id": row["id"],
                "name": row["name"],
                "ip": row["ip_address"]
            }]
        
        
    
    except sqlite3.Error as e:
        print(f"An error: {e}")
        return []
    
    finally:
        conn.close()
