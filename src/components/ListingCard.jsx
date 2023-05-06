import React from "react";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";

function ListingCard() {
  return (
    <Link to="#">
      <div className="flex flex-col gap-2 w-full bg-rose-500">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <img
            alt="card"
            className="object-cover h-full w-full group-hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <LikeButton />
          </div>
        </div>
        <div className="font-semibold text-lg text-black">제목123123123</div>
        <div className="font-light text-neutral-500">내용12312312</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">
            ddd
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ListingCard;
