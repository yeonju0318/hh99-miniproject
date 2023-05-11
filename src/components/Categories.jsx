import React, { useState } from "react";
import useFeelCategories from "../hooks/useFeelCategories";
import useGenreCategories from "../hooks/useGenreCategories";
import useWeatherCategories from "../hooks/useWeatherCategories";

function Categories() {
  const feelCategories = useFeelCategories();
  const weatherCategories = useWeatherCategories();
  const genreCategories = useGenreCategories();

  const [feelTag, setFeelTag] = useState(null);
  const [weatherTag, setWeatherTag] = useState(null);
  const [genreTag, setGenreTag] = useState(null);

  const [onFeelTag, setOnFeelTag] = useState(false);
  const [onWeatherTag, setOnWeatherTag] = useState(false);
  const [onGenreTag, setOnGenreTag] = useState(false);

  const feelArr = [
    ["행복", "HAPPY"],
    ["슬픔", "SAD"],
    ["화남", "ANGER"],
    ["불안", "ANSIETY"],
    ["설렘", "LOVE"],
    ["기대", "EXPECT"],
  ];
  const weatherArr = ["맑음", "흐림", "비옴", "눈옴", "폭풍"];
  const genreArr = ["K-POP", "POP", "발라드", "힙합", "클래식", "자연"];

  const onChangeFeelTag = (e) => {
    setFeelTag(e.target.innerText);
    switch (e.target.innerText) {
      case "행복":
        feelCategories.setFeelCategories("HAPPY");
        setOnFeelTag(false);
        break;
      case "슬픔":
        feelCategories.setFeelCategories("SAD");
        setOnFeelTag(false);
        break;
      case "화남":
        feelCategories.setFeelCategories("ANGER");
        setOnFeelTag(false);
        break;
      case "불안":
        feelCategories.setFeelCategories("ANSIETY");
        setOnFeelTag(false);
        break;
      case "설렘":
        feelCategories.setFeelCategories("LOVE");
        setOnFeelTag(false);
        break;
      case "기대":
        feelCategories.setFeelCategories("EXPECT");
        setOnFeelTag(false);
        break;
    }
  };

  const onChangeWeatherTag = (e) => {
    setWeatherTag(e.target.innerText);
    switch (e.target.innerText) {
      case "맑음":
        weatherCategories.setWeatherCategories("SUN");
        setOnWeatherTag(false);
        break;
      case "흐림":
        weatherCategories.setWeatherCategories("CLOUD");
        setOnWeatherTag(false);
        break;
      case "비옴":
        weatherCategories.setWeatherCategories("RAIN");
        setOnWeatherTag(false);
        break;
      case "눈옴":
        weatherCategories.setWeatherCategories("SNOW");
        setOnWeatherTag(false);
        break;
      case "폭풍":
        weatherCategories.setWeatherCategories("STORM");
        setOnWeatherTag(false);
        break;
    }
  };

  const onChangeGenreTag = (e) => {
    setGenreTag(e.target.innerText);
    switch (e.target.innerText) {
      case "K-POP":
        genreCategories.setGenreCategories("K_POP");
        setOnGenreTag(false);
        break;
      case "POP":
        genreCategories.setGenreCategories("POP");
        setOnGenreTag(false);
        break;
      case "발라드":
        genreCategories.setGenreCategories("BALLAD");
        setOnGenreTag(false);
        break;
      case "힙합":
        genreCategories.setGenreCategories("HIPHOP");
        setOnGenreTag(false);
        break;
      case "클래식":
        genreCategories.setGenreCategories("CLASSIC");
        setOnGenreTag(false);
        break;
      case "자연":
        console.log(genreCategories.genreCategories)
        genreCategories.setGenreCategories("NATURE");
        setOnGenreTag(false);
        break;
    }
  };

  return (
    <div className="flex flex-col justify-center relative bg-white">
      <div className="pl-20 py-2 flex flex-row items-center justify-center overflow-x-auto border-y-[3px] border-stone-950 ">
        {feelCategories.feelCategories === null ? (
          <div
            onClick={() => {
              onFeelTag ? setOnFeelTag(false) : setOnFeelTag(true);
              setOnWeatherTag(false);
              setOnGenreTag(false);
            }}
            className="text-lg font-semibold cursor-pointer px-10 w-30"
          >
            기분
          </div>
        ) : (
          <div
            onClick={() => {
              onFeelTag ? setOnFeelTag(false) : setOnFeelTag(true);
              setOnWeatherTag(false);
              setOnGenreTag(false);
            }}
            className="text-lg font-semibold cursor-pointer px-10 w-30"
          >
            {feelTag}
          </div>
        )}

        {weatherCategories.weatherCategories === null ? (
          <div
            onClick={() => {
              onWeatherTag ? setOnWeatherTag(false) : setOnFeelTag(false);
              setOnWeatherTag(true);
              setOnGenreTag(false);
            }}
            className="text-lg font-semibold cursor-pointer px-10 w-30"
          >
            날씨
          </div>
        ) : (
          <div
            onClick={() => {
              onWeatherTag ? setOnWeatherTag(false) : setOnFeelTag(false);
              setOnWeatherTag(true);
              setOnGenreTag(false);
            }}
            className="text-lg font-semibold cursor-pointer px-10 w-30"
          >
            {weatherTag}
          </div>
        )}

        {genreCategories.genreCategories === null ? (
          <div
            onClick={() => {
              onGenreTag ? setOnGenreTag(false) : setOnFeelTag(false);
              setOnWeatherTag(false);
              setOnGenreTag(true);
            }}
            className="text-lg font-semibold cursor-pointer px-10 w-30"
          >
            장르
          </div>
        ) : (
          <div
            onClick={() => {
              onGenreTag ? setOnGenreTag(false) : setOnFeelTag(false);
              setOnWeatherTag(false);
              setOnGenreTag(true);
            }}
            className="text-lg font-semibold cursor-pointer px-10 w-30"
          >
            {genreTag}
          </div>
        )}

        <div
          className=" cursor-pointer"
          onClick={() => {
            feelCategories.setFeelCategories(null);
            weatherCategories.setWeatherCategories(null);
            genreCategories.setGenreCategories(null);
            setFeelTag(null);
            setWeatherTag(null);
            setGenreTag(null);
            setOnFeelTag(false);
            setOnWeatherTag(false);
            setOnGenreTag(false);
          }}
        >
          필터링 리셋!
        </div>
      </div>

      {/* 기분태그 */}
      <div
        className={`flex justify-center gap-20 mt-2`}
        style={{ visibility: onFeelTag ? "visible" : "hidden" }}
      >
        {onFeelTag ? (
          <>
            <div className="falling-container flex justify-center gap-20">
              {feelArr.map((item, i) => (
                <div
                  key={i}
                  className="falling-item cursor-pointer"
                  onClick={onChangeFeelTag}
                >
                  {item[0]}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>ㅇ</div>
        )}
        {/* 날씨 */}
        <div
          className={`flex justify-center gap-20`}
          style={{ visibility: onWeatherTag ? "visible" : "hidden" }}
        >
          {onWeatherTag ? (
            <>
              <div className="falling-container flex justify-center gap-20">
                {weatherArr.map((item, i) => (
                  <div
                    key={i}
                    className="falling-item cursor-pointer"
                    onClick={onChangeWeatherTag}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div>ㅇ</div>
          )}
        </div>
        {/* 장르 */}
        <div
          className={`flex justify-center gap-20`}
          style={{ visibility: onGenreTag ? "visible" : "hidden" }}
        >
          {onGenreTag ? (
            <>
              <div className="falling-container flex justify-center gap-20">
                {genreArr.map((item, i) => (
                  <div
                    key={i}
                    className="falling-item cursor-pointer"
                    onClick={onChangeGenreTag}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div>ㅇ</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
