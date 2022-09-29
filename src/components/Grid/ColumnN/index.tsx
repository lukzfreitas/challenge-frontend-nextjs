import styled from "styled-components";
import { JustifyContent } from "../../../models/typesStyled";

interface ColNProps {
    nCols: number;
    justifyContent?: JustifyContent;
    padding?: string;
}

export const ColN = styled.div<ColNProps>`
    display: "flex";
    flex-direction: column;
    flex: ${(p: ColNProps) => `1 1 ${100 / p.nCols}%`};
    justify-content: ${(p: ColNProps) => p.justifyContent};    
    padding: ${(p: ColNProps) => p.padding};
`