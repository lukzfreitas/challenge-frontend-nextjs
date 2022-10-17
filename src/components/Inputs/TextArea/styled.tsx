import styled from "styled-components";

interface TextAreaProps {
    width?: string;
    height?: string;
    margin?: string;
    invalid?: boolean;
}

export const TextAreaStyled = styled.textarea<TextAreaProps>`    
    background: #FFFFFF;
    border-radius: 4px;    
    font-size: 16px; 
    line-height: 20px;    
    font-weight: 400;
    border: transparent;       
    resize: none;
    font-family: 'Raleway', sans-serif;       
    border-bottom: ${(p: TextAreaProps) => p.invalid ? '1px solid rgb(187, 57, 57)' : '1px solid #A2A2A2'};
    :focus {
        outline-color: transparent;            
        outline-width: 0;        
    }
    ::placeholder {        
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #A2A2A2;    
        font-family: 'Raleway', sans-serif;   
    }
    padding: 8px;
    width: ${(p: TextAreaProps) => p.width};     
    height: ${(p: TextAreaProps) => p.height};
`;

export const FormControl = styled.div<TextAreaProps>`
    background: #FFFFFF;
    display: flex;
    flex-direction: column;        
    border: 0;    
    width: 100%;
    border-radius: 4px;    
    height: ${(p: TextAreaProps) => p.height}; 
    margin: ${(p: TextAreaProps) => p.margin};
`;