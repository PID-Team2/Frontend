import React from "react";
import { Outlet} from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import FooterSmall from "../components/Footer";

export default function GroupsLayout() {
  return (
    <>
      <Navbar transparent />
      <main className="">
        <Outlet />
      </main>
      <FooterSmall/>
    </>
  );
}
