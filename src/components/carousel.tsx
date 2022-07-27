import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import chat from '../images/screens/chat.png';
import friend from '../images/screens/friend.png';
import homescreen from '../images/screens/homescreen.png';
import homescreen2 from '../images/screens/homescreen2.png';
import profile from '../images/screens/profile.png';
import start from '../images/screens/start.png';

function FunctionalComponent() {

    const isMobile = window.innerWidth <= 650;

    if (isMobile) {
        return (
            <><div className=".SliderWrapper">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    initialSlide={1}
                    slideNextClass={".nextCarousel"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 50,
                        modifier: 1,
                        slideShadows: false,
                        scale: 0.8,
                    }}
                    pagination={true}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={start} alt="start screen preview" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={homescreen} alt="homescreen screen preview" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={chat} alt="chat screen preview" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={friend} alt="friend screen preview" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={homescreen2} alt="homescreen screen preview" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={profile} alt="profile screen preview" />
                    </SwiperSlide>
                </Swiper>
            </div>
            </>
        );
    } else {
        return (
            <><div className=".SliderWrapper">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    initialSlide={1}
                    slideNextClass={".nextCarousel"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 50,
                        modifier: 1,
                        slideShadows: false,
                        scale: 0.8,
                    }}
                    pagination={true}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={start} alt="start screen preview" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={homescreen} alt="homescreen screen preview" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={chat} alt="chat screen preview" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={friend} alt="friend screen preview" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={homescreen2} alt="homescreen screen preview" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={profile} alt="profile screen preview" />
                    </SwiperSlide>
                </Swiper>
            </div>
            </>
        );
    }


}

export default FunctionalComponent;