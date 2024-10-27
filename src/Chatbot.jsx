import React, { useState } from "react";
import "./index.css";
import "./Message";

export function ChatBot() {
   const [input, setInput] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!input.trim()) return;

      setMessages((prev) => [...prev, { role: "user", content: input }]);
      setInput("");
      setIsLoading(true);

      // Simulating API call
      try {
         const response = await fetch("https://api.example.com/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input }),
         });
         const data = await response.json();
         setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
      } catch (error) {
         console.error("Error:", error);
         setMessages((prev) => [
            ...prev,
            { role: "bot", content: "Sorry, I encountered an error." },
         ]);
      } finally {
         setIsLoading(false);
      }
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
         <div className="chatbot-messages"><ul></ul></div>
         <form onSubmit={handleSubmit} className="chatbot-form">
            <input
               type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Enter Information: (Sex, Age, BMI)"
               className="chatbot-input"
               style={{
                  backgroundColor: "#1a1a1a",
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
