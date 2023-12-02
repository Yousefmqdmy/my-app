import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    .vip-co {
        width: 166.24px;
        height: 351px;
        border-radius: 10px;
        text-decoration:none;
    }
    .vip-pic{
        width: 100%;
        height: 244px;
        border-radius: 10px;
        border: none;        
        margin: 15px 0 16px;
    }
    .v-pic {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    h4 {
        float: right;
        color: #fff;
      font-size: 15px;
      font-weight: 200;
      margin: 0 0 4px;
    }

    .fr-box {
        width: 40px;
        height: 20px;
        color: #000000;
        font-size: 12px;
        font-weight:  bolder;
        border-radius: 5px;
        background: linear-gradient(to left, #ffc919, #b46804);
        position: absolute;
        top: 12px;
        margin-left: 8px;
    }
`
export const CoBox = styled.div`
    width: 14%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    `

