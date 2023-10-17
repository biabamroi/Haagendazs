import React from "react";
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import { Link, useLocation } from 'react-router-dom';
import "./App.css";
import Loading from "./components/Loading/Loading.jsx";
import Header from "./components/Header/Header.jsx";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <div className="wrapper">
        <Loading />
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </div>
    </>
  );
}

export default App;
