import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './Styles.css';
import 'swiper/css/navigation';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Category = () => {
    return (
        <div className='my-5'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='md:text-4xl text-xl uppercase text-center -mt-16 text-white shadow-xl shadow-black'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='md:text-4xl text-xl uppercase text-center -mt-16 text-white shadow-xl shadow-black'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='md:text-4xl text-xl uppercase text-center -mt-16 text-white shadow-xl shadow-black'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='md:text-4xl text-xl uppercase text-center -mt-16 text-white shadow-xl shadow-black'>Dessert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='md:text-4xl text-xl uppercase text-center -mt-16 text-white shadow-xl shadow-black'>Salad</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;