import React from "react";

function CategoryBox({ icon, label, selected }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
    ${selected ? "border-b-neutral-800" : "border-transparent"}
    `}
    >
      CategoryBox
    </div>
  );
}

export default CategoryBox;
