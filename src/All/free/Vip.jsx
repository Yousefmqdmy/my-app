import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Vip, VipBox } from './Vip.styled';
import Ivb from './movie-container/container'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import a from '../IMG/mv-pic/free/free-1.jpg';
import b from '../IMG/mv-pic/free/free-2.jpg';
import c from '../IMG/mv-pic/free/free-3.jpg';
import d from '../IMG/mv-pic/free/free-4.jpg';
import e from '../IMG/mv-pic/free/free-5.jpg';
import f from '../IMG/mv-pic/free/free-6.jpg';
import g from '../IMG/mv-pic/free/free-7.jpg';
import h from '../IMG/mv-pic/free/free-8.jpg';
import i from '../IMG/mv-pic/free/free-9.jpg';
import j from '../IMG/mv-pic/free/free-10.jpg';
import k from '../IMG/mv-pic/free/free-11.jpg';
import l from '../IMG/mv-pic/free/free-12.jpg';
import m from '../IMG/mv-pic/free/free-13.jpg';
import n from '../IMG/mv-pic/free/free-14.jpg';
function VipM() {
    return (
        <Vip>
            <div className="d-h2"><h3>رایگان در نماوا</h3></div>
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
                        <Ivb title="سگ بند" image={a}></Ivb>
                        <Ivb title="قهرمان" image={b}></Ivb>
                        <Ivb title="پوست" image={c}></Ivb>
                        <Ivb title="روز صفر" image={d}></Ivb>
                        <Ivb title="اولیور تویست" image={e}></Ivb>
                        <Ivb title="بینوایان" image={f}></Ivb>
                        <Ivb title="مری پاپینز" image={g}></Ivb>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-change ch-2'>
                        <Ivb title="شیهه" image={h}></Ivb>
                        <Ivb title="ارفاق" image={i}></Ivb>
                        <Ivb title="تی تی" image={j}></Ivb>
                        <Ivb title="شبی که ماه کامل شد" image={k}></Ivb>
                        <Ivb title="مطرب" image={l}></Ivb>
                        <Ivb title="عنکبوت" image={m}></Ivb>
                        <Ivb title="اژدها وارد میشود" image={n}></Ivb>
                    </SwiperSlide>
                </Swiper>
            </VipBox>
        </Vip>
    );
}

export default VipM;