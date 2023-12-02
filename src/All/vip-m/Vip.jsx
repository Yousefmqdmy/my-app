import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Vip, VipBox } from './Vip.styled';
import Ivb from './movie-container/container'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import a from '../IMG/mv-pic/vip/vip-1.jpg';
import b from '../IMG/mv-pic/vip/vip-2.jpg';
import c from '../IMG/mv-pic/vip/vip-3.jpg';
import d from '../IMG/mv-pic/vip/vip-4.jpg';
import e from '../IMG/mv-pic/vip/vip-5.jpg';
import f from '../IMG/mv-pic/vip/vip-6.jpg';
import g from '../IMG/mv-pic/vip/vip-7.jpg';
import h from '../IMG/mv-pic/vip/vip-8.jpg';
import i from '../IMG/mv-pic/vip/vip-9.jpg';
import j from '../IMG/mv-pic/vip/vip-10.jpg';
import k from '../IMG/mv-pic/vip/vip-11.jpg';
import l from '../IMG/mv-pic/vip/vip-12.jpg';
import m from '../IMG/mv-pic/vip/vip-13.jpg';
import n from '../IMG/mv-pic/vip/vip-14.jpg';
function VipM() {
    return (
        <Vip>
            <div className="d-h2"><h3>ویژه</h3></div>
            <VipBox>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className='swiper-change ch-2'>
                        <Ivb title="نبرد با تایتان ها" image={a}></Ivb>
                        <Ivb title="تفریق" image={b}></Ivb>
                        <Ivb title="پنج شب در کنار فردی" image={c}></Ivb>
                        <Ivb title="نگهبانان کهکشان 3" image={d}></Ivb>
                        <Ivb title="اره10" image={e}></Ivb>
                        <Ivb title="بکام" image={f}></Ivb>
                        <Ivb title="ماه" image={g}></Ivb>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-change ch-2'>
                        <Ivb title="هری پاتر4" image={h}></Ivb>
                        <Ivb title="ایکولایزر3" image={i}></Ivb>
                        <Ivb title="چاکی" image={j}></Ivb>
                        <Ivb title="بلو بیتل" image={k}></Ivb>
                        <Ivb title="هری پاتر 2" image={l}></Ivb>
                        <Ivb title="کودک دلبند" image={m}></Ivb>
                        <Ivb title="جنگ جهانی سوم" image={n}></Ivb>
                    </SwiperSlide>
                </Swiper>
            </VipBox>
        </Vip>
    );
}

export default VipM;