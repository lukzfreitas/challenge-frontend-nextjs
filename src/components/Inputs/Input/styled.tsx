import styled from "styled-components";

interface FormControlProps {
    height?: string;
    margin?: string;
    invalid?: boolean;
}

export const InputStyled = styled.input<FormControlProps>`    
    background: #FFFFFF;
    border-radius: 4px;    
    font-size: 16px; 
    line-height: 20px;    
    font-weight: 400;
    border: transparent;        
    padding: 8px;        
    border-bottom: ${(p: FormControlProps) => p.invalid ? '1px solid rgb(187, 57, 57)' : '1px solid #A2A2A2'};
    :focus {
        outline-color: transparent;            
        outline-width: 0;        
    }    
    width: 100%;    
    height: ${(p: FormControlProps) => p.height}; 
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

export const FormControl = styled.div<FormControlProps>`        
        background: #FFFFFF;
        display: flex;
        flex-direction: column;        
        border: 0;
        width: 100%;     
        border-radius: 4px;
        height: ${(p: FormControlProps) => p.height}; 
        margin: ${(p: FormControlProps) => p.margin}; 
    `;