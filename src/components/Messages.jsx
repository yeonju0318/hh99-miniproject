import React from "react";
import Message from "./Message";
import useFeelTag from "../hooks/useFeelTag";
import useGenreTag from "../hooks/useGenreTag";
import useWeatherTag from "../hooks/useWeatherTag";
import useAnswerGpt from "../hooks/useAnswerGpt";
import { useEffect } from "react";
import { useState } from "react";
import useInput from "../hooks/useInput";
import { getDetailPost } from "../api/post";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

function Messages({ detailPage }) {
  const feelTag = useFeelTag();
  const GenreTag = useGenreTag();
  const WeatherTag = useWeatherTag();
  const { answer } = useAnswerGpt();
  const [message, setMessage] = useState(null);
  const inputState = useInput();
  const inputText = inputState.inputText;

  useEffect(() => {
    if (
      feelTag.feelTag.text ||
      GenreTag.GenreTag.text ||
      WeatherTag.WeatherTag.text ||
      answer
    ) {
      setMessage(
        <div>
          {feelTag.feelTag.text && <div>{feelTag.feelTag.text}</div>}
          {WeatherTag.WeatherTag.text && (
            <div>{WeatherTag.WeatherTag.text}</div>
          )}
          {GenreTag.GenreTag.text && <div>{GenreTag.GenreTag.text}</div>}
          {inputText && <div>{inputText}</div>}
        </div>
      );
    } else {
      setMessage(null);
    }
  }, [feelTag, GenreTag, WeatherTag, answer]);

  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: detailPost,
  } = useQuery("detailPost", () => getDetailPost(Number(id)), {
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div>로딩중입니다...</div>;
  }

  const formattedQuestion = detailPost?.data?.question
    .split("\n")
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

  const formattedAnswer = detailPost?.data?.answer
    .split("\n")
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

  return (
    <div className="messages">
      <Message message1="안녕!" message2="안녕!" />
      <Message
        message1={detailPage ? formattedQuestion : message}
        message2={detailPage ? formattedAnswer : answer}
      />
    </div>
  );
}

export default Messages;
