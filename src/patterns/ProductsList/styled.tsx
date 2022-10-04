import styled from "styled-components";


export const ListProductsStyled = styled.div`
    padding: 0 0 64px 0;    
    background-color: #E5E5E5;   
`

export const RowProductsStyled = styled.div`
    display: flex;  
    flex-wrap: wrap;   
    justify-content: space-between;     
`

export const ColProductsStyled = styled.div`
    display: "flex";
    flex-direction: column;
    flex: 1 1 16.6%;    
    @media (max-width: 1200px) {
        &:nth-last-child(-n+2) {            
            display: none;
        }
    }        
    @media (max-width: 700px) {
        &:nth-last-child(-n+4) {            
            display: none;
        }
    }        
`


