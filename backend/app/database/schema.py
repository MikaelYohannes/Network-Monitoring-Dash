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
    conn.commit()
    conn.close()
