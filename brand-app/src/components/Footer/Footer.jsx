import React from "react";
import "./Footer.css";
import footerlogo from "./images/logo_white.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-wrapper">
          <div className="footer-left">
            <img src={footerlogo} alt="footer logo image" className="footerlogo" />
            <button type="button">CONTACT US</button>
          </div>
          <div className="footer-right" >
            <ul>
              <li><a href="">파인트</a></li>
              <li><a href="">미니 컵</a></li>
              <li><a href="">스틱바</a></li>
              <li><a href="">스틱바 멀티팩</a></li>
              <li><a href="">미니  스틱바</a></li>
            </ul>
            <ul>
              <li><a href="">콘</a></li>
              <li><a href="">콘 멀티백</a></li>
            </ul>
            <ul>
              <li><a href="">벌크 (업소용)</a></li>
              <li><a href="">온라인 구매하기</a></li>
              <li><a href="">업소문의</a></li>
              <li><a href="">매장 소개</a></li>
              <li><a href="">크리에이션 메뉴</a></li>
              <li><a href="">아이스크림 드링크</a></li>
            </ul>
            <ul>
              <li><a href="">하겐다즈 소개</a></li>
              <li><a href="">품질 좋은 원료</a></li>
            </ul>
          </div>
          <div className="footer-bottom"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
