import React from "react";
import "../style.scss";
import Chat from "../components/Chat";
import Side from "../components/Side";

function Question() {
  return (
    <>
      <div className="question">
        <div className="container">
          <Side />
          <Chat />
        </div>
      </div>
    </>
  );
}

export default Question;
