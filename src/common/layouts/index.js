import React from "react";
import { Outlet} from "react-router-dom";

// components
import Navbar from "../components/IndexNavar";

export default function Index() {
  return (
    <>
      <Navbar/>
      <main>
        <Outlet />
      </main>
    </>
  );
}
