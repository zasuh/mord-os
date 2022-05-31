import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./components/Screens/Home";
import Login from "./components/Screens/Login";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem("Email");
    if (authToken) navigate("/");
    else navigate("/login");
  }, [navigate]);

  const login = (email, password) => {
    if (email === "borgoth@mordos.com" && password === "12bindthem") {
      sessionStorage.setItem("Email", email);
      navigate("/");
    } else {
      alert.open("Please enter valid email/password");
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
