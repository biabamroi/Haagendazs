import React from 'react';
import './Section5.css'


const Section5 = () => {
  return (
    <>
      <section className='section5'>
        <div className="section5-wrapper">
          <img src="/assets/section5.png" alt="이미지 화면" />
          <div className="text-section">
            <p className="s5-title">하겐다즈 품질</p>
            <div className="slider">
              <img className='slide-img' src="/assets/section5/small-vanilla.png" alt="본문 이미지" />
              <p className='slide-text'>품질 좋은 다섯가지 원료만을 사용하여 만든
                하겐다즈 바닐라  아이스크림.
                깊고 부드러운 맛의 정수를 보여주는
                순수한 맛을 경험해보세요.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Section5;