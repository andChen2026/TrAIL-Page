import React, { useState } from "react";
import "./index.css";
import Message from "./Message";
export function ChatBot() {
   const [input, setInput] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [messages, setMessages] = useState([]);
   const handleSubmit = async (e) => {
      e.preventDefault();
      if (input.trim() === "") return;
      setIsLoading(true);
      setMessages([...messages, { content: input }]);
      if (input === "hello") {
         setMessages([...messages, { content: "hi" }]);
      } else {
         setMessages([...messages, { content: "I don't understand" }]);
      }
      setInput("");
      setIsLoading(false);
   };
   return (
      <div
         className="chatbot-container"
         style={{ fontFamily: "Roboto, sans-serif" }}
      >
         <h1 className="chatbot-title">
            Tr<span>AI</span>ls
         </h1>
         <hr />
         <div className="chatbot-messages">
            <ul>
               {messages.map((msg, index) => (
                  <Message key={index} content={msg.content} />
               ))}
            </ul>
         </div>
         <form onSubmit={handleSubmit} className="chatbot-form">
            <input
               type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Enter Information: (Sex, Age, BMI)"
               className="chatbot-input"
               style={{
                  backgroundColor: "#1A1A1A",
                  fontFamily: "Roboto, sans-serif",
               }}
            />
            <button
               type="submit"
               disabled={isLoading}
               className="chatbot-button"
            >
               Send
            </button>
         </form>
      </div>
   );
}
