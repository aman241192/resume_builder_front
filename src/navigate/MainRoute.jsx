import React, { Suspense } from "react";
import Login from "../pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "../pages/Home/Home";
import { pathConstant } from "../pathConstant";
import Resume from "../pages/Resume/Resume";
import Register from "../pages/Register/Register";
import { LuLoader } from "react-icons/lu";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import PublicRoute from "../ProtectedRoute/PublicRoute";
import ReactPrint from "../pages/ReactPrint/ReactPrint";

const MainRoute = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<LuLoader />}>
          <Routes>
            <Route
              path={pathConstant.login}
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path={pathConstant.register}
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path={pathConstant.home}
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path={pathConstant.resume}
              element={
                <ProtectedRoute>
                  <Resume />
                  {/* <ReactPrint /> */}
                </ProtectedRoute>
              }
            />
            ;
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default MainRoute;
