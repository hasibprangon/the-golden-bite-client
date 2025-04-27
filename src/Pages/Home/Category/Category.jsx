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
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='my-5'>
            <SectionTitle 
            subHeading={"From 11am to 12pm"}
            heading={"Order Online"}
            />
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4700,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='rounded-xl' src={slide1} alt="" />
                    <h3 className='md:text-4xl text-xl uppercase text-center -mt-20 text-white '>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-xl' src={slide2} alt="" />
                    <h3 className='md:text-4xl text-xl uppercase text-center -mt-20 text-white '>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-xl' src={slide3} alt="" />
                    <h3 className='md:text-4xl text-xl uppercase text-center -mt-20 text-white '>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-xl' src={slide4} alt="" />
                    <h3 className='md:text-4xl text-xl uppercase text-center -mt-20 text-white '>Dessert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-xl' src={slide5} alt="" />
                    <h3 className='md:text-4xl text-xl uppercase text-center -mt-20 text-white '>Salad</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;