import axios from "axios";

 const getPreviousPost = (endCursor) =>
// endCursor 기준 이전 작성된 게시글을 불러온다
  axios.get(
    `${process.env.REACT_APP_SERVER_URL}/board?page=${
      endCursor - 1
    }&size=12&sort=createdAt,DESC`
  ); 
// ${process.env.REACT_APP_SERVER_URL}/board?page=${endCursor - 1}&size=12&sort=createdAt,DESC



export {getPreviousPost}