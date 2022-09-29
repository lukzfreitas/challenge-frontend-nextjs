import styled from "styled-components";

interface FormControlProps {
    width?: string;
    height?: string;
}

export const InputStyled = styled.input<FormControlProps>`    
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
    width: ${(p: FormControlProps) => p.width};     
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

export const FormControl = styled.div<FormControlProps>`
        padding: 8px;
        background: #FFFFFF;
        display: flex;
        flex-direction: column;        
        border: 0;
        width: ${(p: FormControlProps) => p.width}; 
        height: ${(p: FormControlProps) => p.height}; 
    `;