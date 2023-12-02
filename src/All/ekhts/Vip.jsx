import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Vip, VipBox, GlobalStyle} from './Vip.styled';
import Ivb from './movie-container/container'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import a from '../IMG/mv-pic/ekhts/ek-1.jpg';
import b from '../IMG/mv-pic/ekhts/ek-2.jpg';
import c from '../IMG/mv-pic/ekhts/ek-3.jpg';
import d from '../IMG/mv-pic/ekhts/ek-4.jpg';
import e from '../IMG/mv-pic/ekhts/ek-5.jpg';
import f from '../IMG/mv-pic/ekhts/ek-6.jpg';
import g from '../IMG/mv-pic/ekhts/ek-7.jpg';
import h from '../IMG/mv-pic/ekhts/ek-8.jpg';
import i from '../IMG/mv-pic/ekhts/ek-9.jpg';
import j from '../IMG/mv-pic/ekhts/ek-10.jpg';
import k from '../IMG/mv-pic/ekhts/ek-11.jpg';
import l from '../IMG/mv-pic/ekhts/ek-12.jpg';
import m from '../IMG/mv-pic/ekhts/ek-13.jpg';
import n from '../IMG/mv-pic/ekhts/ek-14.jpg';
function VipM() {
    return (
        <Vip className='vch'>
            <GlobalStyle></GlobalStyle>
            <div className="d-h2"><h3>اختصاصی در نماوا</h3></div>
            <VipBox className='v2ch'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className='swiper-change ch-2'>
                        <Ivb title="داوینچیز" image={a}></Ivb>
                        <Ivb title="شریک جرم" image={b}></Ivb>
                        <Ivb title="شبکه مخفی زنان" image={c}></Ivb>
                        <Ivb title="خاتون" image={d}></Ivb>
                        <Ivb title="قورباغه" image={e}></Ivb>
                        <Ivb title="آنتن" image={f}></Ivb>
                        <Ivb title="خسوف" image={g}></Ivb>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-change ch-2'>
                        <Ivb title="همرفیق" image={h}></Ivb>
                        <Ivb title="سیاوش" image={i}></Ivb>
                        <Ivb title="نوبت لیلی" image={j}></Ivb>
                        <Ivb title="گیسو" image={k}></Ivb>
                        <Ivb title="حرفه ای" image={l}></Ivb>
                        <Ivb title="ابلق" image={m}></Ivb>
                        <Ivb title="دراکولا" image={n}></Ivb>
                    </SwiperSlide>
                </Swiper>
            </VipBox>
        </Vip>
    );
}

export default VipM;