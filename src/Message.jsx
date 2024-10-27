import "./Message.css";
function message(content) {
   const structure = content ;
   const ret = (
      <div className="content">
         <p className="text-msg">{content}</p>
      </div>
   );
   return ret;
}
export default message;
