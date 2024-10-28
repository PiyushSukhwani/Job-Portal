import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-9 text-center bg-gray-800 mt-10">Made by Piyush</div>
    </div>
  )
};

export default AppLayout;
