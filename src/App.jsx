import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Container/Content";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";
function App() {
  return (
    <div className=" flex">
      <Sidenav />
      <div className="flex flex-col w-full">
        <Header />
        <div  className="    bg-[#FCFBFC]
">
                    <Home />

        </div>
      </div>
    </div>
  );
}

export default App;
