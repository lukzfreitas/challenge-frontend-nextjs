import styled from "styled-components";

interface PropsBannerStyle {    
}

export const BannerStyled = styled.div<PropsBannerStyle>`
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 81.15%, rgba(0, 0, 0, 0.8) 100%), url('/banner.png');
    background-position: center top;
    background-size: cover;        
    width: 100%;
    padding: 240px 152px 32px 152px;
    height: 450px;
    @media (max-width: 1600px) {
        height: 352px;        
        padding: 150px 152px 32px 152px;
    }    
    @media (max-width: 900px) {
        height: 352px;
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 81.15%, rgba(0, 0, 0, 0.8) 100%), url('/banner_mobile.png');
        padding: 150px 32px 32px 32px;
    }
    @media (max-width: 700px) {        
        height: 290px;
        top: 78px;
        left: 16px;
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 81.15%, rgba(0, 0, 0, 0.8) 100%), url('/banner_mobile.png');        
    }    
`


