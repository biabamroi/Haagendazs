import React from 'react';
import './Tabs.css'
import tabimg1 from './images/tab-img1.jpg'
import tabimg2 from './images/tab-img2.jpg'
import tabimg3 from './images/tab-img3.jpg'
import tabimg4 from './images/tab-img4.jpg'


const TabMenuItems = () => {

  return (
    <>
      <div className='menu-item active'>
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
        <button type='button' className='viewmore'><p>더보기</p><span>+</span></button>
      </div>
      <div className='menu-item'>
        <h2>임시</h2>
      </div>
    </>
  );
};

export default TabMenuItems;