import React from 'react';
import './Section5.css'


const Section5 = () => {
  return (
    <>

      {/* 
    수정사항
    슬라이드 부분 완성하기
    */}
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
          {/* <img src="/assets/section5/section5.png" alt="이미지 화면" /> */}
          {/* https://codepen.io/bnsddk/pen/dyXaNod */}
          <div className="s5-text">
            <p className="sec-title">하겐다즈 품질</p>
            <div className="slider">
              <img className='slide-img' src="/assets/section5/small-vanilla.png" alt="본문 이미지" />
              <p className='slide-text'>품질 좋은 다섯가지 원료만을 사용하여 만든<br />
                하겐다즈 바닐라 아이스크림.<br />
                깊고 부드러운 맛의 정수를 보여주는<br />
                순수한 맛을 경험해보세요.</p>
            </div>
          </div>

        </div>
      </section >
    </>
  );
};

export default Section5;