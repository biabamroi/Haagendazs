import React from 'react'
import "./Loading.css";
import WaveSVG from "./Wave";


const Loading = () => {
  // https://clolee.tistory.com/56
  return (
    <>
      <div className="loadingBackground">
        <div className="loading-wrapper">
          <h1>Haagen-Dazs</h1>
          <img src="/assets/icecream.png" alt="아이스크림이미지" />
          <WaveSVG />
        </div>
      </div>
    </>
  );
};

export default Loading;



