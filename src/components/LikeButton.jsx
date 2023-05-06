import React, { useContext, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import AuthContext from "../hooks/useCurrentUser";
import useLoginModal from "../hooks/useLoginModal";




function LikeButton() {
  const {auth, setAuth } = useContext(AuthContext);

  const [hasLiked,setHasLiked] = useState(false);
  const toggleLike = () => {
    setHasLiked(!hasLiked)
  }

  return (
    <div 
    onClick={toggleLike}
    className="relative hover:opacity-80 transiton cursor-pointer">
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart size={24} className={
        hasLiked? 'fill-rose-500' : 'fill-neutral-500/70'
      }/>
    </div>
  );
}

export default LikeButton;
