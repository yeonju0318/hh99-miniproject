import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useMutation, useQueryClient } from "react-query";
import { getUserLikes } from "../api/post";

function LikeButton({ likeStatus, likeCount, id, likeLists }) {
  const [hasLiked, setHasLiked] = useState(likeStatus);
  const [prevlikeCount, setPrevLikeCount] = useState(likeCount);

  const queryClient = useQueryClient();
  const likeMutation = useMutation(getUserLikes, {
    onSuccess: () => {
      queryClient.invalidateQueries("userLikes");
    },
  });

  const toggleLike = async (e) => {
    const user = localStorage.getItem("user");
    const authCookie = Cookies.get("auth");

    console.log(user);
    console.log(!authCookie);

    if (user && !authCookie) {
      localStorage.removeItem("user");
      window.location.replace("/");
      return alert("세션이 만료되었습니다. 다시 로그인해주세요!");
    }
    if (Cookies.get("auth") === undefined) {
      e.preventDefault();
      localStorage.removeItem("user");
      window.location.replace("/");
      return alert("로그인이 필요한 기능입니다!");
    }
    if (hasLiked) {
      // 좋아요 취소
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/like/${id}`,
          {},
          {
            headers: {
              Access_Token: `Bearer ${Cookies.get("auth")}`,
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
      likeMutation.mutate();
      setHasLiked(false);
      let newLikeCount = prevlikeCount - 1;
      setPrevLikeCount(newLikeCount);
    } else {
      // 좋아요 +1
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/like/${id}`,
          {},
          {
            headers: {
              Access_Token: `Bearer ${Cookies.get("auth")}`,
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
      likeMutation.mutate();
      setHasLiked(true);
      let newLikeCount = prevlikeCount + 1;
      setPrevLikeCount(newLikeCount);
    }
  };

  return (
    <div
      onClick={toggleLike}
      className="relative hover:opacity-80 transiton cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={hasLiked ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
}

export default LikeButton;
