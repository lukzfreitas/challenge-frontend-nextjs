import styled from "styled-components";

interface ImageStyledProps {
    padding?: string;
}

export const ImageStyled = styled.div<ImageStyledProps>`    
    padding: ${(p: ImageStyledProps) => p.padding};
`


