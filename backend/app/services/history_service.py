

import sqlite3

from app.database.connection import get_connection


def update_stat_history(status):
    conn = get_connection()
    cursor = conn.cursor()
    
    try:
        cursor.execute("""INSERT INTO status_history(device_id, status, latency) VALUES (?,?,?) """, 
                        (status["id"],status["status"],status["latency"]))
        return {"message": "Device Status history Created"}
    except sqlite3.Error as e:
        print(f"An error {e}")

    finally:
        conn.commit()
        conn.close()

def get_stat_history(id):
    conn = get_connection()
    cursor = conn.cursor()
    
    try:
        cursor.execute("""SELECT * FROM status_history""")
        rows = cursor.fetchall()
        result = []
        for row in rows:
            result.append({
                "status": row["status"],
                "latency": row["latency"],
                "time": row["checked_at"]                
            })
        
        return result
    except sqlite3.Error as e:
        print(f"An error {e}")

    finally:
        conn.commit()
        conn.close()
