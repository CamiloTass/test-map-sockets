import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};
