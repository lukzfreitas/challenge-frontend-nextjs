import styled from "styled-components";

interface PropsBannerStyle {    
}

export const BannerStyled = styled.div<PropsBannerStyle>`
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 81.15%, rgba(0, 0, 0, 0.8) 100%), url('/banner.png');
    background-position: center top;
    background-size: cover;        
    width: 100%;
    padding: 8.5rem 8.1rem 1.1rem;
    height: 450px;
    @media (max-width: 1600px) {
        height: 352px;        
    }    
    
`


