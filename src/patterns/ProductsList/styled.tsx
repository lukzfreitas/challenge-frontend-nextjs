import styled from "styled-components";

export const ListProductsStyled = styled.div`
  padding: 0 0 64px 0;
  background-color: #e5e5e5;
`;

export const GridProductsStyled = styled.div`
  display: grid;
  justify-content: space-between;  
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;    
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ColProductsStyled = styled.div`
  display: "flex";
  flex-direction: column;
  flex: 1 1 16.6%;
`;
