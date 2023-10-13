import React from "react";
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import { Link, useLocation } from 'react-router-dom';
import "./App.css";
import Loading from "./components/Loading/Loading.jsx";
import HeaderNav from "./components/Header/HeaderNav.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <div className="wrapper">
        <Loading />
        <HeaderNav />
        <Footer />
      </div>
    </>
  );
}

export default App;
