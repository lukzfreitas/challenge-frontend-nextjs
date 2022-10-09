import styled from "styled-components";
import { AlignItems, JustifyContent } from "../../../models/typesStyled";

interface ColNProps {
    nCols: number;
    nColsTablet?: number;
    nColsMobile?: number;    
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    padding?: string;
    paddingTablet?: string;
    paddingMobile?: string; 
}

export const ColN = styled.div<ColNProps>`
    display: "flex";
    flex-direction: column;    
    flex: ${(p: ColNProps) => `1 1 ${100 / p.nCols}%`};
    justify-content: ${(p: ColNProps) => p.justifyContent};    
    align-items: ${(p: ColNProps) => p.alignItems};    
    padding: ${(p: ColNProps) => p.padding};
    @media (max-width: 1200px) {
        padding: ${(p: ColNProps) => p.paddingTablet};
        flex: ${(p: ColNProps) => `1 1 ${100 / p.nColsTablet}%`};        
    }
    @media (max-width: 700px) {
        padding: ${(p: ColNProps) => p.paddingMobile};
        flex: ${(p: ColNProps) => `1 1 ${100 / p.nColsMobile}%`};
    }
`