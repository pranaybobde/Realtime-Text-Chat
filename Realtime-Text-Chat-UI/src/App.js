// import logo from './logo.svg';
import './App.css';

import ChatRoom from './ChatRoom';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <ChatRoom />
  );
}

export default App;


// src/App.jsx
// import React from 'react';
// import { LiveKitRoom, Chat, ControlBar } from '@livekit/components-react';
// import '@livekit/components-styles';

// const serverUrl = 'http://localhost:7880';
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibXkgbmFtZSIsInZpZGVvIjp7InJvb21Kb2luIjp0cnVlLCJyb29tIjoibXktcm9vbSIsImNhblB1Ymxpc2giOnRydWUsImNhblN1YnNjcmliZSI6dHJ1ZSwiY2FuUHVibGlzaERhdGEiOnRydWV9LCJzdWIiOiJpZGVudGl0eSIsImlzcyI6IkFQSW53QVpRckc5dnZNayIsIm5iZiI6MTc0Nzk4ODczOCwiZXhwIjoxNzQ4MDEwMzM4fQ.HiNQoG_yg4rN3ji68kC6y9oG8McJ3fFI5e9p1eWxpBY';

// function App() {
//   return (
//     <LiveKitRoom
//       serverUrl={serverUrl}
//       token={token}
//       connect={true}
//       data-lk-theme="default"
//       style={{ height: '100vh' }}
//     >
//       <Chat />
//       <ControlBar />
//     </LiveKitRoom>
//   );
// }

// export default App;
