import React from "react";

function Message() {
  return (
    <>
      <div className="message">
        <div className="messageInfo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9eEW7vaicuCPVfq9zxavCX4X8eI8N6ltjRS8j4csIGSeNRHE-3xDbpp6_4PPnvnb1UM&usqp=CAU"
            alt=""
          />
        </div>
        <div className="messageContent">
          <p>hello</p>
        </div>
      </div>
      
      <div className="flex justify-end">
        <div className="message">
          <div className="messageOwner">
            <p>hello</p>
          </div>
          <div className="messageInfo">
            <img
              src="https://i.namu.wiki/i/Trhh3NbX78ZqUJyFblACvejsfPNdAXXN8jQtPo10nSVq7Bk1ZvDKB9d1balCxMLeWXDbZ8U_R1XWhuIwI1dVFA.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
