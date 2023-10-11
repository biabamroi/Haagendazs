import React, { useState } from "react";
import ReactDOM from "react-dom";
import './HeaderNav.css';
import logo from './logo-bg-white.png';
import { Icon } from '@iconify/react';

const HeaderNav = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggleSidebar = () => {
    setIsopen(!isOpen);
    // isOpen === true ? setIsopen(false) : setIsopen(true);
  }
  return (
    <>
      <div className='header-wrap'>
        <a href="/">
          <img src={logo} alt="logo"/>
        </a>
        <button className='toggle-btn' type='button' onClick={toggleSidebar}>
          <Icon icon="gg:menu-left" color="white" height="24" />
        </button>
      </div>
      <div className="container">
        <div className={`sidebar ${isOpen ? 'active' : ''}`}>
            <div className="sd-header">
              <a className="navbar-brand" href="/">
                <img src={logo} alt="logo"/>
              </a>
              <div className="close" onClick={toggleSidebar}><Icon icon="lucide:list-x"/></div>
              <div className="btn-wrap">
                <button className="" type="button">회원가입</button>
                <button className="" type="button">로그인</button>
                <button className="" type="button">주문조회</button>
              </div>
            </div>
            <div className="line"></div>
            <div className="sd-body">
              <p>
                <span className="sd-brand">Brand</span>
                <Icon icon="mdi:cookie-plus"/>
                <Icon icon="mdi:cookie-minus-outline" />
              </p>
              <ul>
                <span></span>
                <li><a className="sd-link" href="/">하겐다즈 소개</a></li>
                <li><a className="sd-link" href="/">하겐다즈 브랜드 스토리</a></li>
                <li><a className="sd-link" href="/">하겐다즈 가치</a></li>
                <li><a className="sd-link" href="/">하겐다즈의 품질 좋은 원료</a></li>
              </ul>
            <div className="line"></div>
              <p>
                <span className="sd-brand">Products</span>
                <Icon icon="mdi:cookie-plus"/>
                <Icon icon="mdi:cookie-minus-outline" />
              </p>
              <ul>
                <span>모든제품</span>
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
                <Icon icon="mdi:cookie-plus"/>
                <Icon icon="mdi:cookie-minus-outline" />
              </p>
              <ul>
                <span>안내</span>
                <li><a className="sd-link" href="/">공지사항</a></li>
                <li><a className="sd-link" href="/">이벤트</a></li>
                <li><a className="sd-link" href="/">매장안내</a></li>
                <li><a className="sd-link" href="/">고객센터</a></li>
              </ul>
            <div className="line"></div>
            </div>
            <div className="sd-footer">
              <a href="/">
                talk
              </a>
              <a href="https://twitter.com/HaagenDazs_US">
                <Icon icon="formkit:twitter" height="23" />
              </a>
              <a href="https://www.instagram.com/haagendazskorea/">
                <Icon icon="entypo-social:instagram-with-circle" height="23" />
              </a>
              <a href="https://www.facebook.com/HaagenDazsKR/">
                <Icon icon="formkit:facebook" height="23" />
              </a>
              <a href="https://www.youtube.com/c/HaagenDazsKorea/featured">
                <Icon icon="entypo-social:youtube-with-circle" height="23" />
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





