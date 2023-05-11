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
  const inputText = useInput();

  const onSendMessage = async () => {
    let messageText = "";
    if (inputText.inputText) {
      messageText = `${inputText.inputText}`;
    } else {
      messageText = `${feelTag.feelTag.text}${GenreTag.GenreTag.text}${WeatherTag.WeatherTag.text}`;
    }

    console.log (feelTag.feelTag.text)
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
      inputText.setInputText("");
    } catch (error) {
      console.log(error);
    }
  };

  // const onInputChangeHandler = (e) => {
  //   setInputText(e.target.value);
  // };

  return (

    <div className="input flex justify-between">
      <input
      
    className={`w-full mr-3 ${feelTag?.feelTag?.length ===0 ||GenreTag?.GenreTag?.length ===0 || WeatherTag?.WeatherTag?.length ===0 ?  "pointer-events-none opacity-50" : ""}`}
        type="text"
        placeholder="Type something..."
        // onChange={onInputChangeHandler}
      />

      <div className="send">
        <button onClick={onSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Input;
