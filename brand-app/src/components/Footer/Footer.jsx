import React from "react";
import "./Footer.css";
import footerlogo from "./logo-bg-white.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="line">
        <img src={footerlogo} alt="logo" />
      </div>
      <div className="first-box">
        <div className="call">
          <p>하겐다즈 고객만족센터</p>
          <div className="icon">
            <Icon icon="material-symbols:call" />
          </div>
          <span>070-7549-7020</span>
        </div>
        <div className="time">
          <p>
            평일 <b>10:00 ~ 18:00</b>
          </p>
          <p>
            (점심시간 <b>12:00 ~ 13:00</b>)
          </p>
        </div>
      </div>

      <div className="second-box">
        <div className="txt-wrap">
          <div className="text">
            <p>개인정보처리방침</p>
            <p>이용약관</p>
            <p>이메일무단수집거부</p>
          </div>
          <div className="follow">
            <p>Follow Us</p>
            <div className="sns">
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
        </div>
        <p>Copyright©2021 Haagen-Dazs Korea.All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
