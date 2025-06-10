# server.py
import os
from livekit import api
from flask import Flask
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://0.0.0.0",
    "http://0.0.0.0:8004",
    "http://0.0.0.0:3000",

]


app.add_middleware(
CORSMiddleware,
allow_origins=["*"], 
allow_credentials=True,
allow_methods=["*"], 
allow_headers=["*"],
)


@app.get('/')
def home():
  return "Server is Live !!!!"

@app.get('/getToken')
def getToken():
  token = api.AccessToken(os.getenv('LIVEKIT_API_KEY'), os.getenv('LIVEKIT_API_SECRET')) \
    .with_identity("identity") \
    .with_name("my name") \
    .with_grants(api.VideoGrants(
        room_join=True,
        room="my-room",
    ))
  return token.to_jwt()


if __name__ == "__main__":
    # print(getToken())
    
    uvicorn.run(app, host='0.0.0.0', port=8004)