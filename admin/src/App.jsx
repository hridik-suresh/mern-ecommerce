import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("adminToken") ? localStorage.getItem("adminToken") : "");

  useEffect(() => {
    localStorage.setItem("adminToken", token);
  }, [token]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <NavBar />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/" element={<Add />}></Route>
                <Route path="/add" element={<Add />}></Route>
                <Route path="/list" element={<List />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
