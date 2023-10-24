import React from 'react';
import './AsideMenu.css';
import { Icon } from '@iconify/react';

const AsideMenu = () => {
  return (
    <div>
      <ul>
        <p>Brand</p>
        <Icon icon="lucide:list-plus" />
        <Icon icon="lucide:list-minus" />
        <span>하겐다즈</span>
        <li>하겐다즈 소개</li>
        <li>하겐다즈 브랜드 스토리</li>
        <li>하겐다즈 가치</li>
        <li>하겐다즈의 품질 좋은 원료</li>
      </ul>
      <ul>
        <p>Products</p>
        <Icon icon="lucide:list-plus" />
        <Icon icon="lucide:list-minus" />
        <span>전체제품</span>
      </ul>
      <ul>
        <p>Notice</p>
        <Icon icon="lucide:list-plus" />
        <Icon icon="lucide:list-minus" />
        <span>공지사항/고객센터/이벤트/매장안내</span>
      </ul>
    </div>
  );
};

export default AsideMenu;