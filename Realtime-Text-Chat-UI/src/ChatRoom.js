// src/ChatRoom.js
import React, { useState } from 'react';
// import { LiveKitRoom, Chat, RoomAudioRenderer } from '@livekit/components-react';
import CustomChatRoom from './CustomChatRoom';


function ChatRoom() {
  const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibXkgbmFtZSIsInZpZGVvIjp7InJvb21Kb2luIjp0cnVlLCJyb29tIjoibXktcm9vbSIsImNhblB1Ymxpc2giOnRydWUsImNhblN1YnNjcmliZSI6dHJ1ZSwiY2FuUHVibGlzaERhdGEiOnRydWV9LCJzdWIiOiJpZGVudGl0eSIsImlzcyI6IkFQSW53QVpRckc5dnZNayIsIm5iZiI6MTc0OTU4MTYyNiwiZXhwIjoxNzQ5NjAzMjI2fQ.RhROU2vqQv-O2yBdp6CSvL-mrmGQzWcDnv0-EW7vx9s");
  const [open, setOpen] = useState(false);

  const url = "http://localhost:7880"

  const connectToRoom = async () => {
    // Replace with your backend endpoint that returns a token and server URL
    try{
            setOpen(true);

        }catch(error){
            console.error("error", error);  
        }
        
    };

  return (
    // <div>
    //     <button onClick={connectToRoom}>Join Chat Room</button>
    //   {open &&(
    //     <div>
    //         <CustomChatRoom token={token} serverUrl={url} />
    //     </div>
    //   )}
    // </div>

    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      fontFamily: 'Arial, sans-serif'
    }}>
      {!open && (
        <button
          onClick={connectToRoom}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          Join Chat Room
        </button>
      )}

      {open && (
        <div style={{ width: '100%' }}>
          <CustomChatRoom token={token} serverUrl={url} />
        </div>
      )}
    </div>
  );
}

export default ChatRoom;
