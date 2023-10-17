import React from 'react';
import './Wave.css';

function WaveSVG() {
  return (
    <div className="section2-wave-wrap">
      <div className="content">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
            className="waves"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              ></path>
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgb(255, 243, 210, 0.7)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255, 225, 180, 0.5)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255, 209, 153, 0.3)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255, 243, 210, 0.1)"></use>
            </g>
          </svg>
        </div>
      </div>
      <div className="content">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
            className="waves"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              ></path>
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgb(255, 243, 210, 0.7)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255, 225, 180, 0.5)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255, 209, 153, 0.3)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255, 243, 210, 0.1)"></use>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default WaveSVG;
