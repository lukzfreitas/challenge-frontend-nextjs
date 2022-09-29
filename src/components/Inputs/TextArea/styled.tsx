import styled from "styled-components";

interface TextAreaProps {
    width?: string;
    height?: string;
    margin?: string;
}

export const TextAreaStyled = styled.textarea<TextAreaProps>`    
    background: #FFFFFF;
    border-radius: 4px;    
    font-size: 16px; 
    line-height: 20px;    
    font-weight: 400;
    border: transparent;       
    :focus {
        outline-color: transparent;            
        outline-width: 0;
    }    
    width: ${(p: TextAreaProps) => p.width};     
`;

export const LabelStyled = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    padding: 0 0 8px 0;
    display: flex;
    align-items: center;
    color: #A2A2A2; 
`

export const FormControl = styled.div<TextAreaProps>`
    margin: p;
    padding: 8px;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;        
    border: 0;
    width: ${(p: TextAreaProps) => p.width}; 
    height: ${(p: TextAreaProps) => p.height}; 
    margin: ${(p: TextAreaProps) => p.margin}; 
`;