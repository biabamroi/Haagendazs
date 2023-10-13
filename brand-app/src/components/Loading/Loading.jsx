import React from "react";
import "./Loading.css";
import LoadingIce from "./icecream.png";

const Loading = () => {
  return (
    <>
      <div className="background">
        <div className="line"></div>
        <h1>Haagen-Daz</h1>
        <img src={LoadingIce} alt="아이스크림이미지" />
      </div>
    </>
  );
};

export default Loading;
