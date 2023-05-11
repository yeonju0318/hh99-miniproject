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
import useGPTLoading from "../hooks/useGPTLoading";

function Input() {
  const inputRef = useRef(null);

  const feelTag = useFeelTag();
  const GenreTag = useGenreTag();
  const WeatherTag = useWeatherTag();
  const { setAnswerGpt } = useAnswerGpt();
  const { inputText, setInputText } = useInput();
  const GPTLoading = useGPTLoading()
  const onSendMessage = async () => {
    GPTLoading.onLoading()
    if (
      !feelTag.feelTag.text ||
      !GenreTag.GenreTag.text ||
      !WeatherTag.WeatherTag.text
    ) {
      toast.info(
        <>
          <p>모든 선택지를 눌러야</p>
          <p>메세지를 전송할 수 있습니다.</p>
        </>,
        {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        }
      );
      return;
    }

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
      toast.error("서버 통신 오류!");
    }
    GPTLoading.offLoading()

    inputRef.current.value = "";
  };

  const onInputChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const onInputFocus = () => {
    if (!feelTag.feelTag || !GenreTag.GenreTag || !WeatherTag.WeatherTag) {
      toast.warning(
        <>
          <p>모든 선택지를 누르고</p>
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
        placeholder="추가적으로 물어볼 내용을 적어주세요!"
        value={inputText.inputText}
        onChange={onInputChangeHandler}
        onFocus={onInputFocus}
        readOnly={
          !(
            (feelTag.feelTag && GenreTag.GenreTag && WeatherTag.WeatherTag)
          )
        }
      />
      <ToastContainer position="top-left" autoClose={3000} />
      <div className="send">
        <button onClick={onSendMessage}>Send</button>
      </div>
      <div>

      </div>
    </div>
    
  );
}

export default Input;
