import styled from "styled-components";

interface ButtonStyledProps {
    typeStyle: 'primary' | 'secondary',
    disabled?: boolean,
    width?: string
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;    
    left: 16px;
    top: 16px;    
    border: ${(p: ButtonStyledProps) => p.typeStyle === "secondary" ? "1px solid #2A7AE4" : "none"};
    background-color: ${(p: ButtonStyledProps) => p.disabled ? "#a9a9aa" : p.typeStyle === "primary" ? "#2A7AE4" : "transparent"};
    :hover {
        transition: ${(p: ButtonStyledProps) => p.disabled ? 'none' : 'all 0.2s ease-in-out'};
        background-color: ${(p: ButtonStyledProps) => p.disabled ? '#a9a9aa' : p.typeStyle === "primary" ? "#5595E9" : "#D4E4FA"};
    }
    width: ${(p: ButtonStyledProps) => p.width};
    height: 51px;
    cursor: pointer;
    @media (max-width: 700px) {
        height: 40px;                
    }    
`

export const LabelStyled = styled.label<ButtonStyledProps>`
    color: ${(p: ButtonStyledProps) => p.typeStyle === "primary" ? "#FFFFFF" : "#2A7AE4"};
    font-style: normal;    
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    @media (max-width: 700px) {        
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
    }
`









