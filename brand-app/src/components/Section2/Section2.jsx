import React from 'react';
import './Section2.css';
import { Icon } from "@iconify/react";
import Wave from './Wave';
import Slider from './Slider';

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
              <span className='best-txt'>Best Products</span>
              <p>하겐다즈 마카롱 레몬 & 유자</p>
            </div>
            <button type="button" className="viewmore">
              <p>View More</p>
              <Icon className='icon' icon="solar:round-alt-arrow-right-line-duotone" height="30" />
            </button>
          </div>
        </div>
        <Slider />
      </section>
    </>
  );
};

export default Section2;