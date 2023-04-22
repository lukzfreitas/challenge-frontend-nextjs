import styled from 'styled-components';

interface DeleteIconStyleProps {
  viewBox: string;
  width: string;
  height: string;
}

export const DeleteIconStyled = styled.svg<DeleteIconStyleProps>`
  width: ${(p: DeleteIconStyleProps) => p.width};
  height: ${(p: DeleteIconStyleProps) => p.height};
  margin: 0px 8px;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
