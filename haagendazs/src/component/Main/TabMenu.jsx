import React from 'react';
import './Tabs.css';

const TabMenu = () => {
  return (
    <div className='tabs-list'>
      <ul>
        <li className='tabs-item active'>파인트</li>
        <li className='tabs-item'>미니컵</li>
        <li className='tabs-item'>스틱바</li>
        <li className='tabs-item'>케이크</li>
      </ul>
    </div>
  );
};

export default TabMenu;