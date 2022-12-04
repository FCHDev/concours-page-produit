import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'

const SwiperComp = ({color}) => {
    return (
        <div className="h-[70vh] w-full overflow-hidden mt-5 mb-5 md:hidden">
            <Swiper
                navigation={true}
                pagination={true}
                loop={true}
                autoplay={true}>
                {color === "yellow"
                    ? <><SwiperSlide><img src="/images/jaune/01.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/jaune/02.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/jaune/05.jpg" alt=""/></SwiperSlide></>
                    : ""
                }
                {color === "blue"
                    ? <><SwiperSlide><img src="/images/bleu/01.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/bleu/02.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/bleu/05.jpg" alt=""/></SwiperSlide></>
                    : ""
                }
                {color === "gray"
                    ? <><SwiperSlide><img src="/images/gris/01.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/gris/02.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/gris/03.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/gris/04.jpg" alt=""/></SwiperSlide>
                    </>
                    : ""
                }

            </Swiper>


        </div>
    );
};

export default SwiperComp;