import React from "react";
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import { Link, useLocation } from 'react-router-dom';
import "./App.css";
import Loading from "./components/Loading/Loading.jsx";
import HeaderNav from "./components/Header/HeaderNav.jsx";
import Tabs from "./components/Main/Tabs.jsx";
import Membership from "./components/Membership/Membership.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FooterNav from "./components/Footer/FooterNav.jsx";

function App() {
  return (
    <>
      <div className="wrapper">
        <Loading />
        <HeaderNav />
        <Tabs />
        <Membership />
        <Footer />
        <FooterNav />
      </div>
    </>
  );
}

export default App;
