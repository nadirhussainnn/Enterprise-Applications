import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import Dash from "./Dash";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const _id = localStorage.getItem("_id");
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) {
        //Logout

        navigate("/");
      } else {
        navigate("/dash");
      }
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dash" element={<Dash />} />
    </Routes>
  );
}
