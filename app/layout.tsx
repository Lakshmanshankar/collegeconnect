import React, { ReactNode } from "react";
import "../styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
function layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>CollegeConnect</title>
      </head>
      <body>
        <Navbar />
        <SideBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default layout;

