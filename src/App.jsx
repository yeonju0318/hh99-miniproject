import Cookies from "js-cookie";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LoginModal from "./modals/LoginModal";
import RegisterModal from "./modals/RegisterModal";
import Router from "./shared/Router";

function App() {
  useEffect(() => {
    const user = localStorage.getItem("user");
    const authCookie = Cookies.get("auth");

    console.log(user);
    console.log(!authCookie);

    if (user && !authCookie) {
      localStorage.removeItem("user");
      window.location.replace("/");
      alert("세션이 만료되었습니다. 다시 로그인해주세요!");
    }
  }, []);
  
  return (
    <>
      <Navbar />
      <RegisterModal />
      <LoginModal />

      <div className="relative flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <div className="px-6 h-full overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit pb-40">
              <Router />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
