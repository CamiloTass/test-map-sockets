import { Navigate } from "react-router-dom";

export const PublicRouter = ({ isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/chat" /> : <Navigate to="/" />;
};
