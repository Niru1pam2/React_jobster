import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, redirect } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
}

export default ProtectedRoute;
