import React from 'react';
import './Section2.css';
import Wave from './Wave';
import { Icon } from "@iconify/react";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const Section2 = () => {
  return (
    <>
      <section className='section2'>
          <Wave />
        <div className="section2-wrapper">
          <div className='circle-img'>
            <img className='circle' src='/assets/section2/circle.png' alt="circle-icecream" />
            <img className='icecreamcup' src="/assets/section2/iecle.png" alt="cup ice cream" />
          </div>
          <div className='section2-txt-wrap'>
            <div className='section2-txt'>
              <p>Best Products</p>
              <p>하겐다즈 마카롱 레몬 & 유자</p>
            </div>
            <button type="button" className="viewmore">
              <p>View More</p>
              <Icon icon="solar:round-arrow-right-linear" height="30" />
            </button>
          </div>



        </div>
      </section>
    </>
  );
};

export default Section2;