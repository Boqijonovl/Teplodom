import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Modals from "./Modals";


const RootLayout = () => {
  return (
    <>
      <ToastContainer
        stacked
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Modals />
      <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
        <div className="container stickyy top-0 left-0 z-50 bg-[#FAFAFA]">
          <Navbar />
        </div>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <div className="bg-[#2D2B45]">
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
