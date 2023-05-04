import styled from "styled-components";

interface PropsLabelStyle {    
    fontWeight?: number;
    fontSize?: string;
    lineHeight?: string; 
    color?: string;
    textAlign: string;
}

export const LabelStyle = styled.div<PropsLabelStyle>`        
    font-style: normal;    
    font-weight: ${(p: PropsLabelStyle) => p.fontWeight} ;    
    font-size: ${(p: PropsLabelStyle) => p.fontSize};
    line-height: ${(p: PropsLabelStyle) => p.lineHeight};    
    color: ${(p: PropsLabelStyle) => p.color};
    padding: 8px 0px;  
    text-align: ${(p: PropsLabelStyle) => p.textAlign};
`
