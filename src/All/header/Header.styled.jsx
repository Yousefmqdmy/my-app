import styled, { createGlobalStyle } from "styled-components";

export const HeaderCo = styled.div`
    width: 100%;
    height: 640px;
    background-color: #000;
    /* background-image: linear-gradient(rgba(18, 18, 18, 0) 10vw, rgb(18, 18, 18) 46.875vw),
     linear-gradient(to left, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0) 50%), 
     url(https://static.namava.ir/Content/Upload/Images/07ab0765-2335-42e1-8891-d578e3b42825.jpg?anchor=middlecenter&crop=auto&scale=both&w=1920&h=900); */
`
export const GlobalStyle = createGlobalStyle`
    :root {
    --swiper-navigation-size: 21px;
    --swiper-theme-color: #fff;
    }
    #splide01 {
        padding:0;
    }
    .splide-ch {
        width: 100%;
        padding: 0;
        margin: 0;
        gap:0;
    }
    .splide__arrow svg {
        fill:#ffffffb2;
    }
    .splide__arrow {
        width: 40px;
        height: 40px;
        position: absolute;
        top:85%;
    }
    .splide__arrow--prev {
        left:120px;
    }
    .splide__arrow--next {
        left:180px;
    }
    .splide__arrow:hover:not(:disabled) svg {
    fill: #FFF
}
`