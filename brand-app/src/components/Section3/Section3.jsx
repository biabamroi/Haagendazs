import React from "react";
import "./Section3.css";
import { Icon } from "@iconify/react";

const Section3 = () => {
  return (
    <>
      <section className="section3">
        <div className="line-up fade-in-left"></div>
        <div className="text">
          <h1>하겐다즈 가치</h1>
          <p>
            비교할 수 없는 퀄리티의 아이스크림, 하겐다즈의 59년 역사를
            확인해보세요
          </p>
        </div>
        <div className="view">
          <p>View More</p>
          <Icon icon="solar:round-arrow-right-linear" height="30" />
        </div>
        <div className="image">
          <img
            src="/assets/section3/icecream2.png"
            alt="icecream"
            className="icecream"
          />
          <img
            src="/assets/section3/icecream1.png"
            alt="icecream"
            className="ice-cream"
          />
          <div className="line-down fade-in-right"></div>
        </div>
      </section>
    </>
  );
};

export default Section3;
