import styled from "styled-components";

export const LinksListStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    @media (max-width: 700px) {
        text-align: center;        
        align-items: center;
        gap: 6px;
    }
`