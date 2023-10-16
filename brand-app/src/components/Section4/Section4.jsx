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
                        <p className='desc'>하겐다즈의 모든 아이스크림은<br />
                            크림, 우유, 설탕 및 계란의 기본 원료에서 부터 시작합니다.</p>
                    </div>

                    <ul className="sec4-ul">
                        <li><p className='ul-title'><a href='/'>완벽한 아이스크림을<br />만들기 위한 노력</a></p>
                            <div className="desc-item">
                                <img src="/assets/section4/desc1.png" alt="아이스크림 이미지" />
                                <p className='desc'>창립자 루벤은 어른의 입맛에도 부합하는 부드러운 풍미와 크리미한 텍스쳐의<br />
                                    아이스크림을 만들기 위하여 온 힘을 다하여 전념했습니다.<br /><br />
                                    그의 아내 로즈와 결혼한 후 함께 초콜릿, 바닐라 그리고 커피 맛의 아이스크림을 론칭하였습니다.<br />
                                    딸기 아이스크림을 만들기까지 6년의 시간이 걸릴 정도로,<br />
                                    좋은 원료를 사용하여 완벽한 맛의 아이스크림을 만드는 일에 온 열정을 다했습니다.
                                </p>
                            </div>
                        </li>

                        <li><p className='ul-title'><a href='/'>매장에서 즐기는<br />하겐다즈 아이스크림</a></p>
                            <div className="desc-item">
                                <img src="/assets/section4/desc2.png" alt="아이스크림 이미지" />
                                <p className='desc'>어디서도 경험해본 적 없는 시즈널 스폐셜 메뉴와<br />
                                    20가지가 넘는 크레이에션 메뉴 및 드링크를 하겐다즈 매장에서 즐길 수 있습니다.<br />
                                    또한 아이스크림 케이크와 더불어 아이스크림 기프팅 제품들도 구매 하실 수 있습니다.<br />
                                    하겐다즈의 장인정신으로 만들어진 아이스크림을 다양하게 경험해 보세요.
                                </p>
                            </div></li>

                        <li><p className='ul-title'><a href='/'>최상의 퀄리티를<br />향한 노력</a></p>
                            <div className="desc-item">
                                <img src="/assets/section4/desc3.png" alt="아이스크림 이미지" />
                                <p className='desc'>루벤의 목표는 세상에서 가장 맛있는 아이스크림을 만드는 것이었고,<br />
                                    그의 노력은 아이스크림에 대한 사람들의 생각을 바꿔놓았습니다.<br />
                                    하겐다즈 철학은 지금도 동일합니다.<br />
                                    우리는 모든 사람이 아이스크림을 통해 진정한 기쁨을 경험할 수 있다고 믿으며,<br />이 믿음이 하겐다즈의 원동력입니다.</p>
                            </div></li>

                        <li><p className='ul-title'><a href='/'>사랑하는 사람들과 함께<br />즐기는 기쁨</a></p>
                            <div className="desc-item">
                                <img src="/assets/section4/desc4.png" alt="아이스크림 이미지" />
                                <p className='desc'>모든 하겐다즈 아이스크림은 엄선된 원료들만을 사용하기에<br />
                                    아주 부드러운 텍스쳐의 아이스크림을 만들어내고 이는 잊을 수 없는 맛을 선사하게 됩니다.<br />
                                    한 입 한 입 하겐다즈를 음미할 때마다 강렬하게 느끼는 즐거운 경험은<br />사랑하는 사람들과 함께할 때 더 배가 됩니다.</p>
                            </div></li>

                        <li><p className='ul-title'><a href='/'>하겐다즈에서만 가능한<br />특별한 경험</a></p>
                            <div className="desc-item">
                                <img src="/assets/section4/desc5.png" alt="아이스크림 이미지" />
                                <p className='desc'>1960년, 루벤은 스스로 자부심을 느낄 수 있을만한 프리미엄 아이스크림을 만들어내었습니다.<br />
                                    우리는 루벤의 아이스크림을 향한 열정을 이어가고 있으며,<br />
                                    그 누구도 따라할 수 없는 퀄리티의 아이스크림을 만들고<br />특별한 경험을 선물하는 것을 자랑스럽게 여기고 있습니다.</p>
                            </div></li>
                    </ul >

                </div >
            </section >

        </>
    );
};

export default Section4;