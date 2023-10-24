import React from 'react';
import './Tabs.css';
import tabimg1 from './images/pint/pint-img1.jpg'
import tabimg2 from './images/pint/pint-img2.jpg'
import tabimg3 from './images/pint/pint-img3.jpg'
import tabimg4 from './images/pint/pint-img4.jpg'
import tabimg5 from './images/mini/mini-img1.jpg'
import tabimg6 from './images/mini/mini-img2.jpg'
import tabimg7 from './images/mini/mini-img3.jpg'
import tabimg8 from './images/mini/mini-img4.jpg'
import { useState } from 'react';
import { useEffect } from 'react';



const Tabs = () => {

  // 클릭시 내용 보이기
  let [clickedTab, setClickedTab] = useState(0);
  const [currentClick, setCurrentClick] = React.useState(null);
  const [prevClick, setPrevClick] = React.useState(null);



  function GetClick(e) {
    setCurrentClick(e.target.id);
    console.log(e.target.id);
  };

  React.useEffect(
    (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        console.log(current);
        current.style.color = "#6C172F";
        current.style.borderBottom = "4px solid";
        current.style.borderBottomColor = "#6C172F";
      }

      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.color = "#767676";
        prev.style.borderBottom = "none";
      }
      setPrevClick(currentClick);
    },
    [currentClick]
  );




  function TabContent(props) {

    // 각각의 if문마다 클릭시 보일 내용 넣기
    if (props.clickedTab === 0) {
      // 파인트
      return (
        <ul>
          <li><a href='https://haagendazs-store.co.kr/product/detail.html?product_no=74&cate_no=61&display_group=1'><img src={tabimg1} alt="하겐다즈 딸기 (파인트)" />
            <div className="product-info">
              <p className='product-name'>하겐다즈 딸기 (파인트) 473ml</p>
              <p>₩15,500</p></div></a>
          </li>
          <li><a href='https://haagendazs-store.co.kr/product/detail.html?product_no=184&cate_no=1&display_group=4'> <img src={tabimg2} alt="하겐다즈 마카롱 더블 초콜릿 가나슈 (파인트)" />
            <div className="product-info">
              <p className='product-name'>하겐다즈 마카롱 더블 초콜릿 가나슈 (파인트) 403ml</p>
              <p>₩15,500</p></div></a>
          </li>
          <li><a href='https://haagendazs-store.co.kr/product/detail.html?product_no=185&cate_no=1&display_group=4'> <img src={tabimg3} alt="하겐다즈 마카롱 스트로베리&라즈베리 (파인트)" />
            <div className="product-info">
              <p className='product-name'>하겐다즈 마카롱 스트로베리&라즈베리 (파인트) 403ml</p>
              <p>₩15,500</p></div></a>
          </li>
          <li><a href='https://haagendazs-store.co.kr/product/detail.html?product_no=190&cate_no=61&display_group=1'> <img src={tabimg4} alt="하겐다즈 마카롱 레몬&유자 (파인트)" />
            <div className="product-info">
              <p className='product-name'>하겐다즈 마카롱 레몬&유자 (파인트) 403ml</p>
              <p>₩15,500</p></div></a>
          </li>
        </ul>
      )
    } else if (props.clickedTab === 1) {
      return (
        // 미니컵
        <ul>
          <li><a href='https://haagendazs-store.co.kr/product/detail.html?product_no=193&cate_no=33&display_group=1'><img src={tabimg5} alt="하겐다즈 체스트넛 타르트 (미니컵)" />
            <div className="product-info">
              <p className='product-name'>하겐다즈 체스트넛 타르트 (미니컵) 100ml</p>
              <p>₩15,500</p></div></a>
          </li>
          <li><a href='https://haagendazs-store.co.kr/product/detail.html?product_no=117&cate_no=33&display_group=1'> <img src={tabimg6} alt="하겐다즈 벨지안초콜릿&스트로베리 (미니컵)" />
            <div className="product-info">
              <p className='product-name'>하겐다즈 벨지안초콜릿&스트로베리 (미니컵) 95ml</p>
              <p>₩15,500</p></div></a>
          </li>
          <li><a href='https://haagendazs-store.co.kr/product/detail.html?product_no=23&cate_no=33&display_group=1'> <img src={tabimg7} alt="하겐다즈 바닐라 (미니컵)" />
            <div className="product-info">
              <p className='product-name'>하겐다즈 바닐라 (미니컵) 100ml</p>
              <p>₩15,500</p></div></a>
          </li>
          <li><a href='https://haagendazs-store.co.kr/product/detail.html?product_no=194&cate_no=33&display_group=1'> <img src={tabimg8} alt="하겐다즈 피스타치오 앤 크림 (미니컵)" />
            <div className="product-info">
              <p className='product-name'>하겐다즈 피스타치오 앤 크림 (미니컵) 100ml</p>
              <p>₩15,500</p></div></a>
          </li>
        </ul >
      )
    } else if (props.clickedTab === 2) {
      return (
        // 스틱바
        <ul>
          <li><a href='https://haagendazs-store.co.kr/product/detail.html?product_no=193&cate_no=33&display_group=1'><img src={tabimg5} alt="하겐다즈 체스트넛 타르트 (미니컵)" />
            <div className="product-info">
              <p className='product-name'>하겐다즈 체스트넛 타르트 (미니컵) 100ml</p>
              <p>₩15,500</p></div></a>
          </li>
          <li><a href='https://haagendazs-store.co.kr/product/detail.html?product_no=117&cate_no=33&display_group=1'> <img src={tabimg6} alt="하겐다즈 벨지안초콜릿&스트로베리 (미니컵)" />
            <div className="product-info">
              <p className='product-name'>하겐다즈 벨지안초콜릿&스트로베리 (미니컵) 95ml</p>
              <p>₩15,500</p></div></a>
          </li>
          <li><a href='https://haagendazs-store.co.kr/product/detail.html?product_no=23&cate_no=33&display_group=1'> <img src={tabimg7} alt="하겐다즈 바닐라 (미니컵)" />
            <div className="product-info">
              <p className='product-name'>하겐다즈 바닐라 (미니컵) 100ml</p>
              <p>₩15,500</p></div></a>
          </li>
          <li><a href='https://haagendazs-store.co.kr/product/detail.html?product_no=194&cate_no=33&display_group=1'> <img src={tabimg8} alt="하겐다즈 피스타치오 앤 크림 (미니컵)" />
            <div className="product-info">
              <p className='product-name'>하겐다즈 피스타치오 앤 크림 (미니컵) 100ml</p>
              <p>₩15,500</p></div></a>
          </li>
        </ul >
      )
    } else if (props.clickedTab === 3) {
      return (
        // 케이크
        <ul>
          <li><a href='https://haagendazs-store.co.kr/product/detail.html?product_no=193&cate_no=33&display_group=1'><img src={tabimg5} alt="하겐다즈 체스트넛 타르트 (미니컵)" />
            <div className="product-info">
              <p className='product-name'>하겐다즈 체스트넛 타르트 (미니컵) 100ml</p>
              <p>₩15,500</p></div></a>
          </li>
          <li><a href='https://haagendazs-store.co.kr/product/detail.html?product_no=117&cate_no=33&display_group=1'> <img src={tabimg6} alt="하겐다즈 벨지안초콜릿&스트로베리 (미니컵)" />
            <div className="product-info">
              <p className='product-name'>하겐다즈 벨지안초콜릿&스트로베리 (미니컵) 95ml</p>
              <p>₩15,500</p></div></a>
          </li>
          <li><a href='https://haagendazs-store.co.kr/product/detail.html?product_no=23&cate_no=33&display_group=1'> <img src={tabimg7} alt="하겐다즈 바닐라 (미니컵)" />
            <div className="product-info">
              <p className='product-name'>하겐다즈 바닐라 (미니컵) 100ml</p>
              <p>₩15,500</p></div></a>
          </li>
          <li><a href='https://haagendazs-store.co.kr/product/detail.html?product_no=194&cate_no=33&display_group=1'> <img src={tabimg8} alt="하겐다즈 피스타치오 앤 크림 (미니컵)" />
            <div className="product-info">
              <p className='product-name'>하겐다즈 피스타치오 앤 크림 (미니컵) 100ml</p>
              <p>₩15,500</p></div></a>
          </li>
        </ul >
      )
    }
  }

  return (

    < div className='tabs' >
      <div className='tabs-list' variant="tabs" defaultActiveKey="0">
        <ul>
          <li className='tabs-item' id='case1' eventKey="0" onClick={() => { setClickedTab(0) }}>파인트</li>
          <li className='tabs-item' id='case2' eventKey="1" onClick={() => { setClickedTab(1) }}>미니컵</li>
          <li className='tabs-item' id='case3' eventKey="2" onClick={() => { setClickedTab(2) }}>스틱바</li>
          <li className='tabs-item' id='case4' eventKey="3" onClick={() => { setClickedTab(3) }}>케이크</li>
        </ul>
      </div>

      <div className='menu-item active'>
        <TabContent clickedTab={clickedTab} />
      </div>

      <button type='button' className='viewmore'><p>더보기</p><span>+</span></button>

    </div >
  );
};

export default Tabs;