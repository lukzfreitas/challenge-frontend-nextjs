import styled from "styled-components";

interface PropsLabelStyle {    
    fontWeight?: number;
    fontSize?: string;
    color?: string
}

export const LabelStyle = styled.div<PropsLabelStyle>`        
    font-style: normal;    
    font-weight: ${(p: PropsLabelStyle) => p.fontWeight} ;    
    font-size: ${(p: PropsLabelStyle) => p.fontSize};
    line-height: 16px;    
    color: ${(p: PropsLabelStyle) => p.color};
    padding: 8px 0px;  
`


