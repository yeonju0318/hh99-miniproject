import React from "react";
import { useQueries } from "react-query";
import { getPosts, getUserLikes } from "../api/post";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import ListingCard from "../components/ListingCard";

function Main() {
  const [posts, userLikes] = useQueries([
    { queryKey: "posts", queryFn: getPosts },
    { queryKey: "userLikes", queryFn: getUserLikes },
  ], {
    refetchOnWindowFocus: false,
  });
  if (posts.isLoading) {
    return <div>로딩중입니다</div>;
  }

  if (posts.isError) {
    return <div>게시글을 불러오는데 오류가 발생했습니다.</div>;
  }

  if (posts.data?.length === 0 || posts.data === undefined) {
    return (
      <>
        <div className="md:ml-48 absolute inset-x-0 flex justify-center ">
          <EmptyState />
        </div>
      </>
    );
  } else {
    return (
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-6 gap-8">
          {posts.data.map((item) => {
            return (
              <>
                  <ListingCard
                    id={item.id}
                    feel={item?.feelTag}
                    weather={item?.weatherTag}
                    genre={item?.genreTag}
                    likeStatus={userLikes.data?.includes(item.id)}
                    likeCount={item?.likeCount}
                  />
              </>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default Main;
