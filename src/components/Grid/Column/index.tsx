import styled from "styled-components";
import { AlignItems, JustifyContent } from "../../../models/typesStyled";

interface PropsCol {
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    padding?: string;
}

export const Column = styled.div<PropsCol>`
    display: flex;
    flex-direction: column;
    padding: ${(p: PropsCol) => p.padding};
    justify-content: ${(p: PropsCol) => p.justifyContent};
    align-items: ${(p: PropsCol) => p.alignItems};    
`