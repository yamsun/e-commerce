import React from "react";
import { Navbar } from "../..";
import { Outlet } from "react-router-dom";

const NavLayout = () => {
  return (
    <div>
      <div
        style={{
          //   border: "2px solid red",
          position: "sticky",
          top: 0,
          zIndex: 99,
          background: "#fff",
        }}
      >
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default NavLayout;
