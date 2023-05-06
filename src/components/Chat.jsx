import React from "react";
import Messages from "./Messages";
import { FaRegHeart } from "react-icons/fa";

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="chatbtn">
          <FaRegHeart />
        </div>
      </div>
      <Messages />
    </div>
  );
}

export default Chat;
