import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Skeleton() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Skeleton;
