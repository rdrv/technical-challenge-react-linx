import React, { Component, Fragment } from 'react';
import Slider from "react-slick";

// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/overlay.css";

// imgs
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';

const showDetails = event => {

  // methods
  const adminMultipleClass = (action, className, delay, ...elements) => {

      elements.forEach(element => {

          const teste = document.querySelector(element);

          if (action === 'add') {
              setTimeout(() => {
                  document.querySelector(element).classList.add(className);
              }, delay);
          } else if (action == 'remove') {
              setTimeout(() => {
                  document.querySelector(element).classList.remove(className);
              }, delay);
          }

      });

  }

  // getting elements
  const overlay = document.querySelector('.overlay-section-wrapper');
  const animationStatus = overlay.getAttribute('data-animation-status');
  const img = event.target;
  const title = document.querySelector('.overlay-section-info-title');
  const detailsContainer = document.querySelector('.details-section');
  const teste = document.querySelector('.slick-list');

  if (animationStatus === 'off') {

      overlay.setAttribute('data-animation-status', 'on');
      overlay.classList.add('overlay-section-wrapper-animation');

      img.classList.add('slider-img-animation');
      title.classList.add('overlay-section-info-title-animation');

      adminMultipleClass('add',
          'overlay-section-header-animation',
          0,
          '.overlay-section-header',
          '.back-circle-effect',
          '.slick-dots',
          '.overlay-section-info-price',
          '.overlay-section-info-description',
      );

      detailsContainer.classList.add('details-section-animation');
      adminMultipleClass('add', 'overlay-reset-animation', 200, '.overlay-section', '.slick-list');

  } else {

      overlay.setAttribute('data-animation-status', 'off');
      overlay.classList.remove('overlay-section-wrapper-animation');

      img.classList.remove('slider-img-animation');
      title.classList.remove('overlay-section-info-title-animation');

      adminMultipleClass('remove',
          'overlay-section-header-animation',
          0,
          '.overlay-section-header',
          '.back-circle-effect',
          '.slick-dots',
          '.overlay-section-info-price',
          '.overlay-section-info-description',
      );

      detailsContainer.classList.remove('details-section-animation');
      adminMultipleClass('remove', 'overlay-reset-animation', 350, '.overlay-section', '.slick-list');
  }

}

class SlickSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider-wrapper">
        <span className="back-circle-effect"></span>
        <Slider {...settings} className="slider-container">
            <img id="0" src={img1} alt="" className="slider-img" onClick={ event => { showDetails(event) } }/>
            <img id="1" src={img2} alt="" className="slider-img" onClick={ event => { showDetails(event) } }/>
            <img id="2" src={img3} alt="" className="slider-img" onClick={ event => { showDetails(event) } }/>
        </Slider>
      </div>
    );
  }
}

export default SlickSlider;