import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../Courasel/HomeSlider.css"

function HomeCarousel() {
   
    return (
//width:800px 
          <Carousel  className='mainSlider' showThumbs={false} autoPlay={true} interval={2000} infiniteLoop>
                <div    style={{cursor : "pointer" }}>
                    <img  className='sliderimg'     style={{width : "80%" , height:"70vh"}}  src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section2_web_04012023_1.jpg" alt="carousel_image"/>
                   
                </div>

                <div   style={{cursor : "pointer" }}>
                    <img  className='sliderimg' style={{width : "80%",height:"70vh" }} src="https://ii3.pepperfry.com/media/wysiwyg/banners/HeroBanner03_2X_300822.jpg" alt="carousel_image"/>
             
                </div>
                <div  style={{cursor : "pointer" }}>
                    <img  className='sliderimg'      style={{width : "80%", height:"70vh" }} src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Promo_2x_1601_ND.jpg" alt="carousel_image"/>
         
                </div>
                <div   className='slider'  style={{cursor : "pointer" }}>
                    <img   className='sliderimg'      style={{width : "80%" , height:"70vh"}} src="https://ii1.pepperfry.com/media/wysiwyg/banners/HeroBanner04_2X_300822.jpg" alt="carousel_image"/>
                
                </div>
            </Carousel>
 
    );
}

export default HomeCarousel;