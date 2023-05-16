import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { ProductPage } from "./pages/ProductPage";
import { Login } from "./pages/auth/Login";

function App() {
  const signupHandler = async () => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: "Adarsh",
        lastName: "Balika",
        email: "adarshbalika@neog.camp",
        password: "adarshBalika",
      });
      // saving the encodedToken in the localStorage
      console.log("token res", response);
      localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
      console.log("signup errr", error);
    }
  };

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
        <Route path="products" element={<ProductPage />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
