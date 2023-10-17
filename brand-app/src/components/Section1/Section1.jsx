import React from "react";
import "./Section1.css";
import { Icon } from "@iconify/react";
import './Wave.css'

const Section1 = () => {
  return (
    <>
      <section className="section1">
        <div className="section1-wrapper">
          <div className="image-box">
            <img
              src="./assets/section1/Ellipse 14.png"
              alt="circle"
              className="circle"
              width="600"
            />
            <img
              src="./assets/section1/darkice.png"
              alt="darkiccream"
              className="darkice"
              width="600"
              height="800"
            />
            <img
              src="./assets/section1/little.png"
              alt="little"
              className="little-cho"
              width="400"
            />
          </div>
          <div className="text-box">
            <p className="new-txt">New Products</p>
            <p className="text-up">다크 초콜릿 가나슈</p>
            <p className="text-down">& 아몬드 파인트</p>
          </div>

          <button type="button" className="viewmore">
            <p>View More</p>
            <Icon className='icon' icon="solar:round-alt-arrow-right-line-duotone" height="30" />
          </button>
        </div>

        <div className="wave-wrapper">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg >
        </div >

      </section>
    </>
  );
};

export default Section1;
