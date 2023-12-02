import { HeaderCo, GlobalStyle } from "./Header.styled";
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'; 
 import Root from './root/Root';
import a from '../IMG/mv-pic/header/h-5.png'
import b from '../IMG/mv-pic/header/h-4.png'
import c from '../IMG/mv-pic/header/h-3.png'
import d from '../IMG/mv-pic/header/h-2.png'
import e from '../IMG/mv-pic/header/h-1.png'
import ha from '../IMG/mv-pic/header/ha.jpg'
import hb from '../IMG/mv-pic/header/hb.jpg'
import hc from '../IMG/mv-pic/header/hc.jpg'
import hd from '../IMG/mv-pic/header/hd.jpg'
import he from '../IMG/mv-pic/header/he.jpg'
function Header() {
    return (
        <HeaderCo>
            <GlobalStyle></GlobalStyle>
            <Splide className="splide-ch">
                <SplideSlide className="">
                    <Root rbimg={ha} type='ورود و پخش' likes='91' ranges='+15' score='9.6' rimg={a} header='اوپنهایمر'></Root>
                </SplideSlide>
                <SplideSlide>
                    <Root rbimg={hb} type='قسمت ها' likes='91' ranges='+15' score='9.6' rimg={b} header='بازی مرکب: چالش'></Root>
                </SplideSlide>
                    <Root rbimg={hc} type='ورود وپخش' likes='91' ranges='+12' score='9.6' rimg={c} header='هری پاتر و شاهزاده دورگه'></Root>
                <SplideSlide>
                </SplideSlide>
                <SplideSlide>
                    <Root rbimg={hd} type='قسمت ها ' likes='91' ranges='+18' score='9.6' rimg={d} header='سرگذشت یک شیطان'></Root>
                </SplideSlide>
                <SplideSlide>
                    <Root rbimg={he} type='ورود و پخش' likes='91' ranges='+15' score='9.6' rimg={e} header='بلیک و مولتیمر'></Root>
                </SplideSlide>
            </Splide>
        </HeaderCo>
    );
}

export default Header;