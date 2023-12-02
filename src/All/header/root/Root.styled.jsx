import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    .r-img {
        width: 270px;
        height:fit-content;
        float: right;
    }
    a{
        text-decoration: none;
        width: 100%;
    }
    .range{
        color: #000;
        font-size: 15px;
        background: #ffffff;
        border-radius: 7px;
        padding: 5px 6px;
    }
    .h__img {
        width: 100%;
    }
    .h-container{
            width: fit-content;
            height: fit-content;
            z-index: 0;
            position: absolute;
            right: 5px;
            top: 17%;
            display: flex;
            margin: 0 20px 0 0 ;
            flex-direction: column;
    }
    li{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
    ul {
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
    }
    .h-p {
            color: #fff;
    }
    h1 {
            font-size: 20px;
            color: #fff;
            float: right;
        }
        ul { 
            float: right;
            width: 100%;
            padding: 0;
        }
        .header-p {
            float: right;
            color:#000;
            background: #FFF;
            border-radius: 5px;
            padding: 8px 10px;
        }
`
export const Cor = styled.div`
    width: 100%;
    height: 600px;
`