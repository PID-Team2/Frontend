import React from "react";
import { Outlet} from "react-router-dom";

// components
import Navbar from "../../../../common/components/IndexNavar";
import FooterSmall from "../components/Footer";

export default function GroupsLayout() {
  return (
    <>
      <Navbar/>
      <main>
        <Outlet />
      </main>
      <FooterSmall/>
    </>
  );
}
