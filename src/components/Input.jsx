import React from "react";
import axios from "axios";
import { useState } from "react";
import useFeelTag from "../hooks/useFeelTag";
import useGenreTag from "../hooks/useGenreTag";
import useWeatherTag from "../hooks/useWeatherTag";
import Cookies from "js-cookie";
import useAnswerGpt from "../hooks/useAnswerGpt";
import useInput from "../hooks/useInput";

function Input() {
  // const [inputText, setInputText] = useState("");
  // const [isQuestionbyButton, setIsQuestionbyButton] = useState(false);

  const feelTag = useFeelTag();
  const GenreTag = useGenreTag();
  const WeatherTag = useWeatherTag();
  const { setAnswerGpt } = useAnswerGpt();
  const {inputText, setInputText} = useInput();

  const onSendMessage = async () => {
    const messageText = `${feelTag.feelTag.text}${GenreTag.GenreTag.text}${WeatherTag.WeatherTag.text}${inputText}`;
    const message = {
      question: messageText,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/chat-gpt/question`,
        message,
        {
          headers: {
            Access_Token: `Bearer ${Cookies.get("auth")}`,
          },
        }
      );
      console.log(response.data);
      setAnswerGpt(response.data.data.answer);
      // setInputText("");
    } catch (error) {
      console.log(error);
    }
    // setInputText("");
    // 여기서 안에 text가 초기화 되버려서 message컴포넌트에서도 적용이 안됨
  };

  const onInputChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="input flex justify-between">
      <input
        className="w-full mr-3 "
        type="text"
        placeholder="Type something..."
        value={inputText.inputText}
        onChange={onInputChangeHandler}
        readOnly={
          !(
            // inputText.inputText &&
            (feelTag.feelTag && GenreTag.GenreTag && WeatherTag.WeatherTag)
          )
        }
      />

      <div className="send">
        <button onClick={onSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Input;
