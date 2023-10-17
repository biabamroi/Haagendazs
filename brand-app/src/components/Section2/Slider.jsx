import React, { useState } from 'react';
import './Slider.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
  const images = [
    { id: 1, image: '/assets/section2/iecle.png', description: '하겐다즈 마카롱 레몬&유자' },
    { id: 2, image: 'image2.jpg', description: '이미지 2 설명' },
    { id: 3, image: 'image3.jpg', description: '이미지 3 설명' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div className="slide-wrap">
      <div className="top-box">
        <img
          src={images[currentSlide].image}
          alt={images[currentSlide].description}
        />
        <p>{images[currentSlide].description}</p>
      </div>
      <div className="bottom-box">
        <Slider {...settings}>
          {images.map((img) => (
            <div key={img.id} className="slide">
              <img src={img.image} alt={img.description} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;