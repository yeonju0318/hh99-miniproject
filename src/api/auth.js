import axios from "axios";

// 회원가입
const addUser = async (newUser) => {
  try {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/member/register`, newUser);
    return alert("회원가입 성공!");
  } catch (error) {
    console.log(error);
  }
};

// 프로필 사진 변경
const changeProfile = async () => {
  try {
    
  } catch (error) {
    
  }
}


export { addUser, changeProfile };
