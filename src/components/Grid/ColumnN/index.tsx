import styled from "styled-components";
import { JustifyContent } from "../../../models/typesStyled";

interface ColNProps {
    nCols: number;
    justifyContent?: JustifyContent;
    padding?: string;
    paddingTablet?: string;
    paddingMobile?: string; 
}

export const ColN = styled.div<ColNProps>`
    display: "flex";
    flex-direction: column;
    flex: ${(p: ColNProps) => `1 1 ${100 / p.nCols}%`};
    justify-content: ${(p: ColNProps) => p.justifyContent};    
    padding: ${(p: ColNProps) => p.padding};
    @media (max-width: 1200px) {
        padding: ${(p: ColNProps) => p.paddingTablet};
    }
    @media (max-width: 700px) {
        padding: ${(p: ColNProps) => p.paddingMobile};
    }
`