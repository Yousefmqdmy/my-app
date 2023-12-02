import { LowContainer, Lc, GlobalStyle } from "./LH.styled";
import p1 from "../IMG/shbke-makhfi-znan.jpg"
import p2 from "../IMG/davinchiz.jpg"
import p3 from "../IMG/sharik.jpg"
import p4 from "../IMG/ablq.jpg"
import p5 from "../IMG/ww3.jpg"
import p6 from "../IMG/aqrb.jpg"
import p7 from "../IMG/double.jpg"
import p8 from "../IMG/popular.jpg"
import p9 from "../IMG/oscar.jpg"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Lh() {
    return (
        <LowContainer>
            <GlobalStyle></GlobalStyle>
            <Swiper className="s-ch"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                n onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className="swiper-change">
                    <Lc>
                        <a href="#">
                            <img className="img-p" src={p1} />
                        </a>
                    </Lc>
                    <Lc>
                        <a href="#">
                            <img className="img-p" src={p2} />
                        </a>
                    </Lc>
                    <Lc>
                        <a href="#">
                            <img className="img-p" src={p3} />
                        </a>
                    </Lc>
                </SwiperSlide>
                <SwiperSlide className="swiper-change">
                    <Lc>
                        <a href="#">
                            <img className="img-p" src={p4} />
                        </a>
                    </Lc>
                    <Lc>
                        <a href="#">
                            <img className="img-p" src={p5} />
                        </a>
                    </Lc>
                    <Lc>
                        <a href="#">
                            <img className="img-p" src={p6} />
                        </a>
                    </Lc>
                </SwiperSlide>
                <SwiperSlide className="swiper-change">
                    <Lc>
                        <a href="#">
                            <img className="img-p" src={p7} />
                        </a>
                    </Lc>
                    <Lc>
                        <a href="#">
                            <img className="img-p" src={p8} />
                        </a>
                    </Lc>
                    <Lc>
                        <a href="#">
                            <img className="img-p" src={p9} />
                        </a>
                    </Lc>
                </SwiperSlide>
            </Swiper>


        </LowContainer>
    );
}

export default Lh;