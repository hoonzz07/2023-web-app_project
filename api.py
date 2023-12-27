import sqlite3

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
async def getAll():
    con = sqlite3.connect('db.db')
    cursor = con.cursor()

    cursor.execute('SELECT title, place FROM posts ORDER BY real_id DESC')
    data = cursor.fetchall()

    cursor.close()
    con.close()

    return data

# python -m uvicorn api:app --reload --port=8001