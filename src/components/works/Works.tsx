import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./Works.scss";

import tea1Img from "/src/assets/img/works/tea-1.jpg";
import tea2Img from "/src/assets/img/works/tea-2.jpg";
import tea3Img from "/src/assets/img/works/tea-3.jpg";

const Works = () => {
    return (
        <section className="works">
            <div className="container">
                <h2 className="title-h2">check out our works</h2>
                <div className="works__wrapper">
                    <span className="icon-left-open works__slider-nav"></span>
                    <span className="icon-right-open works__slider-nav"></span>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        navigation={{
                            prevEl: ".icon-left-open",
                            nextEl: ".icon-right-open",
                        }}
                        pagination={{ clickable: true }}
                        loop={true}
                        breakpoints={{
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                            1920: {
                                spaceBetween: 35,
                                slidesPerView: 3,
                            },
                        }}
                        className="works__slider"
                    >
                        <SwiperSlide>
                            <img
                                src={tea1Img}
                                alt="tea1"
                                className="works__img"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={tea2Img}
                                alt="tea2"
                                className="works__img"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={tea3Img}
                                alt="tea3"
                                className="works__img"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={tea2Img}
                                alt="tea2"
                                className="works__img"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Works;
