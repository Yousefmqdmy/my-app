import { DiCon, GlobalStyle, Swiperbox } from "./Actors.styeld";
import Direbox from './direbox/Direbox';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import a from '../IMG/pics/actors/act-1.jpg'
import b from '../IMG/pics/actors/act-2.jpg'
import c from '../IMG/pics/actors/act-3.jpg'
import d from '../IMG/pics/actors/act-4.jpg'
import e from '../IMG/pics/actors/act-5.jpg'
import f from '../IMG/pics/actors/act-6.jpg'
import g from '../IMG/pics/actors/act-7.jpg'
import h from '../IMG/pics/actors/act-8.jpg'
import i from '../IMG/pics/actors/act-9.jpg'
import j from '../IMG/pics/actors/act-10.jpg'
import k from '../IMG/pics/actors/act-11.jpg'
import l from '../IMG/pics/actors/act-12.jpg'
import m from '../IMG/pics/actors/act-13.jpg'
import n from '../IMG/pics/actors/act-14.jpg'
import o from '../IMG/pics/actors/act-15.jpg'
import p from '../IMG/pics/actors/act-16.jpg'
import q from '../IMG/pics/actors/act-17.jpg'
import r from '../IMG/pics/actors/act-18.jpg'
import s from '../IMG/pics/actors/act-19.jpg'
import t from '../IMG/pics/actors/act-20.jpg'
import u from '../IMG/pics/actors/act-21.jpg'
function Actors() {
    return (
        <DiCon>
            <GlobalStyle></GlobalStyle>
            <div className="d-h2"><h3>ستارگان</h3></div>
            <Swiperbox>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className="swiper-change ch-2">
                        <Direbox title="واکین فینیکس" image={a}></Direbox>
                        <Direbox title="رابرت دونی جونیور" image={b}></Direbox>
                        <Direbox title="کیلیان مورفی" image={d}></Direbox>
                        <Direbox title="مارگو رابی" image={e}></Direbox>
                        <Direbox title="ریدلی اسکات" image={c}></Direbox>
                        <Direbox title="کیانو ریوز" image={f}></Direbox>
                        <Direbox title="آنا د آرماس" image={g}></Direbox>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-change ch-2">
                        <Direbox title="برایان کرانستون" image={h}></Direbox>
                        <Direbox title="جانی دپ" image={i}></Direbox>
                        <Direbox title="کریس همسورث" image={j}></Direbox>
                        <Direbox title="بندیکت کامبربچ" image={k}></Direbox>
                        <Direbox title="برد پیت" image={l}></Direbox>
                        <Direbox title="آنجلینا جولی" image={m}></Direbox>
                        <Direbox title="دوئین جوانسون" image={n}></Direbox>
                    </SwiperSlide>
                    
                    <SwiperSlide className="swiper-change ch-2">
                        <Direbox title="نیکولاس کیج" image={o}></Direbox>
                        <Direbox title="جیمز فرانکو" image={p}></Direbox>
                        <Direbox title="جرد لتو" image={q}></Direbox>
                        <Direbox title="جیم کری" image={r}></Direbox>
                        <Direbox title="هنری کویل" image={s}></Direbox>
                        <Direbox title="جکی چان" image={t}></Direbox>
                        <Direbox title="رایان رینولدز" image={u}></Direbox>
                    </SwiperSlide>
                </Swiper>
            </Swiperbox>

        </DiCon >
    );
}
export default Actors;