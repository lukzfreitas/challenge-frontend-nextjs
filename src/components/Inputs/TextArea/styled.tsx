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
    resize: none;
    :focus {
        outline-color: transparent;            
        outline-width: 0;
        border-bottom: 1px solid #A2A2A2;
    }
    ::placeholder {        
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: #A2A2A2;        
    }
    padding: 8px;
    width: ${(p: TextAreaProps) => p.width};     
`;

export const LabelStyled = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;    
    display: flex;
    align-items: center;
    color: #A2A2A2;  
    padding: 8px;   
`

export const FormControl = styled.div<TextAreaProps>`
    background: #FFFFFF;
    display: flex;
    flex-direction: column;        
    border: 0;    
    width: 100%;
    height: ${(p: TextAreaProps) => p.height}; 
    margin: ${(p: TextAreaProps) => p.margin};
`;