import styled, { createGlobalStyle } from "styled-components";

export const FoCo = styled.div`
    width: 100%;
    height: 415px;
    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Container = styled.div`
    margin:0 82px;
    padding: 25px 0 20px;
    width: 1145px;
    height: 369.42px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`
export const Application = styled.div`
    background-color: #222327;
    height: 104px;
    width: 95%;
    border-radius: 10px;
    padding: 15px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const About = styled.div`
    width: 100%;
    height: 220px;
    border-bottom: #ffffff88 solid 1px;
    display: flex;
        align-items: center;
        justify-content: center;
    `
export const Contact = styled.div`
    width:100%;
    height: 45.52px;
    display: flex;
    align-items: center;
    justify-content: center;
    `

export const GlobalStyle = createGlobalStyle`
    .co-icon{
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: left;
        gap:10px;
    }
    
    .fimg {
        width: 100%;
        height: 100%;
    }
    .aj {
        width: fit-content;
    }
    .co-txt{
        width: 70%;
        height: 100%;
    }
    .fo-p {
        float: right;
        font-size: 10px;
        color:#AAAAAA
    }

    .app-in {
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: right;
    }
    .in-a {
        width: 70%;
        justify-content: left;
    }
    .ap-a {
        width: 120px;
        height: 48px;
    }
    .app-link {
        width: 104px;
        height: 100%;
        margin: 0 0 0 16px;
        padding: 0 0 0 4px;
        display: flex;
        align-items: center;
        background-color: #37383e;
        border-radius: 10px;
    }

    .nmv{
        width: 74px;
        height: 74px;
        padding: 4px 4px;
        fill: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(to bottom, rgba(25,147,255,1), rgba(0,95,180,1));
        text-align: center;
        border-radius: 10px;
    }
    .don-txt{
        color:#fff;
        font-size:16px;
        margin: 0 14px 0 0 ;
        font-weight: bolder;
    }
    span {
        text-align: center;
        color: #0077ff;
    }

    .desc {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: right;
        color: #AAAAAA;
        width: 65%;
        height: 100%;
    }
    h5{
    width: 100%;
    font-size:12px;
    color: #fff;
    margin: 0 0 8px 0;
    padding:0;
    text-align: right;
}

.about-p {
        font-size:11px;
        height: 104px;
        text-align: right;
        margin:0;
        padding:0;
        height: 95%;
    }
    .img-box {
    width: 30%;
    height: 100%;
    padding: 0 40px 0 30px;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 25px;
    }
    .img-inner{
    width: 90px;
    height: 90px;
    padding: 10px;
    background: #cccccc;
    text-align: center;
    border-radius: 5px;
    }
`