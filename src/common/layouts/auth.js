import React from "react";
import { Outlet} from "react-router-dom";

// components
import SimpleNavbar from "../components/SimpleNavbar";

export default function Auth() {
  return (
    <>
      <SimpleNavbar transparent />
      <main className="h-screen">
        <Outlet />
      </main>
    </>
  );
}
