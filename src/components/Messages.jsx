import React from "react";
import Message from "./Message";
import useFeelTag from "../hooks/useFeelTag";
import useGenreTag from "../hooks/useGenreTag";
import useWeatherTag from "../hooks/useWeatherTag";
import useAnswerGpt from "../hooks/useAnswerGpt";
import { useEffect } from "react";
import { useState } from "react";
import useInput from "../hooks/useInput";

function Messages() {
  const feelTag = useFeelTag();
  const GenreTag = useGenreTag();
  const WeatherTag = useWeatherTag();
  const { answer } = useAnswerGpt();
  const [message, setMessage] = useState(null);
  const inputText = useInput((state) => state.inputText);

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

  return (
    <div className="messages">
      <Message message1="안녕!" message2="안녕!" />
      <Message message1={message} message2={answer} />
    </div>
  );
}

export default Messages;
