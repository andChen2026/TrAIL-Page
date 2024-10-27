import React from "react";
import "./Message.css";
function Message({ content} ) {
   return (
      <div className="content">
         <p className="text-msg">{content}</p>
      </div>
   );
}
export default Message;
