import styled from "styled-components";

const ProductScreenStyled = styled.div`
    background-color: #E5E5E5;    
    height: 680px;
    display: flex;
    flex-direction: column;    
    padding: 0px 200px;    
    @media (min-width: 1200px) {
        justify-content: center;
        align-items: center;    
    }
    @media (max-width: 1200px) {
        padding: 32px;
        width: 100%;        
    }
    @media (max-width: 700px) {
        padding: 16px;
        width: 100%;        
    }
`

export default ProductScreenStyled;