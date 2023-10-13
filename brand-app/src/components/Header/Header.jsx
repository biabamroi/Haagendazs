import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './Header.css';
import './Search.css';
// import logo from '../assets/logo-bg-white.png';
import { Icon } from '@iconify/react';

const HeaderNav = () => {
  const [isOpen, setIsopen] = useState(false);
  const toggleSidebar = () => {
    setIsopen(!isOpen);
  }
  
  const [isOn, setIson] = useState({
    brand: false,
    products: false,
    notice: false,
  });
  const toggleAccordion = (section) => {
    setIson({
      ...isOn,
      [section]: !isOn[section],
    });
  }

  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const handleMainMenuMouseEnter = () => {
    setIsSubMenuVisible(true);
  }
  const handleMainMenuMouseLeave = () => {
    setIsSubMenuVisible(false);
  }

  const handleSubMenuMouseEnter = () => { // 서브 메뉴에 마우스를 가져다 놓았을 때
    setIsSubMenuVisible(true);
  }
  const handleSubMenuMouseLeave = () => { // 서브 메뉴에서 마우스가 떠났을 때
    setIsSubMenuVisible(false);
  }

  const handleTouchStart = (e) => {
    // 터치 이벤트를 처리하는 코드를 여기에 작성
  };

  // 컴포넌트가 마운트될 때 터치 이벤트 핸들러 등록
  useEffect(() => {
    document.addEventListener('touchstart', handleTouchStart, true);

    // 컴포넌트가 언마운트될 때 이벤트 핸들러 제거
    return () => {
      document.removeEventListener('touchstart', handleTouchStart, true);
    };
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <>
      <div className='header-wrap'>
        <a href="/">
          <img src='/assets/logo-bg-white.png' alt="logo"/>
        </a>


        <div className="header-main-menu"
          onMouseEnter={handleMainMenuMouseEnter} // 메인 메뉴에 마우스를 가져다 놓았을 때 이벤트 핸들러
          onMouseLeave={handleMainMenuMouseLeave} // 메인 메뉴에서 마우스가 떠났을 때 이벤트 핸들러
        >
          <p>하겐다즈</p>
          <p>제품</p>
          <p>매장안내</p>
          <p>이벤트</p>
        </div>

        {isSubMenuVisible && ( // isSubMenuVisible 변수 값이 true일 때 실행
          <div className="sub-menu"
            onMouseEnter={handleSubMenuMouseEnter} // 서브 메뉴에 마우스를 가져다 놓았을 때 이벤트 핸들러
            onMouseLeave={handleSubMenuMouseLeave} // 서브 메뉴에서 마우스가 떠났을 때 이벤트 핸들러
          >
            <p>파인트</p>
            <p>미니컵</p>
          </div>
        )}


        <div className="shopping-mall">
          <Icon icon="clarity:shopping-bag-line" />
        </div>

        <form class="search-container">
          <input id="search-box" type="text" class="search-box" name="q" />
          <label for="search-box"><Icon icon="line-md:search" className="search-icon" hFlip={true} height="20" /></label>
          <input onClick={handleTouchStart} type="submit" id="search-submit" />
        </form>


        <button className='toggle-btn' type='button' onClick={toggleSidebar}>
          <Icon icon="gg:menu-left" color="white" height="24" />
        </button>
      </div>


      {/* ------- sidebar ------- */}
      
      <div className="container">
        <div className={`sidebar ${isOpen ? 'active' : ''}`}>
          <div className="sd-header">
            <a className="navbar-brand" href="/">
              <img src='/assets/logo-bg-white.png' alt="logo"/>
            </a>
            <div className="close" onClick={toggleSidebar}><Icon icon="lucide:list-x" height="23"/></div>
            <div className="btn-wrap">
              <button className="join" type="button">회원가입</button>
              <button className="" type="button">로그인</button>
              <button className="" type="button">주문조회</button>
            </div>
          </div>
          <div className="sd-body">
            <div className="line"></div>
            <p>
              <span className="sd-brand">Brand</span>
              <span className="on" onClick={() => toggleAccordion('brand')}>
                {isOn.brand ? (
                  <Icon className="switch" icon="mdi:cookie-plus" />
                  ) : (
                  <Icon className="switch" icon="mdi:cookie-minus-outline" />
                )}
              </span>
            </p>
            <ul className={`accordion ${isOn.brand ? 'off' : 'on'}`}>
              <li><a className="sd-link" href="/">하겐다즈 소개</a></li>
              <li><a className="sd-link" href="/">하겐다즈 브랜드 스토리</a></li>
              <li><a className="sd-link" href="/">하겐다즈 가치</a></li>
              <li><a className="sd-link" href="/">하겐다즈의 품질 좋은 원료</a></li>
            </ul>
          <div className="line"></div>
            <p>
              <span className="sd-brand">Products</span>
              <span className="on" onClick={() => toggleAccordion('products')}>
                {isOn.products ? (
                  <Icon className="switch" icon="mdi:cookie-minus-outline" />
                ) : (
                  <Icon className="switch" icon="mdi:cookie-plus" />
                )}
              </span>
            </p>
            <ul className={`accordion ${isOn.products ? 'on' : 'off'}`}>
              <li><a className="sd-link" href="/">전체보기</a></li>
              <li><a className="sd-link" href="/">파인트</a></li>
              <li><a className="sd-link" href="/">미니컵</a></li>
              <li><a className="sd-link" href="/">스틱바/샌드</a></li>
              <li><a className="sd-link" href="/">케이크&디저트</a></li>
              <li><a className="sd-link" href="/">굿즈</a></li>
            </ul>
          <div className="line"></div>
            <p>
              <span className="sd-brand">Notice</span>
              <span className="on" onClick={() => toggleAccordion('notice')}>
                {isOn.notice ? (
                  <Icon className="switch" icon="mdi:cookie-minus-outline" />
                ) : (
                  <Icon className="switch" icon="mdi:cookie-plus" />
                )}
              </span>
            </p>
            <ul className={`accordion ${isOn.notice ? 'on' : 'off'}`}>
              <li><a className="sd-link" href="/">공지사항</a></li>
              <li><a className="sd-link" href="/">이벤트</a></li>
              <li><a className="sd-link" href="/">매장안내</a></li>
              <li><a className="sd-link" href="/">고객센터</a></li>
            </ul>
          <div className="line"></div>
          </div>
          <div className="sd-footer">
            <a href="/">
              <Icon icon="simple-icons:kakaotalk" height="30" style={{ borderRadius: '50%' }} />
            </a>
            <a href="https://twitter.com/HaagenDazs_US">
              <Icon icon="formkit:twitter" height="30" />
            </a>
            <a href="https://www.instagram.com/haagendazskorea/">
              <Icon icon="entypo-social:instagram-with-circle" height="30" />
            </a>
            <a href="https://www.facebook.com/HaagenDazsKR/">
              <Icon icon="formkit:facebook" height="30" />
            </a>
            <a href="https://www.youtube.com/c/HaagenDazsKorea/featured">
              <Icon icon="entypo-social:youtube-with-circle" height="30" />
            </a>
          </div>
        </div>
        <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
      </div>
    </>
  );
};

export default HeaderNav;

ReactDOM.render(<HeaderNav/>, document.getElementById("root"));

const root = document.getElementById('root');
const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(<HeaderNav />);
