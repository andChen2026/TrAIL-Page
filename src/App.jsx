import React from "react"
import { ChatBot } from "./Chatbot"

function App() {
  return (
    <div className="outer-wrapper" style={{
      minHeight: '70vh',
      maxHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '50px 100px 10px 40px',
      backgroundColor: 'black',
      width: '300%',
      margin: '0% 0% 0% 40%',
      border: '1px solid black',
      borderRadius: '60pt'
    }}>
      <ChatBot />
    </div>
  )
}

export default App
