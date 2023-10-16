import React from 'react';
import './Section4.css'

const Section4 = () => {
    return (
        <>
            {/* https://codepen.io/robertmesserle/pen/yLzyoP */}
            <section className='section4'>
                <div className="section4-wrapper">

                    <div className="s4-text">
                        <p className="sec-title">하겐다즈 원료</p>
                        <p className='slide-text'>하겐다즈의 모든 아이스크림은<br />
                            크림, 우유, 설탕 및 계란의 기본 원료에서 부터 시작합니다.</p>
                    </div>

                    <ul className="sec4-ul">
                        <li><a href='/'><p>완벽한 아이스크림을 만들기 위한 노력</p></a></li>

                        <li><a href='/'><p>매장에서 즐기는 하겐다즈 아이스크림</p></a></li>

                        <li><a href='/'><p>최상의 퀄리티를 향한 노력</p></a></li>

                        <li><a href='/'><p>사랑하는 사람들과 함께 즐기는 기쁨</p></a></li>

                        <li><a href='/'><p>하겐다즈에서만 가능한 특별한 경험</p></a></li>
                    </ul>

                </div>
            </section>

        </>
    );
};

export default Section4;