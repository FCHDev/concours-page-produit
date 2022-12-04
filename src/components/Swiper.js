import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
// import 'swiper/css/effect-fade'
// import 'swiper/css/navigation';

const SwiperComp = ({color}) => {
    return (
        <div className="h-[70vh] w-full overflow-hidden mt-5 mb-5 md:hidden bg-black">
            <Swiper
                modules={[Pagination]}
                // navigation={true}
                pagination={{clickable: true}}
                loop
                resistance={false}
                spaceBetween={10}
                slidesPerView={1}>
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