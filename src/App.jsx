import "./App.css";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Router from "./shared/Router";

function App() {
  return (
    <>
      <Navbar />
      <div className="relative flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit pb-40">
              <Router />
            </div>
            <div className="xl:sticky relative top-0 h-fit">
              <Rightbar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
