import styled from "styled-components";

interface ButtonInputFileStyledProps {
    typeStyle: 'primary' | 'secondary',
    disabled?: boolean,
    width?: string
}

export const ButtonInputFileStyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;    
    left: 8px;
    top: 8px;
    border: ${(p: ButtonInputFileStyledProps) => p.typeStyle === "secondary" ? "1px solid #2A7AE4" : "none"};
    background-color: ${(p: ButtonInputFileStyledProps) => p.typeStyle === "primary" ? "#2A7AE4" : "transparent"};
    :hover {
        transition: all 0.2s ease-in-out;
        background-color: ${(p: ButtonInputFileStyledProps) => p.typeStyle === "primary" ? "#5595E9" : "#D4E4FA"};
    }
    width: ${(p: ButtonInputFileStyledProps) => p.width};
    height: 51px;
    cursor: pointer;
    @media (max-width: 700px) {
        height: 40px;                
    }    
`

export const LabelStyled = styled.label<ButtonInputFileStyledProps>`
    color: ${(p: ButtonInputFileStyledProps) => p.typeStyle === "primary" ? "#FFFFFF" : "#2A7AE4"};
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

