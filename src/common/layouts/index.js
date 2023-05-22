import React from "react";
import { Outlet} from "react-router-dom";

// components
import Navbar from "../components/IndexNavar";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <>
      <Navbar/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
