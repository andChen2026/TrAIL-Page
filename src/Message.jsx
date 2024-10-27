import "./Message.css";
function message(content, sender) {
   const structure = { image, content };
   const image = sender == "user" ? "user" : "gemini";
   const ret = (
      <div className="content">
         <img src="./images/{image}.png" className="pfp" alt="" />
         <p className="text-msg"></p>
      </div>
   );
   return ret;
}
export default message;
