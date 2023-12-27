import sqlite3
from typing import Optional

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["localhost", "http://localhost:8000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
async def helloWorld():
    return 'Hello, World!'

@app.get("/list")
async def getAll(search: Optional[str] = ""):
    print(search)
    con = sqlite3.connect('db.db')
    cursor = con.cursor()
    if search != "":
        cursor.execute(f"SELECT title, place FROM posts where title like '%{search}%' or place like '%{search}%' ORDER BY real_id DESC")
    else :
        cursor.execute('SELECT title, place FROM posts ORDER BY real_id DESC')
    data = cursor.fetchall()

    cursor.close()
    con.close()

    return data

# python -m uvicorn api:app --reload --port=8001