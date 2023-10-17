import React from 'react';
import './Section2.css';
import { Icon } from "@iconify/react";
import Wave from './Wave';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Section2 = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
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
            <button type="button" className="viewmore">
              <p>View More</p>
              <Icon className='icon' icon="solar:round-alt-arrow-right-line-duotone" height="30" />
            </button>
          </div>
        </div>

        <div className="sec2-carousel">
          <Slider {...settings}>
            {/* dots 추후 수정 */}
            <div className='slide-item item1'>
              <img className='slide-img' src="/assets/section2/small-vanilla.png" alt="본문 이미지" />
              <p className='slide-text'>
                품질 좋은 다섯가지 원료만을 사용하여 만든</p>
            </div>

            <div className='slide-item item2'>
              <img className='slide-img' src="/assets/section2/strawberries.png" alt="본문 이미지" />
              <p className='slide-text'>
                가장 완벽한 맛의 딸기 아이스크림을 만들기 위하여</p>
            </div>

            <div className='slide-item item3'>
              <img className='slide-img' src="/assets/section2/choc.png" alt="본문 이미지" />
              <p className='slide-text'>
                초콜릿에 관해서라면 하겐다즈는 최고만을 추구합니다.</p>
            </div>

            <div className='slide-item item4'>
              <img className='slide-img' src="/assets/section2/small-caramel.png" alt="본문 이미지" />
              <p className='slide-text'>
                입안 가득 풍부함을 보여줄 수 있는 가장 알맞은 클래식한 카라멜 소스를</p>
            </div>

            <div className='slide-item item5'>
              <img className='slide-img' src="/assets/section2/small-caramel.png" alt="본문 이미지" />
              <p className='slide-text'>
                입안 가득 풍부함을 보여줄 수 있는 가장 알맞은 클래식한 카라멜 소스를</p>
            </div>
          </Slider>
        </div>

      </section >
    </>
  );
};

export default Section2;