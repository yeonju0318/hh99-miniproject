import React from "react";
import Container from "./Container";

function Categories() {
  return (
    <Container>
      <div className="py-1 flex flex-row items-center justify-center overflow-x-auto gap-10 lg:mr-24 md:mr-20 sm:mr-0">
        <button>기분</button>
        <button>날씨</button>
        <button>장르</button>
      </div>
    </Container>
  );
}

export default Categories;
