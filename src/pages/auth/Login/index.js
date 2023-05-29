import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../../../context/auth-context";
import { Navbar } from "../../../layout/Navbar";
import styles from "./login.module.css";

export const Login = () => {
  const authValues = useAuth();
  console.log("authValues", authValues);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAsTestUser = () => {
    setEmail("test@user.com");
    setPassword("testpassword");
    authValues.loginHandler("test@user.com", "testpassword");
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.card}>
        <h3 className={styles.heading}>Sign In</h3>
        <div className={styles.form}>
          <label>
            <div>Email address</div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <div>Password</div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            onClick={() => {
              authValues.loginHandler(email, password);
            }}
            className={styles.loginBtn}
          >
            Login
          </button>
          <button
            className={`${styles.loginBtn} ${styles.testLoginBtn}`}
            onClick={() => {
              loginAsTestUser();
            }}
          >
            Login as test user
          </button>
          <div>Create New Account ></div>
        </div>
      </div>
    </div>
  );
};
