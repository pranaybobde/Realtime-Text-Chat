// // src/CustomChatRoom.js
// import React, { useEffect, useState } from 'react';
// import { Room } from 'livekit-client';


// function CustomChatRoom({ token, serverUrl }) {
//   const [newRoom, setNewRoom] = useState(new Room());
//   const [message, setMessage] = useState('');
//   const [chatLog, setChatLog] = useState([]);



//   useEffect(() => {
//     const connectToRoom = async () => {
   

        
//       console.log(serverUrl, token, "==================>>>")


//         try{
//             await newRoom.connect(serverUrl, token);
//             setNewRoom(newRoom);

//       console.log(newRoom.name, "==========>")
//         }catch(error){
//             console.log("error while joining room", error)
//         }


//       // Register handler for incoming text streams
//       newRoom.registerTextStreamHandler('lk.transcription', async (reader, participant) => {
//         const text = await reader.readAll();
//         setChatLog((prev) => [...prev, `${participant.identity}: ${text}`]);
//       });
//     };

//     connectToRoom();

//     return () => {
//       if (newRoom) {
//         newRoom.disconnect();
//       }
//     };
//   }, [serverUrl, token, newRoom]);

//   const sendMessage = async () => {

//     console.log(newRoom, message, "----->")

//     if (newRoom && message.trim() !== '') {
//       await newRoom.localParticipant.sendText(message, { topic: 'lk.chat' });
//       setChatLog((prev) => [...prev, `Me: ${message}`]);
//       setMessage('');
//     }
//   };

//   return (
//     <div>
//       <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc' }}>
//         {chatLog.map((msg, idx) => (
//           <div key={idx}>{msg}</div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type your message..."
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }

// export default CustomChatRoom;





// const serverUrl = 'http://localhost:7880';
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibXkgbmFtZSIsInZpZGVvIjp7InJvb21Kb2luIjp0cnVlLCJyb29tIjoibXktcm9vbSIsImNhblB1Ymxpc2giOnRydWUsImNhblN1YnNjcmliZSI6dHJ1ZSwiY2FuUHVibGlzaERhdGEiOnRydWV9LCJzdWIiOiJpZGVudGl0eSIsImlzcyI6IkFQSW53QVpRckc5dnZNayIsIm5iZiI6MTc0Nzk4ODAxNiwiZXhwIjoxNzQ4MDA5NjE2fQ.WcxdRennKFCHT08ugjLxSiBLcyPh6cJ9WKHf4SRNvyM';






// import React, { useEffect, useState } from 'react';
// import { Room } from 'livekit-client';

// function CustomChatRoom({ token, serverUrl }) {
//     const [room, setRoom] = useState(null);
//     const [message, setMessage] = useState('');
//     const [chatLog, setChatLog] = useState([]);
//     const newRoom = new Room();

//     const connectToRoom = async () => {
//         try {
//         await newRoom.connect(serverUrl, token);
//         setRoom(newRoom);
//         console.log("=============before=receiving==============>")
//         console.log(newRoom, "before")



//         } catch (error) {
//         console.error('Error connecting to room:', error);
//         }
//     };

// function RecieveMessage({newRoom}) {
//     newRoom.registerTextStreamHandler('lk.transcriprion', async (reader, participant) => {
//         const text = await reader.readAll();
//         console.log("==========================>")
//         console.log("full_text:", text)
//         console.log("==========================>")
//         setChatLog((prev) => [...prev, `${participant.identity}: ${text}`]);
//         });
//     console.log("=============after=receiving==============>")
//     console.log(room, "after")
//     };


//   useEffect(() => {
//     connectToRoom();

//     return () => {
//       if (newRoom) {
//         newRoom.disconnect();
//       }
//     };
//   }, [serverUrl, token]);


//   const sendMessage = async () => {

//     console.log("room", room)

//     if (room && message.trim() !== '') {
//       await room.localParticipant.sendText(message, { topic: 'lk.chat' });
//       setChatLog((prev) => [...prev, `Me: ${message}`]);
//       setMessage('');
//     }
//   };



//   return (
//     <div>
//       <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc' }}>
//         {chatLog.map((msg, idx) => (
//           <div key={idx}>{msg}</div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type your message..."
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }

// export default CustomChatRoom;



// import React, { useEffect, useState } from 'react';
// import { Room } from 'livekit-client';

// function CustomChatRoom({ token, serverUrl }) {
//   const [room, setRoom] = useState(null);
//   const [message, setMessage] = useState('');
//   const [chatLog, setChatLog] = useState([]);

//   useEffect(() => {
//     const newRoom = new Room();

//     const connectToRoom = async () => {
//       try {
//         await newRoom.connect(serverUrl, token);
//         setRoom(newRoom);
//         console.log('Connected to room');

//         // Register handler for incoming messages
//         newRoom.registerTextStreamHandler('lk.transcription', async (reader, participant) => {
//             console.log("=========================>>")
//             for await (const chunk of reader) {
//             const text = chunk

          
//             setChatLog((prev) => [...prev, `${participant.identity}: ${text}`]);
//         }

//             if (reader.info.attributes['lk.transcribed_track_id']) {
//                 console.log(`New transcription from ${participant.identity}: ${message}`);
//             } else {
//                     console.log(`New message from ${participant.identity}: ${message}`);
//             }

//         });

//       } catch (error) {
//         console.error('Error connecting to room:', error);
//       }
//     };

//     connectToRoom();

//     return () => {
//       if (newRoom) {
//         newRoom.disconnect();
//       }
//     };
//   }, [serverUrl, token]);

//   const sendMessage = async () => {
//     if (room && message.trim() !== '') {
//       await room.localParticipant.sendText(message, { topic: 'lk.chat' });
//       setChatLog((prev) => [...prev, `Me: ${message}`]);
//       setMessage('');
//     }
//   };

//   return (
//     <div>
//       <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc' }}>
//         {chatLog.map((msg, idx) => (
//           <div key={idx}>{msg}</div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type your message..."
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }

// export default CustomChatRoom;



import React, { useEffect, useState } from 'react';
import { Room } from 'livekit-client';

function CustomChatRoom({ token, serverUrl }) {
  const [room, setRoom] = useState(null);
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [incomingMessages, setIncomingMessages] = useState({}); // buffer per participant

  useEffect(() => {
    const newRoom = new Room();

    const connectToRoom = async () => {
      try {
        await newRoom.connect(serverUrl, token);
        setRoom(newRoom);
        console.log('Connected to room');

        newRoom.registerTextStreamHandler('lk.transcription', async (reader, participant) => {
            // const identity = participant.identity;
            const identity = "Agent";
            let fullMessage = '';

            for await (const chunk of reader) {
                const text = chunk;
                fullMessage += text;

                // Show streaming message in progress
                setIncomingMessages((prev) => ({
                ...prev,
                [identity]: (prev[identity] || '') + text,
                }));
            }

            // Once stream ends, move to chatLog and clear from buffer
            setChatLog((prev) => [...prev, `${identity}: ${fullMessage}`]);
            setIncomingMessages((prev) => {
                const updated = { ...prev };
                delete updated[identity];
                return updated;
            });
            });


      } catch (error) {
        console.error('Error connecting to room:', error);
      }
    };

    connectToRoom();

    return () => {
      if (newRoom) {
        newRoom.disconnect();
      }
    };
  }, [serverUrl, token]);

  const sendMessage = async () => {
    if (room && message.trim() !== '') {
      await room.localParticipant.sendText(message, { topic: 'lk.chat' });
      setChatLog((prev) => [...prev, `Me: ${message}`]);
      setMessage('');
    }
  };

//   const renderChat = () => {
//     let combined = [...chatLog];

//     // Include ongoing chunked messages
//     for (const [identity, text] of Object.entries(incomingMessages)) {
//       combined.push(`${identity}: ${text}`);
//     }
//     return combined.map((msg, idx) => <div key={idx}>{msg}</div>);
// };

    const renderChat = () => {
  let combined = [...chatLog];

  for (const [identity, text] of Object.entries(incomingMessages)) {
    combined.push(`${identity}: ${text}`);
  }

  return combined.map((msg, idx) => {
    const isUser = msg.startsWith('Me:');
    const displayMsg = msg.replace(/^Me:\s*|^Agent:\s*/i, '');

    return (
      <div
        key={idx}
        style={{
          display: 'flex',
          justifyContent: !isUser ? 'flex-start' : 'flex-end',
          padding: '4px 0'
        }}
      >
        <div
          style={{
            backgroundColor: isUser ? '#e1f5fe' : '#dcedc8',
            color: '#333',
            padding: '10px 14px',
            borderRadius: '16px',
            maxWidth: '75%',
            wordWrap: 'break-word',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            textAlign: 'left'
          }}
        >
          {displayMsg}
        </div>
      </div>
    );
  });
};


  return (
    // <div>
    //   <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc' }}>
    //     {renderChat()}
    //   </div>
    //   <input
    //     type="text"
    //     value={message}
    //     onChange={(e) => setMessage(e.target.value)}
    //     placeholder="Type your message..."
    //   />
    //   <button onClick={sendMessage}>Send</button>
    // </div>

//     <div style={{
//   display: 'flex',
//   flexDirection: 'column',
//   maxWidth: '500px',
//   margin: '0 auto',
//   height: '600px',
//   border: '1px solid #ddd',
//   borderRadius: '10px',
//   boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//   overflow: 'hidden',
//   fontFamily: 'Arial, sans-serif'
// }}>
//   <div style={{
//     flex: 1,
//     padding: '10px',
//     overflowY: 'auto',
//     backgroundColor: '#f9f9f9'
//   }}>
//     {renderChat()}
//   </div>
//   <div style={{
//     display: 'flex',
//     borderTop: '1px solid #ddd',
//     padding: '10px',
//     backgroundColor: '#fff'
//   }}>
//     <input
//       type="text"
//       value={message}
//       onChange={(e) => setMessage(e.target.value)}
//       placeholder="Type your message..."
//       style={{
//         flex: 1,
//         padding: '10px',
//         border: '1px solid #ccc',
//         borderRadius: '6px',
//         marginRight: '10px',
//         fontSize: '14px'
//       }}
//     />
//     <button
//       onClick={sendMessage}
//       style={{
//         padding: '10px 16px',
//         backgroundColor: '#007bff',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '6px',
//         cursor: 'pointer',
//         fontSize: '14px'
//       }}
//     >
//       Send
//     </button>
//   </div>
// </div>
<>
<div style={{
  maxWidth: '600px',
  margin: '0 auto',
  fontFamily: 'Arial, sans-serif'
}}>
  <h1 style={{
    textAlign: 'center',
    marginBottom: '20px'
  }}>
    Text-to-Text with LiveKit
  </h1>
</div>
<div style={{
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    height: '600px',
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif'
  }}>
    <div style={{
      flex: 1,
      overflowY: 'auto',
      padding: '10px',
      backgroundColor: '#f9f9f9'
    }}>
      {renderChat()}
    </div>

    <div style={{
      display: 'flex',
      padding: '10px',
      borderTop: '1px solid #ddd',
      backgroundColor: '#fff'
    }}>
      <textarea
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
            }
        }}
        style={{
          flex: 1,
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '6px',
          marginRight: '10px',
          fontSize: '14px'
        }}
      />
      <button
        onClick={sendMessage}
        style={{
          padding: '10px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        Send
      </button>
    </div>
  </div>
</>
  );
}

export default CustomChatRoom;

