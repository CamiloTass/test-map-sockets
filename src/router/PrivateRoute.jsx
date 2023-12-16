import { Navigate } from "react-router-dom";
// import { ChatPage } from "../pages";

export const PrivateRouter = ({ isAuthenticated }) => {
  return isAuthenticated ? (
    <Navigate to="/auth/login" />
  ) : (
    <Navigate to="/auth/login" />
  );
  //   return isAuthenticated ? <ChatPage /> : <Navigate to="/auth/login" />;
};
