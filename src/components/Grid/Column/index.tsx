import styled from "styled-components";
import { AlignItems, JustifyContent } from "../../../models/typesStyled";

interface PropsCol {
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    padding?: string;
    paddingTablet?: string;
    paddingMobile?: string;
}

export const Column = styled.div<PropsCol>`
    display: flex;
    flex-direction: column;
    padding: ${(p: PropsCol) => p.padding};
    justify-content: ${(p: PropsCol) => p.justifyContent};
    align-items: ${(p: PropsCol) => p.alignItems};    
    @media (max-width: 1200px) {
        padding: ${(p: PropsCol) => p.paddingTablet};
    }
    @media (max-width: 700px) {
        padding: ${(p: PropsCol) => p.paddingMobile};
    }
`