import styled from 'styled-components';

interface PropsLabelStyle {
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
  color?: string;
  textAlign: string;
  maxWidth?: string;
}

export const InputLabelStyle = styled.input<PropsLabelStyle>`
  border: 0;
  outline: none;  
  background-color: transparent;  
  font-style: normal;
  padding: 8px 0px;
  font-weight: ${(p: PropsLabelStyle) => p.fontWeight};
  font-size: ${(p: PropsLabelStyle) => p.fontSize};
  line-height: ${(p: PropsLabelStyle) => p.lineHeight};
  color: ${(p: PropsLabelStyle) => p.color};  
  text-align: ${(p: PropsLabelStyle) => p.textAlign};
  max-width: ${(p: PropsLabelStyle) => p.maxWidth};
  :focus {
    outline: none;
  }
`;
