import React, { useState } from "react";
import Messages from "./Messages";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Input from "./Input";

function Chat() {
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="chatbtn" onClick={likeHandler}>
          {isLiked ? <AiFillHeart size="20" /> : <AiOutlineHeart size="20" />}
        </div>
      </div>

      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
