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

// Detailpage 
    
// function Message({ detailPage }) {
//   const {id} = useParams()
//   const { isLoading, isError, data: detailPost } = useQuery('detailPost', () => getDetailPost(Number(id)), {
//     refetchOnWindowFocus: false,
//   })
  
//   if(isLoading){
//     return <div>로딩중입니다...</div>
//   }

//   const formattedQuestion = detailPost?.data?.question.split("\n").map((line, index) => (
//     <React.Fragment key={index}>
//       {line}
//       <br />
//     </React.Fragment>
//   ));

//   const formattedAnswer = detailPost?.data?.answer.split("\n").map((line, index) => (
//     <React.Fragment key={index}>
//       {line}
//       <br />
//     </React.Fragment>
//   ));

//   return (
//     <>
//       <div className="flex justify-end">
//         <div className="message">
//           <div className="messageOwner">
//             {detailPage ? <p>{formattedQuestion}</p> : <p>안녕!</p>}

          </div>
        </div>
      )}

      {props.message2 && (
        <div className="message">
          <div className="messageInfo">
            <img

              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9eEW7vaicuCPVfq9zxavCX4X8eI8N6ltjRS8j4csIGSeNRHE-3xDbpp6_4PPnvnb1UM&usqp=CAU"
              alt="user"
            />
          </div>
          <div className="messageContent">
            <p>{props.message2}</p>
          </div>
        </div>

      </div>
      <div className="message">
        <div className="messageInfo">
          <img
            src="https://i.namu.wiki/i/Trhh3NbX78ZqUJyFblACvejsfPNdAXXN8jQtPo10nSVq7Bk1ZvDKB9d1balCxMLeWXDbZ8U_R1XWhuIwI1dVFA.svg"
            alt="gpt"
          />
        </div>
        <div className="messageContent">
          {detailPage ? <p>{formattedAnswer}</p> : <p>안녕!</p>}
        </div>
      </div>
    </>
  );
}

export default Message;
