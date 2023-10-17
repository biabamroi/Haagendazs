import React from 'react';
import './Section5.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Section5 = () => {

  // slick slider setting
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  return (
    <>
      <section className='section5'>
        <div className="section5-wrapper">
          <div className="images">
            <img src="/assets/section5/mango.png" alt="아이스크림" className='item icecream_1' />
            <img src="/assets/section5/matcha.png" alt="아이스크림" className='item icecream_2' />
            <img src="/assets/section5/brownie.png" alt="아이스크림" className='item icecream_3' />
            <img src="/assets/section5/macadamia.png" alt="아이스크림" className='item icecream_4' />
            <img src="/assets/section5/dark-choc.png" alt="아이스크림" className='item icecream_5' />
            <img src="/assets/section5/strawbs.png" alt="아이스크림" className='item icecream_6' />
            <img src="/assets/section5/vanilla.png" alt="아이스크림" className='item icecream_7' />
            <img className='dripping-img' src="/assets/footer/dripping-small.png" alt="하단이미지" />
          </div>

          <div className="s5-text">
            <p className="sec-title">하겐다즈 품질</p>

            <div className="carousel">
              <Slider {...settings}>
                {/* dots 추후 수정 */}
                <div className='slide-item'>
                  <img className='slide-img' src="/assets/section5/small-vanilla.png" alt="본문 이미지" />
                  <p className='slide-text'>
                    품질 좋은 다섯가지 원료만을 사용하여 만든<br />
                    하겐다즈 바닐라 아이스크림.<br />
                    깊고 부드러운 맛의 정수를 보여주는<br />
                    순수한 맛을 경험해보세요.</p>
                </div>
                <div className='slide-item'>
                  <img className='slide-img' src="/assets/section5/strawberries.png" alt="본문 이미지" />
                  <p className='slide-text'>
                    가장 완벽한 맛의 딸기 아이스크림을 만들기 위하여<br />
                    6년간 알맞은 딸기를 찾았습니다.<br />
                    기본 원료부터 다르니까,<br />
                    오랜 기간동안 하겐다즈의 시그니처 아이스크림일 수 밖에 없죠.</p>
                </div>
                <div className='slide-item'>
                  <img className='slide-img' src="/assets/section5/choc.png" alt="본문 이미지" />
                  <p className='slide-text'>
                    초콜릿에 관해서라면 하겐다즈는 최고만을 추구합니다.<br />
                    그게 하겐다즈를 그 어떤 브랜드와도<br />
                    비교할 수 없는 퀄리티의 아이스크림으로 만들어주니까요.<br /><br /></p>
                </div>
                <div className='slide-item'>
                  <img className='slide-img' src="/assets/section5/small-caramel.png" alt="본문 이미지" />
                  <p className='slide-text'>
                    입안 가득 풍부함을 보여줄 수 있는 가장 알맞은 클래식한 카라멜 소스를<br />
                    전문가와 함께 찾아냈습니다.<br />
                    중독적인 맛의 카라멜, 한 번 잡으면 손에서 놓을 수가 없는 맛이죠.<br /><br /></p>
                </div>
              </Slider>
            </div>

          </div>

        </div>
      </section >
    </>
  );
};

export default Section5;