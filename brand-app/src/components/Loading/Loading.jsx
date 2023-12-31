import React from 'react'
import "./Loading.css";
import WaveSVG from "./Wave";


const Loading = () => {
  return (
    <>
      <div className="loadingBackground">
        <div className="loading-wrapper">
          <div>
            <img src="/assets/icecream.png" alt="아이스크림이미지" />
          </div>
          <h1>Haagen-Dazs</h1>
          <WaveSVG />
        </div>
      </div>
    </>
  );
};

export default Loading;



