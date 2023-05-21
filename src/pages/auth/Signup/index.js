import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../../../context/auth-context";
import { Navbar } from "../../../layout/Navbar";

export const Signup = () => {
  const authValues = useAuth();
  console.log("authValues", authValues);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="loginContainer">
      <div
        className="card"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="heading">Signup</div>
        <div className="form">
          <label>
            First name:
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last name:
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
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
          <label>
            Role:
            <input value={role} onChange={(e) => setRole(e.target.value)} />
          </label>
          <button
            onClick={() => {
              authValues.signupHandler(
                firstName,
                lastName,
                email,
                password,
                role
              );
            }}
            className="loginBtn"
          >
            Signup
          </button>
          <div>Already have an account? sign up</div>
        </div>
      </div>
    </div>
  );
};
