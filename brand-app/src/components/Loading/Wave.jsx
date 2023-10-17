import React from 'react';
import './Wave.css';

function WaveSVG() {
  return (
    <div className="loadingWave-wrap">
      <div className="content">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
            className="loadingWaves"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              ></path>
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="#ffffffaa"></use>
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="#bd909fc9"></use>
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="#ffffff52"></use>
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#700f2f"></use>
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
            className="loadingWaves"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              ></path>
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="#ebd4dc"></use>
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="#bd446cc0"></use>
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="#ffffff"></use>
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#bd909fc9"></use>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default WaveSVG;
