import styled, { createGlobalStyle } from "styled-components";

export const Lon = styled.div ` 
    width: 100%;
    height: 40px ;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    /* position: fixed;
    bottom: 0;
    left: 0; */
    background-color: #252525;
`

export const GlobalStyle = createGlobalStyle`
    .li {
        width: 143px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .link-b {
        color: #ffffffd8;
        font-size: 12px;
        cursor: pointer;  
    }
    
    .link-b:hover {
        color:#ffffff;
        transition: .21s ease;
    }
`