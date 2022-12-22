import styled from "styled-components";

interface PropsLoaderStyled {
  width: string;
  height: string;
  margin?: string;
}

export const LoaderStyled = styled.div<PropsLoaderStyled>`  
  width: ${(p: PropsLoaderStyled) => p.width};
  height: ${(p: PropsLoaderStyled) => p.height};
  margin: ${(p: PropsLoaderStyled) => p.margin};  
  display: block;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;  
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
