import React from 'react'
import './ImgSlider.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import slider from 'react-slick'
import Slider from 'react-slick/lib/slider'

export default function ImgSlider() {
    const settings={
     dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
    }
  return (
        <Slider className='slider' {...settings}>
            <div className='slider__slide'>
                <a href="">
                    <img src="./images/slider-badging.jpg" alt="" />
                </a>
            </div>
            <div>
                <a href="">
                    <img src="./images/slider-scale.jpg" alt="" />
                </a>
            </div>
            <div>
                <a href="">
                    <img src="./images/slider-badag.jpg" alt="" />
                </a>
            </div>
            <div>
                <a href="">
                    <img src="./images/slider-scales.jpg" alt="" />
                </a>
            </div>
         </Slider>
  )
}
