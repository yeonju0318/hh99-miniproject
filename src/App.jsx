import Cookies from "js-cookie";
import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LoginModal from "./modals/LoginModal";
import RegisterModal from "./modals/RegisterModal";
import Router from "./shared/Router";
import { GrLinkTop } from "react-icons/gr";
import axios from "axios";
import ListingCard from "./components/ListingCard";
import useGPTLoading from "./hooks/useGPTLoading";
import GPTLoading from "./components/GPTLoading";
// import { ToastContainer } from "react-toastify";

function App() {
  const divRef = useRef(null);
  const isMain = true;
  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   const authCookie = Cookies.get("auth");

  //   if (user !== null && authCookie === undefined) {
  //     localStorage.removeItem("user");
  //     window.location.replace("/");
  //     toast.error("세션이 만료되었습니다. 다시 로그인해주세요!");
  //   }
  // }, []);
;
const GPTLoadinginfo = useGPTLoading()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/member`,
          {
            headers: {
              Access_Token: `Bearer ${Cookies.get("auth")}`,
            },
          }
        );
        localStorage.setItem("user", JSON.stringify(response.data.data));
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div ref={divRef} className="relative">
        {GPTLoadinginfo.GPTLoading && <GPTLoading />}
        <Navbar />
        <RegisterModal />
        <LoginModal />

        <div className="relative flex ">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <div className="px-6 h-full overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
              <div className="flex-1">
                <Router />
              </div>
            </div>
          </div>
          <Sidebar />
        </div>

        
      </div>
      {isMain && (
         <div
         onClick={() => {
           divRef.current.scrollIntoView({ behavior: "smooth" });
         }}
         className="mt-10 absolute flex justify-center items-center cursor-pointer h-[50px] w-[50px] rounded-full bg-rose-400 text-white font-medium"
        //  style={{
        //    position: "fixed",
        //    bottom: "20px",
        //    right: "20px",
        //  }}
       >
         <GrLinkTop size={20} color="#fff" />
       </div>
        )}
    </>
  );
}

export default App;
