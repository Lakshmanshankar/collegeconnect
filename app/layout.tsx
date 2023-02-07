
import React from 'react';
import "../styles/global.css"
import Navbar from './components/Navbar';
import SideBar from './components/Sidebar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <SideBar />
        {children}
      </body>
    </html>
  );
}
