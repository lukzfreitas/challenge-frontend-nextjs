import styled from "styled-components";

interface FormControlProps { 
    height?: string;
    margin?: string;
}

export const InputStyled = styled.input<FormControlProps>`    
    background: #FFFFFF;
    border-radius: 4px;    
    font-size: 16px; 
    line-height: 20px;    
    font-weight: 400;
    border: transparent;
    padding: 8px;        
    :focus {
        outline-color: transparent;            
        outline-width: 0;
        border-bottom: 1px solid #A2A2A2;
    }    
    width: 100%;    
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
        height: ${(p: FormControlProps) => p.height}; 
        margin: ${(p: FormControlProps) => p.margin}; 
    `;