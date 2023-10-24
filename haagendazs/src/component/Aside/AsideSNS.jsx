import React from 'react';
import { Icon } from '@iconify/react';

const AsideSNS = () => {
  return (
    <div>
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
  );
};

export default AsideSNS;