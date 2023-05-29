import axios from "axios";
import { useEffect } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Mockman from "mockman-js";
import { ProductPage } from "./pages/ProductPage";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { useAuth } from "./context/auth-context";
import { users } from "./backend/db/users";
import { Navbar } from "./layout/Navbar";
import NavLayout from "./layout/Navbar/RouteLayouts/NavLayout";
import CartPage from "./pages/CartPage";

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
      <Routes>
        <Route path="mock-api" element={<Mockman />} />
      </Routes>
      <Routes>
        <Route element={<NavLayout />}>
          <Route path="products" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
