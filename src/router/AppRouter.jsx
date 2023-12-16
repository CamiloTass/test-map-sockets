import React, { useEffect } from "react";
// import { useContextApp } from "../context/useContext";

import { Loader } from "../components";
// import { PublicRouter } from "./PublicRoute";
import { Route, Routes, useNavigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import User from "../pages/User";
import { useUserStore } from "../store/userStore";
// import { PrivateRouter } from "./PrivateRoute";

export const AppRouter = () => {
  //   const { verifyToken, auth } = useContextApp().useAuthContext;
  //   useEffect(() => {
  //     verifyToken();
  //   }, [verifyToken]);

  const { token } = useUserStore((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/user");
    } else {
      navigate("/");
    }
  }, [token]);

  //   if (auth.checking) {
  //     return <Loader />;
  //   }

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};
