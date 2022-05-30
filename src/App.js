import React from "react";
import { Routes, Route, Redirect, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Screens/Home";
import Login from "./components/Screens/Login";

const App = () => {
  const navigate = useNavigate();

  const login = (email, password) => {
    if (email === "borgoth@mordos.com" && password === "12bindthem")
      navigate("/");
    else {
      toast.error("Please enter valid email/password");
    }
  };

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
