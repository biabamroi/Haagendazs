import React from "react";
import "./Section3.css";
import { Icon } from "@iconify/react";

const Section3 = () => {
  return (
    <>
      <section className="section3">
        <div className="section3-wrapper">
          <div className="text-top-area">
            <div className="line-up fade-in-left"></div>
            <p className="sec-title">하겐다즈 가치</p>
          </div>

          <div className="text-bottom-area">
            <p className="desc">
              비교할 수 없는 퀄리티의 아이스크림, 하겐다즈의 59년 역사를
              확인해보세요
            </p>

            <button type="button" className="viewmore" onClick={() => window.open("https://haagendazs-store.co.kr/brand/brand.html")}><p>View More</p>
              <Icon className='icon' icon="solar:round-alt-arrow-right-line-duotone" height="30" />
            </button>

            <div className="line-down fade-in-right"></div>
          </div>

          <div className="image">
            <img
              src="/assets/section3/icecream2.png" alt="icecream" className="icecream2"
            />
            <img
              src="/assets/section3/icecream1.png" alt="icecream" className="icecream1"
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default Section3;
