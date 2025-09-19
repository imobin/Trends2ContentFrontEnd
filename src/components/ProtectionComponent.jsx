import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAppContext } from "../context/AppContext";

export default function ProtectionComponent() {
  const { auth, setauth } = useAppContext();  

  if (auth) {
    return <Outlet />;
  }

  return <Navigate to={"/login"} />;
}