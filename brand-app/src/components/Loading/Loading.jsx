import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <>
      <div className="background">
        <div className="line"></div>
        <div className="loading-wrapper">
          <h1>Haagen-Daz</h1>
          <img src="/assets/icecream.png" alt="아이스크림이미지" />
        </div>
      </div>
    </>
  );
};

export default Loading;
