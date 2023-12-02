import styled, { createGlobalStyle } from "styled-components";

export const LowContainer = styled.div`
    width: 100%;
    height: 164px;
    padding: 0 0 30px;
    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    `
export const Lc = styled.div`
    width: 30%;
    height: 100%;
    border-radius: 15px;
    `

export const GlobalStyle = createGlobalStyle`
    .img-p{
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }
    .s-ch {
        width: 100%;
    }
    .swiper-change {
        display: flex;
    align-items: center;
    justify-content: center;
    gap: 3%;
    }
`