import React, { useState } from "react";
import Container from "./Container";

function Categories() {
  const [feelTag, setFeelTag] = useState(null);
  const [weatherTag, setWeatherTag] = useState(null);
  const [genreTag, setGenreTag] = useState(null);

  const [onFeelTag, setOnFeelTag] = useState(false);
  const [onWeatherTag, setOnWeatherTag] = useState(false);
  const [onGenreTag, setOnGenreTag] = useState(false);

  const onChangeFeelTag = (e) => {
    setFeelTag(e.target.innerText);
    setOnFeelTag(false);
  };

  return (
    <div className="flex flex-col justify-center relative bg-white">
      <div className="pl-4 py-2 flex flex-row items-center justify-center overflow-x-auto border-y-[3px] border-stone-950 ">
        {feelTag === null ? (
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
          <div className="text-lg font-semibold cursor-pointer px-10 w-30">
            {feelTag}
          </div>
        )}

        {weatherTag === null ? (
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
          <div className="text-lg font-semibold cursor-pointer px-10 w-30">
            {weatherTag}
          </div>
        )}

        {genreTag === null ? (
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
          <div className="text-lg font-semibold cursor-pointer px-10 w-30">
            {genreTag}
          </div>
        )}

        <div
          onClick={() => {
            setFeelTag(null);
            setWeatherTag(null);
            setGenreTag(null);
            setOnFeelTag(false);
            setOnWeatherTag(false);
            setOnGenreTag(false);
          }}
        >
          리셋
        </div>
      </div>

      {/* 기분태그 */}
      <div
        className={`flex justify-center gap-20`}
        style={{ visibility: onFeelTag ? "visible" : "hidden" }}
      >
        {onFeelTag ? (
          <>
            <div className="falling-container flex justify-center gap-20">
              <div className="falling-item cursor-pointer" onClick={onChangeFeelTag}>
                기분1
              </div>
              <div className="falling-item cursor-pointer">기분</div>
              <div className="falling-item cursor-pointer">기분</div>
              <div className="falling-item cursor-pointer">기분</div>
              <div className="falling-item cursor-pointer">기분</div>
              <div className="falling-item cursor-pointer">기분</div>
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
                <div className="falling-item cursor-pointer" onClick={onChangeFeelTag}>
                  날씨
                </div>
                <div className="falling-item cursor-pointer">날씨</div>
                <div className="falling-item cursor-pointer">날씨</div>
                <div className="falling-item cursor-pointer">날씨</div>
                <div className="falling-item cursor-pointer">날씨</div>
                <div className="falling-item cursor-pointer">날씨</div>
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
                <div className="falling-item cursor-pointer" onClick={onChangeFeelTag}>
                  장르
                </div>
                <div className="falling-item cursor-pointer">장르</div>
                <div className="falling-item cursor-pointer">장르</div>
                <div className="falling-item cursor-pointer">장르</div>
                <div className="falling-item cursor-pointer">장르</div>
                <div className="falling-item cursor-pointer">장르</div>
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
