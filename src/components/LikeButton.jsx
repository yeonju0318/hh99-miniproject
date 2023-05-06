import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function LikeButton() {
  return (
    <div className="relative hover:opacity-80 transiton cursor-pointer">
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart size={24} className="fill-neutral-500/70" />
    </div>
  );
}

export default LikeButton;
