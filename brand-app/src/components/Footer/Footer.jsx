import React from "react";
import "./Footer.css";
import footerlogo from "./images/logo_white.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-wrapper">
          <div className="footer-top">
            <div className="footer-left">
              <img
                src={footerlogo}
                alt="footer logo image"
                className="footerlogo"
              />
              <button type="button">CONTACT US</button>
            </div>

            <div className="footer-right">
              <ul className="footer-list">
                <li><a href="">파인트</a></li>
                <li><a href="">미니 컵</a></li>
                <li><a href="">스틱바</a></li>
                <li><a href="">스틱바 멀티팩</a></li>
                <li><a href="">미니 스틱바</a></li>
              </ul>

              <ul className="footer-list">
                <li><a href="">콘</a></li>
                <li><a href="">콘 멀티백</a></li>
              </ul>

              <ul className="footer-list">
                <li><a href="">벌크 (업소용)</a></li>
                <li><a href="">온라인 구매하기</a></li>
                <li><a href="">업소문의</a></li>
                <li><a href="">매장 소개</a></li>
                <li><a href="">크리에이션 메뉴</a></li>
                <li><a href="">아이스크림 드링크</a></li>
              </ul>

              <ul className="footer-list">
                <li><a href="">하겐다즈 소개</a></li>
                <li><a href="">품질 좋은 원료</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="fb-left">
              <p className="copyright">© 2023 General Mills. All Rights Reserved.</p>
              <ul>
                <li><a href="">문의처</a></li>
                <li><a href="">이용 약관</a></li>
                <li><a href="">개인정보 취급방침</a></li>
                <li><a href="">사이트 이용약관</a></li>
                <li><a href="">쿠키 설정</a></li>
                <li><a href="">사용자 지정</a></li>
                <li><a href="">데이터 프라이버시 요청</a></li>
              </ul>
            </div>

            <div className="fb-right">
              <ul>
                <li><a href=""><Icon icon="ri:kakao-talk-fill" color="white" /></a></li>
                <li><a href=""><Icon icon="fa6-brands:square-x-twitter" color="white" /></a></li>
                <li><a href=""><Icon icon="basil:instagram-solid" color="white" /></a></li>
                <li><a href=""><Icon icon="ri:facebook-circle-fill" color="white" /></a></li>
                <li><a href=""><Icon icon="uil:youtube" color="white" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
