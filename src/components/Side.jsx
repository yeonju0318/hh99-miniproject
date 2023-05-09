import React from "react";
import Sidenav from "./Sidenav";
// import Search from "./Search";
import Select from "./Select";
import axios from "axios";
import useFeelTag from "../hooks/useFeelTag";

const Side = () => {
  const question = {
    question:
      "나는 오늘 슬퍼. 오늘은 비가 많이 왔어. 클래식 음악을 듣고싶은데 몇개 추천해줘.",
  };

  const onQuestionHandler = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/chat-gpt/question`,
        question,
        {
          headers: {
            Access_Token: `Bearer`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const today = [
    {
      id: 1,
      body: "오늘의 기분은?",
      tag: ["기쁨", "슬픔", "분노", "불안", "사랑", "기대"],
    },
    {
      id: 2,
      body: "오늘의 날씨는?",
      tag: ["맑음", "흐림", "비", "눈", "폭풍"],
    },
    {
      id: 3,
      body: "듣고 싶은 노래는?",
      tag: ["K-pop", "Pop", "발라드", "힙합", "클래식", "자연"],
    },
  ];

  return (
    <div className="sidebar flex flex-col justify-between">
      <div className="flex flex-col justify-around">
        <Sidenav />
        {/* <Search /> */}
        {today?.map((item) => (
          <Select key={item.id} today={item} />
        ))}
      </div>
      <div >
        <button className="w-full bg-violet-300 py-3 text-lg" onClick={onQuestionHandler}>공유하기</button>
      </div>
    </div>
  );
};

export default Side;
