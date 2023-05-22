import React from "react";
import { Outlet} from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import FooterSmall from "../components/Footer";
import Sidebar from "../components/SideBar";

export default function GroupsManagmentLayout() {
  return (
    <>
      <Navbar dark />
      <main className="bg-zinc-850 h-full">
      <Sidebar />
      <div className="md:ml-64 overflow-y-auto">
        <Outlet />
      </div>
      </main>
      <FooterSmall/>
    </>
  );
}
