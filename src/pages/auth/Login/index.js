import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../../../context/auth-context";
import { Navbar } from "../../../layout/Navbar";

export const Login = () => {
  const authValues = useAuth();
  console.log("authValues", authValues);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Navbar />
      <div className="">
        <div>Login</div>
        <label>
          Email address:
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          onClick={() => {
            authValues.loginHandler(email, password);
          }}
        >
          Login
        </button>
        <button>Login as test user</button>
        <div>Don't have an account? sign up</div>
      </div>
    </div>
  );
};
