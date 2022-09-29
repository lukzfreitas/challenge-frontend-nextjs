import styled from "styled-components";

interface PropsLabelStyle {
    type: 'label1' | 'label2' | 'label3'
}

export const LabelStyle = styled.div<PropsLabelStyle>`        
    font-style: normal;
    font-weight: ${(p: PropsLabelStyle) => p.type === "label1" ? 500 : 700} ;
    font-size: ${(p: PropsLabelStyle) => p.type === "label1" ? '14px' : "16px"};
    line-height: 16px;
    color: ${(p: PropsLabelStyle) => p.type === "label3" ? "#2A7AE4"  :"#464646"};;
    padding: 8px 0px;  
`


