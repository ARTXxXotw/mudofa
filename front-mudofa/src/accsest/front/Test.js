import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios'
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';


export default function Test() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get(`https://new-uzbek.onrender.com/api/v1/new/`).then(res=>{
      setData(res.data)
    })
  },[])
  return (
    <div>
<Swiper
    slidesPerView={5}
    spaceBetween={30}
    breakpoints={{
      // when window width is >= 640px
      340:{
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      1000:{
        slidesPerView: 3,
      }
    }}
    centeredSlides={true}
    autoplay={{
      delay:2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Navigation]}
    className="mySwiper"
  >
        {data.map((item)=>{
          return(
            <>
            <SwiperSlide><div className="mini-img">
              <img  src={item.image} alt="" />
              </div></SwiperSlide>
            </>
          )
        })}

      </Swiper>
    </div>
  )
}
