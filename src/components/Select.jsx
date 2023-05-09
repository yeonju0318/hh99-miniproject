import React, { useState } from "react";
import Button from "../components/Button";
import useFeelTag from "../hooks/useFeelTag";
import useGenreTag from "../hooks/useGenreTag";
import useWeatherTag from "../hooks/useWeatherTag";

function Select({ item }) {
  const getColor = (tag) => {
    switch (tag) {
      case "기쁨":
      case "맑음":
      case "클래식":
        return "Orange";
      case "슬픔":
      case "비":
      case "발라드":
        return "Blue";
      case "분노":
      case "흐림":
      case "힙합":
        return "Red";
      case "불안":
      case "폭풍":
      case "K-Pop":
        return "Purple";
      case "사랑":
      case "Pop":
        return "Yellow";
      case "기대":
      case "눈":
      case "자연":
        return "Green";
    }
  };

  const GenreTag = useGenreTag();
  const onClickGenreTag = (tag) => {
    GenreTag.setGenreTag(tag);
  };

  const WeatherTag = useWeatherTag();
  const onClickWeatherTag = (tag) => {
    WeatherTag.setWeatherTag(tag);
  };

  const feelTag = useFeelTag();
  const onClickFeelTag = (tag) => {
    let feel;
    let weather;
    let genre;
    switch (item.id) {
      case 1:
        switch (tag) {
          case "기쁨":
            feel = {
              name: "기쁨",
              tag: "HAPPY",
              text: "나는 오늘 너무 행복해.",
            };
            feelTag.setFeelTag(feel);
            break;
          case "슬픔":
            feel = {
              name: "슬픔",
              tag: "SAD",
              text: "나는 오늘 너무 슬퍼.",
            };
            feelTag.setFeelTag(feel);
            break;
          case "분노":
            feel = {
              name: "분노",
              tag: "ANGER",
              text: "나는 오늘 너무 화나.",
            };
            feelTag.setFeelTag(feel);
            break;
          case "불안":
            feel = {
              name: "불안",
              tag: "ANXIETY",
              text: "나는 오늘 너무 불안해.",
            };
            feelTag.setFeelTag(feel);
            break;
          case "사랑":
            feel = {
              name: "사랑",
              tag: "LOVE",
              text: "나는 오늘 너무 설레.",
            };
            feelTag.setFeelTag(feel);
            break;
          case "기대":
            feel = {
              name: "기대",
              tag: "EXPECT",
              text: "나는 오늘 너무 기대돼.",
            };
            feelTag.setFeelTag(feel);
            break;
        }
        break;
      case 2:
        switch (tag) {
          case "맑음":
            weather = {
              name: "맑음",
              tag: "SUN",
              text: "오늘은 화창한 날씨야.",
            };
            WeatherTag.setWeatherTag(weather);
            break;
          case "흐림":
            weather = {
              name: "흐림",
              tag: "CLOUD",
              text: "오늘은 흐린 날씨야.",
            };
            WeatherTag.setWeatherTag(weather);
            break;
          case "비":
            weather = {
              name: "비",
              tag: "RAIN",
              text: "오늘은 비가 오는 날이야.",
            };
            WeatherTag.setWeatherTag(weather);
            break;
          case "눈":
            weather = {
              name: "눈",
              tag: "SNOW",
              text: "오늘은 눈이 오는 날이야.",
            };
            WeatherTag.setWeatherTag(weather);
            break;
          case "폭풍":
            weather = {
              name: "폭풍",
              tag: "STORM",
              text: "오늘은 폭풍이 치는 날이야.",
            };
            WeatherTag.setWeatherTag(weather);
            break;
        }
        break;

      case 3:
        switch (tag) {
          case "K-pop":
            genre = {
              name: "K-pop",
              tag: "K-POP",
              text: "나는 케이팝을 듣고 싶어.",
            };
            GenreTag.setGenreTag(genre);
            break;
          case "Pop":
            genre = {
              name: "Pop",
              tag: "POP",
              text: "나는 팝을 듣고 싶어.",
            };
            GenreTag.setGenreTag(genre);
            break;
          case "발라드":
            genre = {
              name: "발라드",
              tag: "BALLAD",
              text: "나는 발라드를 듣고 싶어.",
            };
            GenreTag.setGenreTag(genre);
            break;
          case "자연":
            genre = {
              name: "자연",
              tag: "NATURE",
              text: "나는 자연 소리를 듣고 싶어.",
            };
            GenreTag.setGenreTag(genre);
            break;
          case "힙합":
            genre = {
              name: "힙합",
              tag: "HIPHOP",
              text: "나는 힙합을 듣고 싶어.",
            };
            GenreTag.setGenreTag(genre);
            break;
          case "클래식":
            genre = {
              name: "클래식",
              tag: "CLASSIC",
              text: "나는 클래식을 듣고 싶어.",
            };
            GenreTag.setGenreTag(genre);
            break;
        }

      default:
        break;
    }
  };

  return (
    <div>
      <div className="say">
        <div>{item.body}</div>
      </div>

      <div className="select">
        <div className="flex justify-around">
          {item.tag.slice(0, 3).map((tag) => (
            <Button
              key={tag}
              size="small"
              color={getColor(tag)}
              onClick={() => {
                onClickFeelTag(tag);
              }}
            >
              {tag}
            </Button>
          ))}
        </div>
        <div className="flex justify-around">
          {item.tag.slice(3).map((tag) => (
            <Button
              key={tag}
              size="small"
              color={getColor(tag)}
              onClick={() => {
                onClickFeelTag(tag);
              }}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Select;
