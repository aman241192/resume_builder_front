import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { token } = useSelector((state) => state.login);

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
