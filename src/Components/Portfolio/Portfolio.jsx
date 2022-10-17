import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import './Portfolio.css'
import 'swiper/css'
//import img
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import {themeContext} from '../../Context';
import {useContext} from 'react';
function Portfolio() {
     const theme = useContext(themeContext)
     const darkMode = theme.state.darkMode
  return (
    <div className="portfolio">
        {/* heading */}
        <span style={{color: darkMode? 'white': ''}}>Rencent Project</span>
        <span>Portfolio</span>
        {/* slide */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                 <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                 <img src={Ecommerce} alt="" />
            </SwiperSlide>{" "}
            <SwiperSlide>
                 <img src={HOC} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                 <img src={MusicApp} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio