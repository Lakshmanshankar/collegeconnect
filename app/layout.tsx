import React, { ReactNode } from "react";
import "../styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>Collogram</title>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default layout;

