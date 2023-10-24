import React from 'react';
// import ReactDOM from 'react-dom';
import './Aside.css';
import AsideLogo from './AsideLogo';
import AsideButton from './AsideButton';
import AsideMenu from './AsideMenu';
import AsideSNS from './AsideSNS';

const Aside = () => {
  return (
    <div className='side-wrap'>
      <AsideLogo/>
      <AsideButton/>
      <div style={{height:'1px', border:'1px solid grey', padding:'0 10px'}}/>
      <AsideMenu/>
      <div style={{height:'1px', border:'1px solid grey', padding:'0 10px'}}/>
      <AsideSNS/>
      <div className='overlay open'/>
    </div>
  );
};

export default Aside;