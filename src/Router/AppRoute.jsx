import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login/Login";
import MainPage from "../MainPage";
import { PrivateRoute } from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/main"
        element={
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
