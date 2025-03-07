import React from "react";
import { Outlet } from "react-router-dom";

const AuthGuard: React.FC = () => {
  return <Outlet />;
};

export default AuthGuard;
