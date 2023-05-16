import React from "react";
import { Navbar } from "../../../layout/Navbar";

export const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div>Login</div>
        <label>
          Email address:
          <input />
        </label>
        <label>
          Password:
          <input />
        </label>
        <button>Login</button>
        <button>Login as test user</button>
        <div>Don't have an account? sign up</div>
      </div>
    </div>
  );
};
