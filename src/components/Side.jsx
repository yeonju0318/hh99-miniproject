import React from "react";
import Sidenav from "./Sidenav";
import Select from "./Select";
import useFeelTag from "../hooks/useFeelTag";
import useGenreTag from "../hooks/useGenreTag";
import useWeatherTag from "../hooks/useWeatherTag";
import useAnswerGpt from "../hooks/useAnswerGpt";
import axios from "axios";
import Cookies from "js-cookie";

const Side = () => {
  const today = {
    Feel: {
      id: 1,
      body: "오늘의 기분은?",
      tag: ["기쁨", "슬픔", "분노", "불안", "사랑", "기대"],
    },
    Weather: {
      id: 2,
      body: "오늘의 날씨는?",
      tag: ["맑음", "흐림", "비", "눈", "폭풍"],
    },
    Genre: {
      id: 3,
      body: "듣고 싶은 노래는?",
      tag: ["K-pop", "Pop", "발라드", "힙합", "클래식", "자연"],
    },
  };

  const feelTag = useFeelTag();
  const GenreTag = useGenreTag();
  const WeatherTag = useWeatherTag();
  const { setAnswerGpt } = useAnswerGpt();

  const onShareButton = async () => {
    const message = {
      question: `${feelTag.feelTag.text}${GenreTag.GenreTag.text}${WeatherTag.WeatherTag.text}`,
      answer: "",
      feelTag: `${feelTag.feelTag}`,
      weatherTag: `${WeatherTag.WeatherTag}`,
      genreTag: `${GenreTag.GenreTag.text}`,
      startPoint: "",
      endPoint: "",
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/post`,
        message,
        {
          headers: {
            Access_Token: `Bearer ${Cookies.get("auth")}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="sidebar">
        <Sidenav />
        {/* <Search /> */}
        {Object.values(today).map((today) => (
          <Select key={today.id} item={today} />
        ))}
      </div>
      <div>
        <button>공유하기</button>
      </div>
    </div>
  );
};

export default Side;
