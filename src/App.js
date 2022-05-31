import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./components/Screens/Home";
import Login from "./components/Screens/Login";

const App = () => {
  const navigate = useNavigate();

  const login = (email, password) => {
    if (email === "borgoth@mordos.com" && password === "12bindthem") {
      sessionStorage.setItem("Email", email);
      navigate("/");
    } else {
      alert("Please enter valid email/password");
    }
  };

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
