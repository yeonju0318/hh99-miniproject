import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getDetailPost } from "../api/post";

function Message(props) {
  // console.log(feelTag);

  return (
    <>
      {props.message1 && (
        <div className="flex justify-end">
          <div className="message">
            <div className="messageOwner">
              <p>{props.message1}</p>
            </div>
            <div className="messageInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9eEW7vaicuCPVfq9zxavCX4X8eI8N6ltjRS8j4csIGSeNRHE-3xDbpp6_4PPnvnb1UM&usqp=CAU"
                alt=""
              />
            </div>
          </div>
        </div>
      )}

      {props.message2 && (
        <div className="message">
          <div className="messageInfo">
            <img
              src="https://sazan.cafe24.com/character/hopan-man/hopangmen_1.jpg"
              alt="user"
            />
          </div>
          <div className="messageContent">
            <p>{props.message2}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Message;
