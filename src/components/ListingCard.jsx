import React from "react";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";

function ListingCard() {
  return (
    <div className="group col-span-1 cursor-pointer">
      <Link to="#"

      >
        <div className="flex flex-col gap-2 w-full ">
          <div className="aspect-square w-full relative overflow-hidden rounded-xl">
            <img
              alt="card"
              src="https://velog.velcdn.com/images/heelieben/post/3c15c708-c5b2-404e-858e-138241e90d77/image.png"
              className="object-cover h-full w-full group-hover:scale-110 transition"
            />
            <div className="absolute top-3 right-3">
              <LikeButton />
            </div>
          </div>
          <div className="font-semibold text-lg text-black">제목123123123</div>
          <div className="font-light text-neutral-500">내용12312312</div>
          <div className="flex flex-row items-center gap-1">
            <div className="font-semibold">ddd</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ListingCard;
