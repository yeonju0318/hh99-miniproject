import React from "react";
import Messages from "./Messages";
import Input from "./Input";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getDetailPost } from "../api/post";

function Chat({ detailPage }) {
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: detailPost,
  } = useQuery("detailPost", () => getDetailPost(Number(id)), {
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div>로딩중 입니다...</div>;
  }

  return (
    <div className="chat">
      <div className="chatInfo">
        {detailPage && (
          <div className="flex gap-4">
            <div className="flex text-white  text-xs items-center justify-center ">
              #{detailPost?.data?.feelTag}
            </div>
            <div className="flex text-white  text-xs items-center justify-center ">
              #{detailPost?.data?.weatherTag}
            </div>
            <div className="flex text-white  text-xs items-center justify-center ">
              #{detailPost?.data?.genreTag}
            </div>
          </div>
        )}
      </div>
      <Messages detailPage={detailPage} />
      {!detailPage && <Input />}
    </div>
  );
}

export default Chat;
