import styled, { createGlobalStyle } from "styled-components";

export const IntroNav = styled.div`
    width: 100%;
    height: 60px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`
export const GlobalStyle = createGlobalStyle`
    
    .icon {
        width:fit-content;
        color:#fff;
        display: flex;
        align-items: center;
        justify-content: flex;  
    }
    .i-2{
        width: 30%;
        gap: 25px;
    }
    .intro-container{
        width: fit-content;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 50px;
        margin-left: 100px;
    }

    .in-co{
        width: 80px;
        font-size: 13px;
        color:#fff;
        cursor: pointer;
    }

    .in-co:hover{
        color: #0077ff;
        transition: all .5s ease;
    }

    .co-0 {
        padding: 8px 8px ;
        border-radius: 8px;
        border: 1px #FFF solid;

    }
`
