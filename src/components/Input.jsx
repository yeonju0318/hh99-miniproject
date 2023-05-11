import React from "react";
import axios from "axios";
import useFeelTag from "../hooks/useFeelTag";
import useGenreTag from "../hooks/useGenreTag";
import useWeatherTag from "../hooks/useWeatherTag";
import Cookies from "js-cookie";
import useAnswerGpt from "../hooks/useAnswerGpt";
import useInput from "../hooks/useInput";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Input() {
  const inputRef = useRef(null);

  const feelTag = useFeelTag();
  const GenreTag = useGenreTag();
  const WeatherTag = useWeatherTag();
  const { setAnswerGpt } = useAnswerGpt();
  const { inputText, setInputText } = useInput();

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
    } catch (error) {
      console.log(error);
    }
    inputRef.current.value = "";
    // 여기서 안에 text가 초기화 되버려서 message컴포넌트에서도 적용이 안됨
  };

  const onInputChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const onInputFocus = () => {
    if (!feelTag.feelTag || !GenreTag.GenreTag || !WeatherTag.WeatherTag) {
      toast.warning(
        <>
          <p>왼쪽 선택지를 누르고</p>
          <p>추가 질문을 입력해주세요!</p>
        </>,
        {
          position: "bottom-center",
          autoClose: 2000,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        }
      );
    }
  };

  return (
    <div className="input flex justify-between">
      <input
        ref={inputRef}
        className="w-full mr-3 "
        type="text"
        placeholder="Type something..."
        value={inputText.inputText}
        onChange={onInputChangeHandler}
        onFocus={onInputFocus}
        readOnly={
          !(
            // inputText.inputText &&
            (feelTag.feelTag && GenreTag.GenreTag && WeatherTag.WeatherTag)
          )
        }
      />
      <ToastContainer position="top-left" autoClose={3000} />
      <div className="send">
        <button onClick={onSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Input;
