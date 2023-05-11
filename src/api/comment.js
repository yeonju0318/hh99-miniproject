import axios from "axios";
import Cookies from "js-cookie";

const getComment = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/comment`
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

const addComment = async (payload) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/comment/${payload.postId}`,

      { content: payload.content },
      
      {
        headers: {
          Access_Token: `Bearer ${Cookies.get("auth")}`,
        },
      }
    );
  } catch (error) {
    console.log(error.response.data.message);
  }
};

const deleteComment = async (commentId) => {
  try {
    await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/comment/${commentId}`,
      {
        headers: {
          Access_Token: `Bearer ${Cookies.get("auth")}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const updateComment = async (payload) => {
  try {
    await axios.put(
      `${process.env.REACT_APP_SERVER_URL}/comment/${payload.commentId}`,
      {content: payload.content},
      {
        headers: {
          Access_Token: `Bearer ${Cookies.get("auth")}`,
        },
      }
    );
  } catch (error) {
    console.log(error.response);
  }
};

export { getComment, addComment, deleteComment, updateComment };
