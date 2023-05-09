import React from "react";
import Message from "./Message";

function Messages({detailPage}) {
  return (
    <div className="messages">
      <Message />
      <Message detailPage={detailPage} />
    </div>
  );
}

export default Messages;
