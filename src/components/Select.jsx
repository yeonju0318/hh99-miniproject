import React from "react";
import Button from "../components/Button";

function Select({ today }) {
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
  return (
    <div>
      <div className="say">
        <div>{today.body}</div>
      </div>

      <div className="select">
        <div className="flex justify-around">
          {today.tag.slice(0, 3).map((tag) => (
            <Button key={tag} size="small" color={getColor(tag)}>
              {tag}
            </Button>
          ))}
        </div>
        <div className="flex justify-around">
          {today.tag.slice(3).map((tag) => (
            <Button key={tag} size="small" color={getColor(tag)}>
              {tag}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Select;
