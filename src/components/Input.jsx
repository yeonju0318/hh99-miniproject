import React from "react";

function Input() {
  return (
    <div className="input flex justify-between ">
      <input className="w-full mr-3 " type="text" placeholder="Type something..." />
      <div className="send">
        <button>Send</button>
      </div>
    </div>
  );
}

export default Input;
