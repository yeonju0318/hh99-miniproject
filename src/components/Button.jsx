import React from "react";
import styled from "styled-components";

function Button({ size, color, onClick, children }) {
  const Btn = styled.div`
    ${({ color }) => {
      switch (color) {
        case "Red":
          return `
            border: 3px solid #f87171;
            background-color: #f87171;
            color: white;
          `;
        case "Purple":
          return `
          border: 3px solid #c084fc;
          background-color: #c084fc;
          color: white;
          `;
        case "Blue":
          return `
          border: 3px solid #60a5fa;
          background-color: #60a5fa;
          color: white;
          `;
        case "Yellow":
          return `
          border: 3px solid #facc15;
          background-color: #facc15;
          color: white;
          `;
        case "Green":
          return `
          border: 3px solid #4ade80;
          background-color: #4ade80;
          color: white;
          `;
        case "Orange":
          return `
          border: 3px solid #fb923c;
          background-color: #fb923c;
          color: white;
          `;
        default:
          return `
          background-color: #a1a1aa;
          color: white;
          `;
      }
    }}
    ${({ size }) => {
      switch (size) {
        case "small":
          return `width: 45px; height: 25px; font-weight:500`;
        case "medium":
          return `width: 120px; height: 40px; font-weight:500;`;
        case "large":
          return `width: 185px; height: 45px; font-weight: bold; background-color: white;color: black;`;
      }
    }};
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
    &:active {
      filter: brightness(60%);
    }
  `;

  return (
    <Btn size={size} color={color} onClick={onClick}>
      {children}
    </Btn>
  );
}

export default Button;
