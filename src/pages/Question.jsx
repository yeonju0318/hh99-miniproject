import "../style.scss";
import Chat from "../components/Chat";
import Side from "../components/Side";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-hot-toast";

function Question() {
  const createFeelTag = () =>
    [
      ["기쁨", "HAPPY", "나는 오늘 너무 행복해."],
      ["슬픔", "SAD", "나는 오늘 너무 슬퍼."],
      ["분노", "ANGER", "나는 오늘 너무 화나."],
      ["불안", "ANXIETY", "나는 오늘 너무 불안해."],
      ["사랑", "LOVE", "나는 오늘 너무 설레."],
      ["기대", "EXPECT", "나는 오늘 너무 기대돼."],
    ][Math.floor(Math.random() * 6)];
  const createWeatherTag = () =>
    [
      ["맑음", "SUN", "오늘은 화창한 날씨야."],
      ["흐림", "CLOUD", "오늘은 흐린 날씨야."],
      ["비", "RAIN", "오늘은 비가 오는 날이야."],
      ["눈", "SNOW", "오늘은 눈이 오는 날이야."],
      ["폭풍", "STORM", "오늘은 폭풍이 치는 날이야."],
    ][Math.floor(Math.random() * 5)];
  const createGenreTag = () =>
    [
      ["K-pop", "K-POP", "나는 케이팝을 듣고 싶어."],
      ["Pop", "POP", "나는 팝을 듣고 싶어."],
      ["발라드", "BALLAD", "나는 발라드를 듣고 싶어."],
      ["힙합", "HIPHOP", "나는 힙합을 듣고 싶어."],
      ["클래식", "CLASSIC", "나는 클래식을 듣고 싶어."],
      ["자연", "NATURE", "나는 자연 소리를 듣고 싶어."],
    ][Math.floor(Math.random() * 6)];

  // addPost
  const onSubmitPost = async () => {
    try {
      // 답변 요청하는 질문
      let feelTag = createFeelTag();
      let weatherTag = createWeatherTag();
      let genreTag = createGenreTag();
      const question = {
        question: `${feelTag[2]}\n${weatherTag[2]}\n${genreTag[2]}`,
      };
      await axios
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
          console.log(res.data.data.answer);
          const newPost = {
            question: question.question,
            answer: res.data.data.answer,
            feelTag: feelTag[1],
            weatherTag: weatherTag[1],
            genreTag: genreTag[1],
          };
          await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/post`,
            newPost,
            {
              headers: {
                Access_Token: `Bearer ${Cookies.get("auth")}`,
              },
            }
          );
          toast.success('게시글 작성 완료!');
        });
    } catch (err) {
      toast.error(err.response.data.message);
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
