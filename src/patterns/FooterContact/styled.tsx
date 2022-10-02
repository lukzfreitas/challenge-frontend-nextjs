import styled from "styled-components";

export const FooterContactStyled = styled.div`    
    background-color: #EAF2FD;
    height: 368px;
    padding: 72px 152px;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1200px) {
        height: 440px;
        padding: 32px;
    }    
`

export const ColumnDesktopStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 25%;
    @media (max-width: 1200px) {
        display: none;
    }
`

export const ColumnTabletStyled = styled.div`
    display: none;
    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        flex: 1 1 25%;
    }    
`

export const Column2Styled = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 50%; 
    @media (max-width: 1200px) {
        flex: 1 1 75%;
    }
`

