import React , { useRef, useState } from 'react'
import './projects.scss'
import { Data } from './Data'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const Projects = () => {
  return (
    <section className='projects container section' id='projects'>
        <h2 className='section__title'>
            Projects
        </h2>
        <span className='section__subtitle'>
            Web Sites
        </span>

        <Swiper className='projects__container mySwiper'
               loop={true}
               grabCursor={true}
               spaceBetween={24}
               pagination={{
                 clickable: true,
               }}
               breakpoints={{
                 576: {
                   slidesPerView: 1,
                 },
                 768: {
                   slidesPerView: 2,
                   spaceBetween: 48,
                 },
               }}
               modules={[Pagination]}
             >
            {Data.map(item=>(
                <SwiperSlide
                 className='projects__card' key={item.id}>
                    <img src={item.url} alt=""  className='projects__img' /> 
                    <h3 className='projects__name' >{item.title}</h3>
                    <p className='projects__description' >{item.describ}<br /><a href={item.gitLink} className="projects__link" >{item.gitLink}</a></p>
                    <a href={item.link}><buttom className="button project__button">Go to project</buttom></a>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  )
}

export default Projects