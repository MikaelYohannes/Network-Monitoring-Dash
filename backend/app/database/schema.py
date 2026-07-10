from app.database.connection import get_connection

def initialize_database():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS devices (
                   device_id INTEGER PRIMARY KEY AUTOINCREMENT,
                   name TEXT NOT NULL,
                   ip_address TEXT NOT NULL UNIQUE)
                   """)
    
    cursor.execute("""CREATE TABLE IF NOT EXISTS status (
                   device_id INTEGER,
                   status TEXT NOT NULL DEFAULT offline CHECK(status IN ('online', 'offline')),
                   latency REAL CHECK(latency >= 0.0 OR latency IS NULL),
                   last_checked TEXT DEFAULT CURRENT_TIMESTAMP,
                   FOREIGN KEY (device_id) REFERENCES devices(device_id)
                   ON DELETE CASCADE)""")
    conn.commit()
    conn.close()
