import React, { useContext } from "react";
import "../style.scss";
import Chat from "../components/Chat";
import Side from "../components/Side";
import Cookies from "js-cookie";
import axios from "axios";
import AuthContext from "../hooks/useCurrentUser";

function Question() {
  
  
  
  const { auth, setAuth } = useContext(AuthContext);



  const question = {
    question:
      "나는 오늘 너무 설레.오늘은 폭풍이 치는 날이야.나는 자연 소리를 듣고 싶어.친구가 없어서 그러는데 친구처럼 대해줘",
  };
  const newPost = {
    question: "나는 오늘 너무 설레.오늘은 폭풍이 치는 날이야.나는 자연 소리를 듣고 싶어.친구가 없어서 그러는데 친구처럼 대해줘",
    answer: "음, 설레는 기분= 같아요. 친구처럼 대해줘서 추천해줄Stay with me - 마크툽 (MAKTUB) - Marry Me - 볼빨간사춘기 - 여행 - AKMU - 어떻게 이별까지 사랑하겠어, 널 사랑하는 거지 이런 노래들이 친구처럼 대해줄 수 있을 것 같습니다. 즐거운 시간 보내세요!",
    feelTag: "LOVE",
    weatherTag: "STORM",
    genreTag: "NATURE",
  };
  // addPost
  const onSubmitPost = async () => {
    try {
      // 답변 요청하는 질문 
      const response = await axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/chat-gpt/question`,
          question,
          {
            headers: {
              Access_Token: `Bearer ${Cookies.get("auth")}`,
            },
          }
        )
        // 게시글 작성하는 코드
        .then(async (res) => {
          console.log(res.data.data);
          console.log(auth);
          console.log(Cookies.get("auth"))
          const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/post`,
            newPost,
            {
              headers: {
                Access_Token: `Bearer ${Cookies.get("auth")}`,
              },
            }
          );

          console.log(response.data.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button onClick={onSubmitPost}>테스트</button>
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
