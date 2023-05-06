import axios from "axios";
import Cookies from "js-cookie";

const addUser = async (newUser) => {
  try {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/member`, newUser);
    return alert("회원가입 성공!");
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (user) => {
  try {
    const response = await axios.post(`http://3.38.191.164/login`, user);
    const token = response.data.token;
    const expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 10);
    Cookies.set("auth", token, { expires: expirationTime });
  } catch (error) {
    console.log(error);
  }
};

export { addUser, loginUser };
