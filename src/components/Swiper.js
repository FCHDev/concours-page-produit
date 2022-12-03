import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

const SwiperComp = ({color}) => {
    return (
        <div className="h-[75vh] w-full overflow-hidden mb-5">
            <Swiper
                navigation={true}
                pagination={true}>
                {color === "yellow"
                    ? <><SwiperSlide><img src="/images/jaune/01.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/jaune/02.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/jaune/03.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/jaune/04.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/jaune/05.jpg" alt=""/></SwiperSlide></>
                    : ""
                }
                {color === "blue"
                    ? <><SwiperSlide><img src="/images/bleu/01.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/bleu/02.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/bleu/03.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide zoom={true}><img src="/images/bleu/04.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/bleu/05.jpg" alt=""/></SwiperSlide></>
                    : ""
                }
                {color === "gray"
                    ? <><SwiperSlide><img src="/images/gris/01.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/gris/02.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/gris/03.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/gris/04.jpg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="/images/gris/05.jpg" alt=""/></SwiperSlide></>
                    : ""
                }

            </Swiper>


        </div>
    );
};

export default SwiperComp;