import React from 'react';
import './Section2.css';
import { Icon } from "@iconify/react";
import Wave from './Wave';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Section2 = () => {

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    draggable: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  }

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
            <button type="button" className="viewmore" onClick={() => window.open("https://haagendazs-store.co.kr/product/detail.html?product_no=190&cate_no=61&display_group=1")}>
              <p>View More</p>
              <Icon className='icon' icon="solar:round-alt-arrow-right-line-duotone" height="30" />
            </button>
          </div>

          <div className="sec2-carousel">
            <Slider {...settings}>
              <div className='slide-item item1'>
                <a href='https://haagendazs-b2b.co.kr/product/detail.html?product_no=190&cate_no=61&display_group=1'>
                  <img className='slide-img' src="/assets/section2/iecle.png" alt="본문 이미지" /></a>
                <p className='slide-text'>
                  하겐다즈 마카롱 레몬&유자</p>
              </div>

              <div className='slide-item item2'>
                <a href='https://haagendazs-b2b.co.kr/product/detail.html?product_no=192&cate_no=61&display_group=1'>
                  <img className='slide-img' src="/assets/section2/slideImg2.png" alt="본문 이미지" /></a>
                <p className='slide-text'>
                  하겐다즈 체스트넛 타르트</p>
              </div>

              <div className='slide-item item3'>
                <a href='https://haagendazs-b2b.co.kr/product/detail.html?product_no=185&cate_no=61&display_group=1'>
                  <img className='slide-img' src="/assets/section2/slideImg3.png" alt="본문 이미지" /></a>
                <p className='slide-text'>
                  하겐다즈 마카롱 스트로베리&라즈베리</p>
              </div>

              <div className='slide-item item4'>
                <a href='/https://haagendazs-b2b.co.kr/product/detail.html?product_no=152&cate_no=32&display_group=1'>
                  <img className='slide-img' src="/assets/section2/slideImg4.png" alt="본문 이미지" /></a>
                <p className='slide-text'>
                  하겐다즈 브라우니 라즈베리</p>
              </div>

              <div className='slide-item item5'>
                <a href='https://haagendazs-b2b.co.kr/product/detail.html?product_no=191&cate_no=32&display_group=1'>
                  <img className='slide-img' src="/assets/section2/slideImg5.png" alt="본문 이미지" /></a>
                <p className='slide-text'>
                  하겐다즈 피스타치오 앤 크림</p>
              </div>
            </Slider>
          </div>

        </div>
      </section >
    </>
  );
};

export default Section2;