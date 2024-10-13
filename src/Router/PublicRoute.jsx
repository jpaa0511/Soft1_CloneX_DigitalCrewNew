import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../auth/Contexts/UserContext";

const PublicRoute = ({ children }) => {
  const { logged } = useContext(UserContext);

  return !logged ? children : <Navigate to="/main" />;
};

export default PublicRoute;
