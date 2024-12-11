import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="grid-background"></div>
      <main className="min-h-screen mx-auto p-4 sm:px-6 lg:px-8 max-w-7xl">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">Made by Piyush</div>
    </div>
  );
};

export default AppLayout;
