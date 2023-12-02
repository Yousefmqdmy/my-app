import styled, { createGlobalStyle } from "styled-components";

export const DiCon = styled.div`
width: 100%;
    height: 311px;
    background-color: #1a1a1a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: right;
    `
export const Swiperbox = styled.div`
        height: 258px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        `

export const GlobalStyle = createGlobalStyle`
    :root {
    --swiper-navigation-size: 21px;
    --swiper-theme-color: #fff;
}
    .d-h2{
        width: 100%;
        margin: 0 0 16px;
        color: #ffffff;
    }
    h3  {
        font-size: 18px;
        width: fit-content;
        color: #ffffff;
        margin: 0;
        padding: 0 43px;
        float: right;
    }
    .swiper-change {
        display: flex;
    align-items: center;
    justify-content: center;
    }
   .ch-2 {
        gap: 0;
    }
    .s-ch {
        width: 100%;
    }
`