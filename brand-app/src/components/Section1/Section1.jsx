import React from "react";
import "./Section1.css";
import { Icon } from "@iconify/react";

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
            <div className="text-up">다크 초콜릿 가나슈</div>
            <div className="text-down">& 아몬드 파인트</div>
          </div>

          <button type="button" className="viewmore">
            <p>View More</p>
            <Icon icon="solar:round-arrow-right-linear" height="30" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Section1;
