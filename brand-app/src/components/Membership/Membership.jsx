import React from 'react';
import './Membership.css'

const Membership = () => {
  return (
    <div>
      <div className='membership' style={{backgroundImage:'url(/assets/membership_img.png)'}}>
        <button type='button' className='kakao-btn'>카카오로 가입하기</button>
      </div>
    </div>
  );
};

export default Membership;
