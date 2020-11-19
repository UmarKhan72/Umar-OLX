import React from 'react';
import './Banner.css';
import BannerImg from '../images/hero_bg_pk.jpg';

function Banner() {
  return (
    <div>
      <div>
        <center><img src={BannerImg} className="img-fluid umBannerImg" alt="..." /></center>
      </div>
    </div>
  )
}

export default Banner