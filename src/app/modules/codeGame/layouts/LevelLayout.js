import React from "react";
import { Outlet} from "react-router-dom";

export default function LevelLayout() {
  return (
    <>
      <main className="h-screen bg-no-repeat bg-center">
        <Outlet />
      </main>
    </>
  );
}
