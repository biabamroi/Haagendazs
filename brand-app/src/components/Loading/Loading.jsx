import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <>
      <div className="background">
        <div className="line"></div>
        <h1>Haagen-Daz</h1>
        <img src='/assets/icecream.png' alt="아이스크림이미지" />
      </div>
    </>
  );
};

export default Loading;
