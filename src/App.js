import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Mockman from "mockman-js";
import { ProductPage } from "./pages/ProductPage";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { useAuth } from "./context/auth-context";
import { users } from "./backend/db/users";

function App() {
  const authValue = useAuth();

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        console.log("resss", res);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(process.env.REACT_APP_JWT_SECRET);

  if (process.env.REACT_APP_JWT_SECRET) {
    // Variable is set
    console.log("Variable is set:", process.env.REACT_APP_JWT_SECRET);
  } else {
    // Variable is not set
    console.log("Variable is not set");
  }

  return (
    <div className="app">
      Hello {authValue?.currentUser?.firstName}
      <Routes>
        <Route path="mock-api" element={<Mockman />} />
      </Routes>
      <Routes>
        <Route path="products" element={<ProductPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          element={
            <>
              {authValue?.currentUser?.role == 5 ? (
                <Outlet />
              ) : (
                <>Nahi hai Access, role 5 nahi hai aapka</>
              )}
            </>
          }
        >
          <Route path="onlyfive" element={<>Display to only 5</>} />
        </Route>
        <Route
          element={
            <>
              {authValue?.currentUser?.role == 3 ? (
                <Outlet />
              ) : (
                <>Nahi hai Access, role 3 nahi hai aapka</>
              )}
            </>
          }
        >
          <Route path="onlythree" element={<>Display to only 3</>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
