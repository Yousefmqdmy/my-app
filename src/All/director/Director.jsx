import { DiCon, GlobalStyle, Swiperbox } from "./Director.styled";
import Direbox from './direbox/Direbox';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import a from '../IMG/pics/dire-picture/dire1.jpg';
import b from '../IMG/pics/dire-picture/dire2.jpg';
import c from '../IMG/pics/dire-picture/dire3.jpg';
import d from '../IMG/pics/dire-picture/dire4.jpg';
import e from '../IMG/pics/dire-picture/dire5.jpg';
import f from '../IMG/pics/dire-picture/dire6.jpg';
import g from '../IMG/pics/dire-picture/dire7.jpg';
import h from '../IMG/pics/dire-picture/dire8.jpg';
import i from '../IMG/pics/dire-picture/dire9.jpg';
import j from '../IMG/pics/dire-picture/dire10.jpg';
import k from '../IMG/pics/dire-picture/dire11.jpg';
import l from '../IMG/pics/dire-picture/dire12.jpg';
import m from '../IMG/pics/dire-picture/dire13.jpg';
import n from '../IMG/pics/dire-picture/dire14.jpg';
import o from '../IMG/pics/dire-picture/dire15.jpg';
import p from '../IMG/pics/dire-picture/dire16.jpg';
import q from '../IMG/pics/dire-picture/dire17.jpg';
import r from '../IMG/pics/dire-picture/dire18.jpg';
import s from '../IMG/pics/dire-picture/dire19.jpg';
import t from '../IMG/pics/dire-picture/dire20.jpg';
import u from '../IMG/pics/dire-picture/dire21.jpg';
function Director() {
    return (
        <DiCon>
            <GlobalStyle></GlobalStyle>
            <div className="d-h2"><h3>کارگردانان بزرگ</h3></div>
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
                        <Direbox title="دیوید فینچر" image={a}></Direbox>
                        <Direbox title="کریستوفر نولان" image={b}></Direbox>
                        <Direbox title="هایائو میازاکی" image={d}></Direbox>
                        <Direbox title="وس اندرسون" image={e}></Direbox>
                        <Direbox title="ریدلی اسکات" image={c}></Direbox>
                        <Direbox title="ماکوتو شینگای" image={f}></Direbox>
                        <Direbox title="گرتا گرویگ" image={g}></Direbox>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-change ch-2">
                        <Direbox title="مارتین اسکورسیزی" image={h}></Direbox>
                        <Direbox title="رومن پولانسکی" image={i}></Direbox>
                        <Direbox title="تیم برتون" image={j}></Direbox>
                        <Direbox title="استنلی کوبریک" image={k}></Direbox>
                        <Direbox title="استیون اسپیلبرگ" image={l}></Direbox>
                        <Direbox title="مارتین مک دونا" image={m}></Direbox>
                        <Direbox title="گیرمو دل تورو" image={n}></Direbox>
                    </SwiperSlide>
                    
                    <SwiperSlide className="swiper-change ch-2">
                        <Direbox title="دن کوان" image={o}></Direbox>
                        <Direbox title="جیمز کامرون" image={p}></Direbox>
                        <Direbox title="کنت برنا" image={q}></Direbox>
                        <Direbox title="پل توماس اندرسون" image={r}></Direbox>
                        <Direbox title="کوئنتین تارانتینو" image={s}></Direbox>
                        <Direbox title="آلفونسو کوارون" image={t}></Direbox>
                        <Direbox title="کلینت استوود" image={u}></Direbox>
                    </SwiperSlide>
                </Swiper>
            </Swiperbox>

        </DiCon >
    );
}
export default Director;


