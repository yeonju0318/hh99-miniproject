import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getDetailPost } from "../api/post";
import Chat from "../components/Chat";
import Rightbar from "../components/Rightbar";

function Detail() {
  const {id} = useParams()
  const { isLoading, isError, data: detailPost } = useQuery('detailPost', () => getDetailPost(Number(id)), {
    refetchOnWindowFocus: false,
  })


  if(isLoading){
    return <div>로딩중 입니다...</div>
  }

  if(isError){
    return <div>게시글을 가져오는 중 오류가 발생했습니다!</div>
  }

  return (
    <>
      <div className="question mt-3">
        <div className="container">
          <Chat detailPost={detailPost} detailPage={true} />
          <Rightbar detailPost={detailPost} />
        </div>
      </div>
    </>
  );
}

export default Detail;
