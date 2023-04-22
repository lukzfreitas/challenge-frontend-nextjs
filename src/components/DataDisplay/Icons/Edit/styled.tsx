import styled from 'styled-components';

interface EditIconStyleProps {
  viewBox: string;
  width: string;
  height: string;
}

export const EditIconStyled = styled.svg<EditIconStyleProps>`
  width: ${(p: EditIconStyleProps) => p.width};
  height: ${(p: EditIconStyleProps) => p.height};
  margin: 0px 8px;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
